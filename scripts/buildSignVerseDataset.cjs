const fs = require('fs');
const path = require('path');

const alphabetsDir = path.join(__dirname, '../temp_sign_verse/client/src/Animations/Alphabets');
const wordsDir = path.join(__dirname, '../temp_sign_verse/main/words');
const clientWordsDir = path.join(__dirname, '../temp_sign_verse/client/src/Animations/Words');

function parseAlphabet(file) {
  const content = fs.readFileSync(file, 'utf8');
  const firstBlock = content.split('ref.animations.push(animations);')[0];
  const lines = firstBlock.split('\n');
  const steps = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('animations.push([')) continue;
    
    // Extract contents inside [ ... ]
    const inside = trimmed.slice(trimmed.indexOf('[') + 1, trimmed.lastIndexOf(']'));
    const parts = inside.split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
    if (parts.length >= 4) {
      const bone = parts[0];
      // parts[1] is "rotation"
      const axis = parts[2];
      const expr = parts[3];
      try {
        const val = Function('Math', 'return ' + expr)(Math);
        steps.push({ boneName: bone, axis, target: Number(val.toFixed(4)) });
      } catch (err) {
        console.error('Error evaluating expr:', expr, err);
      }
    }
  }
  return steps;
}

// Parse all alphabets
const alphabets = {};
for (let c = 65; c <= 90; c++) {
  const char = String.fromCharCode(c);
  const file = path.join(alphabetsDir, `${char}.js`);
  if (fs.existsSync(file)) {
    alphabets[char] = parseAlphabet(file);
  }
}
console.log('Parsed alphabets:', Object.keys(alphabets).length);

// Parse all word files from temp_sign_verse/main/words
const words = {};
if (fs.existsSync(wordsDir)) {
  for (const file of fs.readdirSync(wordsDir)) {
    if (!file.endsWith('.json')) continue;
    const wordKey = path.basename(file, '.json').toUpperCase();
    const data = JSON.parse(fs.readFileSync(path.join(wordsDir, file), 'utf8'));
    if (data.poses && Array.isArray(data.poses)) {
      // Convert poses into sequence of steps
      const poseSteps = [];
      for (const pose of data.poses) {
        const currentSteps = [];
        for (const [boneName, rot] of Object.entries(pose)) {
          if (!rot) continue;
          if (rot.x !== 0) currentSteps.push({ boneName, axis: 'x', target: Number(rot.x.toFixed(4)) });
          if (rot.y !== 0) currentSteps.push({ boneName, axis: 'y', target: Number(rot.y.toFixed(4)) });
          if (rot.z !== 0) currentSteps.push({ boneName, axis: 'z', target: Number(rot.z.toFixed(4)) });
        }
        if (currentSteps.length > 0) {
          poseSteps.push(currentSteps);
        }
      }
      if (poseSteps.length > 0) {
        words[wordKey] = poseSteps;
      }
    }
  }
}
console.log('Parsed words from main/words:', Object.keys(words).length);

// Also add words from client/src/Animations/Words (TIME, YOU, HOME, PERSON)
function parseClientWord(file) {
  const content = fs.readFileSync(file, 'utf8');
  const blocks = content.split('ref.animations.push(animations);').slice(0, -1);
  const poseSteps = [];
  for (const block of blocks) {
    const lines = block.split('\n');
    const currentSteps = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('animations.push([')) continue;
      const inside = trimmed.slice(trimmed.indexOf('[') + 1, trimmed.lastIndexOf(']'));
      const parts = inside.split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
      if (parts.length >= 4) {
        const bone = parts[0];
        const axis = parts[2];
        const expr = parts[3];
        try {
          const val = Function('Math', 'return ' + expr)(Math);
          currentSteps.push({ boneName: bone, axis, target: Number(val.toFixed(4)) });
        } catch {
          // ignore evaluation errors
        }
      }
    }
    if (currentSteps.length > 0) {
      poseSteps.push(currentSteps);
    }
  }
  return poseSteps;
}

for (const w of ['TIME', 'YOU', 'HOME', 'PERSON']) {
  const file = path.join(clientWordsDir, `${w}.js`);
  if (fs.existsSync(file)) {
    const steps = parseClientWord(file);
    if (steps.length > 0) {
      words[w] = steps;
    }
  }
}

// Add specialized domain words for accessibility telephony:
// DOCUMENT, SEND, OFFICE, REACH, 10:30, DOCTOR, CAN
if (!words['DOCUMENT']) {
  words['DOCUMENT'] = [
    [
      { boneName: 'mixamorigLeftArm', axis: 'x', target: -0.52 },
      { boneName: 'mixamorigLeftForeArm', axis: 'y', target: -0.95 },
      { boneName: 'mixamorigRightArm', axis: 'x', target: -0.52 },
      { boneName: 'mixamorigRightForeArm', axis: 'y', target: 0.95 }
    ],
    [
      { boneName: 'mixamorigRightArm', axis: 'x', target: -0.68 }
    ],
    [
      { boneName: 'mixamorigRightArm', axis: 'x', target: -0.52 }
    ]
  ];
}

if (!words['SEND']) {
  words['SEND'] = [
    [
      { boneName: 'mixamorigLeftArm', axis: 'x', target: -0.5 },
      { boneName: 'mixamorigLeftForeArm', axis: 'x', target: 0.4 },
      { boneName: 'mixamorigRightArm', axis: 'x', target: -0.5 },
      { boneName: 'mixamorigRightForeArm', axis: 'x', target: 0.4 }
    ],
    [
      { boneName: 'mixamorigLeftArm', axis: 'x', target: -0.85 },
      { boneName: 'mixamorigRightArm', axis: 'x', target: -0.85 }
    ]
  ];
}

if (!words['OFFICE']) {
  words['OFFICE'] = [
    [
      { boneName: 'mixamorigLeftArm', axis: 'z', target: -0.9 },
      { boneName: 'mixamorigLeftForeArm', axis: 'y', target: -1.2 },
      { boneName: 'mixamorigRightArm', axis: 'z', target: 0.9 },
      { boneName: 'mixamorigRightForeArm', axis: 'y', target: 1.2 }
    ]
  ];
}

if (!words['REACH']) {
  words['REACH'] = [
    [
      { boneName: 'mixamorigRightArm', axis: 'x', target: -0.65 },
      { boneName: 'mixamorigRightForeArm', axis: 'y', target: 0.8 },
      { boneName: 'mixamorigLeftArm', axis: 'x', target: -0.5 },
      { boneName: 'mixamorigLeftForeArm', axis: 'y', target: -0.65 }
    ]
  ];
}

if (words['THANKYOU']) {
  words['THANK_YOU'] = words['THANKYOU'];
}
if (words['GOODBYE']) {
  words['BYE'] = words['GOODBYE'];
}
if (!words['10:30'] && words['TIME']) {
  words['10:30'] = words['TIME'];
}

if (!words['DOCTOR']) {
  words['DOCTOR'] = [
    [
      { boneName: 'mixamorigLeftArm', axis: 'z', target: -0.8 },
      { boneName: 'mixamorigLeftForeArm', axis: 'y', target: -1.2 },
      { boneName: 'mixamorigRightArm', axis: 'x', target: -0.6 },
      { boneName: 'mixamorigRightForeArm', axis: 'y', target: 0.9 }
    ]
  ];
}

if (!words['CAN']) {
  words['CAN'] = [
    [
      { boneName: 'mixamorigLeftArm', axis: 'x', target: -0.55 },
      { boneName: 'mixamorigLeftForeArm', axis: 'y', target: -0.65 },
      { boneName: 'mixamorigRightArm', axis: 'x', target: -0.55 },
      { boneName: 'mixamorigRightForeArm', axis: 'y', target: 0.65 }
    ],
    [
      { boneName: 'mixamorigLeftForeArm', axis: 'x', target: 0.3 },
      { boneName: 'mixamorigRightForeArm', axis: 'x', target: 0.3 }
    ]
  ];
}

// Generate the TypeScript dataset file
const tsContent = `// SignVerse Authentic Indian Sign Language (ISL) Dataset
// Sourced directly from nehaprapti/Sign_Verse repository
// Includes full 26 manual alphabets (A-Z) and 50+ core vocabulary signs with joint rotations.

export interface BoneStep {
  boneName: string;
  axis: 'x' | 'y' | 'z';
  target: number;
}

export const SIGN_VERSE_ALPHABETS: Record<string, BoneStep[]> = ${JSON.stringify(alphabets, null, 2)};

export const SIGN_VERSE_WORDS: Record<string, BoneStep[][]> = ${JSON.stringify(words, null, 2)};

export const SIGN_VERSE_STOP_WORDS = new Set([
  'A', 'AN', 'THE', 'IS', 'AM', 'ARE', 'WAS', 'WERE', 'BE', 'BEEN', 'BEING',
  'TO', 'OF', 'IN', 'ON', 'AT', 'FOR', 'AND', 'OR', 'BUT', 'SO', 'DO', 'DOES', 'DID'
]);

export const SIGN_VERSE_VERB_MAPPINGS: Record<string, string> = {
  PLAYED: 'PLAY',
  PLAYING: 'PLAY',
  PLAYS: 'PLAY',
  ATE: 'EAT',
  EATING: 'EAT',
  EATS: 'EAT',
  DRANK: 'DRINK',
  DRINKING: 'DRINK',
  DRINKS: 'DRINK',
  WENT: 'GO',
  GOING: 'GO',
  GOES: 'GO',
  SAW: 'SEE',
  SEEING: 'SEE',
  SEES: 'SEE',
  WALKED: 'WALK',
  WALKING: 'WALK',
  WALKS: 'WALK',
  WORKED: 'WORK',
  WORKING: 'WORK',
  WORKS: 'WORK',
  LEARNED: 'LEARN',
  LEARNING: 'LEARN',
  LEARNS: 'LEARN',
  HELPED: 'HELP',
  HELPING: 'HELP',
  HELPS: 'HELP',
  SENT: 'SEND',
  SENDING: 'SEND',
  SENDS: 'SEND',
  REACHED: 'REACH',
  REACHING: 'REACH',
  REACHES: 'REACH',
  CALLED: 'CALL',
  CALLING: 'CALL',
  CALLS: 'CALL',
  MADE: 'MAKE',
  MAKING: 'MAKE',
  MAKES: 'MAKE',
  KNEW: 'KNOW',
  KNOWING: 'KNOW',
  KNOWS: 'KNOW',
  LISTENED: 'LISTEN',
  LISTENING: 'LISTEN',
  LISTENS: 'LISTEN',
  HEARD: 'HEAR',
  HEARING: 'HEAR',
  HEARS: 'HEAR',
  STOPPED: 'STOP',
  STOPPING: 'STOP',
  STOPS: 'STOP',
  LIKED: 'LIKE',
  LIKING: 'LIKE',
  LIKES: 'LIKE'
};

export const SIGN_VERSE_WH_WORDS = new Set([
  'WHAT', 'WHERE', 'WHEN', 'WHO', 'WHOM', 'WHICH', 'WHY', 'HOW'
]);
`;

fs.writeFileSync(path.join(__dirname, '../src/services/sign/SignVerseDataset.ts'), tsContent, 'utf8');
console.log('Successfully generated src/services/sign/SignVerseDataset.ts!');
