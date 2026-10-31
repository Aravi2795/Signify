import React from 'react';
import type { AvatarAnimationEngine } from '../services/avatar/AvatarAnimationEngine';
import { ThreeAvatarCanvas } from './ThreeAvatarCanvas';

export interface AvatarCanvasProps {
  engine: AvatarAnimationEngine;
  model?: 'priya' | 'rahul';
  signingSpeed?: number;
  className?: string;
}

/**
 * 3D GLB Avatar Canvas
 * Renders the 3D WebGL Mixamo GLB avatar model (xbot.glb / ybot.glb)
 * sourced from the Sign_Verse reference dataset.
 */
export const AvatarCanvas: React.FC<AvatarCanvasProps> = (props) => {
  return <ThreeAvatarCanvas {...props} />;
};
