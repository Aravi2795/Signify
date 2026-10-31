import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { AvatarAnimationEngine } from '../services/avatar/AvatarAnimationEngine';
import type { SignSequenceItem } from '../types/call';
import { 
  SIGN_VERSE_WORDS, 
  SIGN_VERSE_ALPHABETS, 
  type BoneStep 
} from '../services/sign/SignVerseDataset';

interface ThreeAvatarCanvasProps {
  engine: AvatarAnimationEngine;
  model?: 'priya' | 'rahul'; // rahul -> xbot.glb, priya -> ybot.glb
  signingSpeed?: number;
  className?: string;
}

// Sign_Verse resting pose rotations (from defaultPose.js)
const REST_POSE: Record<string, { x: number; y: number; z: number }> = {
  mixamorigNeck: { x: Math.PI / 12, y: 0, z: 0 },
  mixamorigLeftArm: { x: 0, y: 0, z: -Math.PI / 3 },
  mixamorigLeftForeArm: { x: 0, y: -Math.PI / 1.5, z: 0 },
  mixamorigLeftHand: { x: 0, y: 0, z: 0 },
  mixamorigRightArm: { x: 0, y: 0, z: Math.PI / 3 },
  mixamorigRightForeArm: { x: 0, y: Math.PI / 1.5, z: 0 },
  mixamorigRightHand: { x: 0, y: 0, z: 0 },
};

const FINGER_JOINTS = [
  'Thumb1', 'Thumb2', 'Thumb3',
  'Index1', 'Index2', 'Index3',
  'Middle1', 'Middle2', 'Middle3',
  'Ring1', 'Ring2', 'Ring3',
  'Pinky1', 'Pinky2', 'Pinky3'
];

export const ThreeAvatarCanvas: React.FC<ThreeAvatarCanvasProps> = ({
  engine,
  model = 'rahul',
  signingSpeed = 1.0,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const avatarRef = useRef<THREE.Group | null>(null);
  const bonesMapRef = useRef<Map<string, THREE.Bone>>(new Map());

  // Animation queue state
  const animationQueueRef = useRef<BoneStep[][]>([]);
  const currentStepRef = useRef<BoneStep[]>([]);
  const currentSignRef = useRef<SignSequenceItem | undefined>(undefined);

  // Model file choice from Sign_Verse
  const glbPath = model === 'rahul' ? '/models/xbot.glb' : '/models/ybot.glb';

  // Helper to reliably look up bones regardless of 'mixamorig:' or 'mixamorig' prefix
  const getBone = (name: string): THREE.Bone | undefined => {
    // 1. Exact match in map
    let bone = bonesMapRef.current.get(name);
    if (bone) return bone;

    // 2. Normalized prefix conversion (mixamorig: vs mixamorig)
    const baseName = name.replace(/^mixamorig:?/, '');
    bone = bonesMapRef.current.get(`mixamorig:${baseName}`) ||
           bonesMapRef.current.get(`mixamorig${baseName}`) ||
           bonesMapRef.current.get(baseName);
    if (bone) return bone;

    // 3. Fallback to Three.js scene search
    if (avatarRef.current) {
      bone = (avatarRef.current.getObjectByName(`mixamorig:${baseName}`) ||
              avatarRef.current.getObjectByName(`mixamorig${baseName}`) ||
              avatarRef.current.getObjectByName(name)) as THREE.Bone | undefined;
    }
    return bone;
  };

  // Immediate reset to rest pose
  const resetToRestPose = () => {
    Object.entries(REST_POSE).forEach(([boneName, rot]) => {
      const bone = getBone(boneName);
      if (bone) {
        bone.rotation.set(rot.x, rot.y, rot.z);
      }
    });

    ['Left', 'Right'].forEach(side => {
      FINGER_JOINTS.forEach(j => {
        const bone = getBone(`mixamorig${side}Hand${j}`);
        if (bone) bone.rotation.set(0, 0, 0);
      });
    });
  };

  // Generate authentic bone articulation steps from Sign_Verse dataset
  const generateBoneStepsForSign = (sign: SignSequenceItem): BoneStep[][] => {
    const gloss = sign.gloss.toUpperCase().trim();

    // 1. Direct word match from Sign_Verse dataset
    if (SIGN_VERSE_WORDS[gloss]) {
      return SIGN_VERSE_WORDS[gloss].map(stepList => [...stepList]);
    }

    // 2. Direct manual alphabet match (A-Z) from Sign_Verse
    if (SIGN_VERSE_ALPHABETS[gloss]) {
      return [SIGN_VERSE_ALPHABETS[gloss]];
    }

    // 3. Fallback character fingerspelling
    const char = gloss[0] || 'A';
    if (SIGN_VERSE_ALPHABETS[char]) {
      return [SIGN_VERSE_ALPHABETS[char]];
    }

    return [];
  };

  // Main Three.js Scene Setup & Model Loader
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    setLoading(true);
    setLoadError(null);

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const getThemeBgColor = () => {
      const contrast = document.documentElement.getAttribute('data-contrast');
      if (contrast === 'high') return 0x000000;
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      if (theme === 'light') return 0xf1f3f7;
      return 0x09090b;
    };
    scene.background = new THREE.Color(getThemeBgColor());

    const themeObserver = new MutationObserver(() => {
      if (sceneRef.current) {
        sceneRef.current.background = new THREE.Color(getThemeBgColor());
      }
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'data-contrast']
    });

    const rect = container.getBoundingClientRect();
    const width = rect.width || 380;
    const height = rect.height || 500;

    // Camera setup:
    // Model height spans y = 0 to 1.60m. Head is at y ~ 1.50-1.60m, chest at 1.20m.
    // Placing camera at y = 1.22m, z = 1.95m and looking at (0, 1.18, 0) with 40deg FOV
    // ensures the entire head, shoulders, chest, and full arm gestures are framed cleanly.
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.22, 1.95);
    camera.lookAt(new THREE.Vector3(0, 1.18, 0));
    cameraRef.current = camera;

    // WebGL Renderer with High-DPI support
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Three-point Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffaee, 2.2);
    keyLight.position.set(1.4, 3.0, 2.0);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xd4d4d8, 1.1);
    fillLight.position.set(-1.8, 2.2, 1.4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xa1a1aa, 1.5);
    rimLight.position.set(0, 2.6, -2.0);
    scene.add(rimLight);

    const floorLight = new THREE.HemisphereLight(0x1f1f24, 0x09090b, 0.7);
    scene.add(floorLight);

    // GLTF / GLB Loader
    const loader = new GLTFLoader();
    bonesMapRef.current.clear();

    loader.load(
      glbPath,
      (gltf) => {
        const avatar = gltf.scene;
        avatarRef.current = avatar;

        avatar.traverse((child) => {
          if (child instanceof THREE.SkinnedMesh) {
            child.frustumCulled = false;
            child.castShadow = true;
            child.receiveShadow = true;

            if (child.material) {
              const mat = child.material as THREE.MeshStandardMaterial;
              mat.roughness = 0.5;
              mat.metalness = 0.15;
              mat.needsUpdate = true;
            }
          }
          if (child instanceof THREE.Bone) {
            bonesMapRef.current.set(child.name, child);
          }
        });

        avatar.position.set(0, 0, 0);
        avatar.rotation.set(0, 0, 0);
        scene.add(avatar);

        // Apply resting pose
        resetToRestPose();
        setLoading(false);
      },
      undefined,
      (err) => {
        console.error('Error loading GLB avatar model:', err);
        setLoadError(`Failed to load ${glbPath}. Verify file exists in public/models/`);
        setLoading(false);
      }
    );

    // Animation & Render Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animateLoop = () => {
      animId = requestAnimationFrame(animateLoop);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Advance avatar engine sequence timeline
      engine.update(performance.now());

      // Check current active sign from engine
      const activeSign = engine.getActiveSign();
      if (activeSign !== currentSignRef.current) {
        currentSignRef.current = activeSign;
        if (activeSign) {
          const steps = generateBoneStepsForSign(activeSign);
          animationQueueRef.current = steps;
          currentStepRef.current = animationQueueRef.current.shift() || [];
        } else {
          animationQueueRef.current = [];
          currentStepRef.current = [];
        }
      }

      // Smooth bone interpolation toward target rotations (Lerp)
      if (currentStepRef.current.length > 0) {
        const stepRate = Math.min(1.0, 8.5 * signingSpeed * delta);
        let allReached = true;

        for (const step of currentStepRef.current) {
          const bone = getBone(step.boneName);
          if (bone) {
            const currentVal = bone.rotation[step.axis];
            const diff = step.target - currentVal;
            if (Math.abs(diff) > 0.03) {
              bone.rotation[step.axis] += diff * stepRate;
              allReached = false;
            } else {
              bone.rotation[step.axis] = step.target;
            }
          }
        }

        if (allReached) {
          if (animationQueueRef.current.length > 0) {
            currentStepRef.current = animationQueueRef.current.shift() || [];
          } else {
            // All steps completed, stay in final pose until new sign or clear
            currentStepRef.current = [];
          }
        }
      } else if (!currentSignRef.current) {
        // Smoothly interpolate back to rest pose
        const returnRate = Math.min(1.0, 4.0 * delta);
        Object.entries(REST_POSE).forEach(([boneName, rot]) => {
          const bone = getBone(boneName);
          if (bone) {
            bone.rotation.x += (rot.x - bone.rotation.x) * returnRate;
            bone.rotation.y += (rot.y - bone.rotation.y) * returnRate;
            bone.rotation.z += (rot.z - bone.rotation.z) * returnRate;
          }
        });

        // Natural idle breathing & slight head nod
        const spine = getBone('mixamorigSpine1');
        if (spine) {
          spine.rotation.x = Math.sin(time * 1.5) * 0.015;
        }
        const neck = getBone('mixamorigNeck');
        if (neck) {
          neck.rotation.x = (Math.PI / 12) + Math.sin(time * 1.5) * 0.012;
          neck.rotation.y = Math.sin(time * 0.8) * 0.018;
        }
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animId = requestAnimationFrame(animateLoop);

    // Resize handler
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const r = container.getBoundingClientRect();
      const w = r.width || 380;
      const h = r.height || 500;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      themeObserver.disconnect();
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current && rendererRef.current.domElement) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [glbPath, signingSpeed, engine]);

  return (
    <div className={`relative w-full h-full select-none overflow-hidden ${className}`}>
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="w-full h-full block" />

      {/* Model indicator pill (sleek subtle badge at bottom right) */}
      <div className="absolute bottom-2 right-3 z-10 pointer-events-none">
        <span className="px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-neutral-400">
          3D GLB • {model === 'rahul' ? 'XBot' : 'YBot'}
        </span>
      </div>

      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 bg-[#0d1117]/85 backdrop-blur-sm flex flex-col items-center justify-center text-white z-10">
          <div className="w-9 h-9 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin mb-3" />
          <span className="text-xs font-semibold tracking-wider text-neutral-200 uppercase">
            Loading 3D Sign Avatar...
          </span>
          <span className="text-[11px] text-neutral-400 mt-1 font-mono">
            {model === 'rahul' ? 'xbot.glb' : 'ybot.glb'}
          </span>
        </div>
      )}

      {/* Error state */}
      {loadError && (
        <div className="absolute inset-0 bg-[#0d1117]/90 flex flex-col items-center justify-center p-6 text-center text-neutral-400 z-10">
          <span className="text-2xl mb-2">⚠️</span>
          <p className="text-xs text-amber-300 font-medium mb-1">3D GLB Model Notice</p>
          <p className="text-[11px] text-neutral-400">{loadError}</p>
        </div>
      )}
    </div>
  );
};
