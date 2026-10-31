export type CallStatus = 
  | 'idle'
  | 'incoming'
  | 'connecting'
  | 'connected'
  | 'ended'
  | 'summary';

export type CallMode = 'call' | 'transcript' | 'sign';

export type SpeakerRole = 'caller' | 'user';

export interface CallerInfo {
  name: string;
  phoneNumber: string;
  avatarUrl?: string;
  subtitle?: string;
  initials?: string;
}

export interface TranscriptWord {
  word: string;
  timestamp: number;
}

export interface TranscriptEntry {
  id: string;
  speaker: SpeakerRole;
  text: string;
  timestamp: number;
  isFinal: boolean;
  words?: TranscriptWord[];
}

export interface SemanticRepresentation {
  intent: 'greeting' | 'statement' | 'question' | 'request' | 'time' | 'acknowledgement' | 'farewell' | 'unknown';
  subject?: string;
  action?: string;
  object?: string;
  time?: string;
  location?: string;
  sentiment?: 'neutral' | 'friendly' | 'urgent';
  rawText: string;
}

export interface HandPose {
  shape: 'open' | 'fist' | 'point' | 'pinch' | 'flat' | 'two-fingers' | 'thumbs-up' | 'cup' | 'spread';
  rotation: number; // in degrees
  fingersCurled: [number, number, number, number, number]; // thumb, index, mid, ring, pinky (0: straight, 1: curled)
}

export interface ArmPose {
  elbowX: number; // relative normalized -1 to 1
  elbowY: number;
  wristX: number;
  wristY: number;
  handPose: HandPose;
}

export interface HeadPose {
  tilt: number; // degrees
  nod: number; // degrees
  turn: number;
  eyebrows: 'neutral' | 'raised' | 'furrowed';
  mouth: 'neutral' | 'smile' | 'open-o' | 'open-a' | 'closed';
  eyes: 'normal' | 'blink' | 'wide';
}

export interface SignKeyframe {
  timestampOffset: number; // 0 to 1 progress within sign
  leftArm: ArmPose;
  rightArm: ArmPose;
  head: HeadPose;
}

export interface SignSequenceItem {
  id: string;
  sign: string;
  gloss: string;
  duration: number; // in seconds
  description: string;
  keyframes: SignKeyframe[];
  meaning?: string;
}

export interface CallSettings {
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  autoScroll: boolean;
  showTimestamps: boolean;
  signLanguage: 'ISL' | 'ASL';
  signingSpeed: 0.75 | 1.0 | 1.25;
  avatarModel: 'priya' | 'rahul';
  highContrast: boolean;
  reducedMotion: boolean;
  hapticFeedback: boolean;
}

export interface CallSession {
  id: string;
  caller: CallerInfo;
  status: CallStatus;
  mode: CallMode;
  duration: number; // seconds
  isMuted: boolean;
  isSpeakerOn: boolean;
  isCallerSpeaking: boolean;
  audioLevel: number; // 0.0 to 1.0
  transcript: TranscriptEntry[];
  currentPartialText: string;
  currentSemantic?: SemanticRepresentation;
  currentSignSequence: SignSequenceItem[];
  activeSignIndex: number;
  activeSign?: SignSequenceItem;
  sttAvailable: boolean;
  signAvailable: boolean;
}
