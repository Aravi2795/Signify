import type { CallerInfo } from '../types/call';

export interface ScenarioStep {
  delayAfterPrevious: number; // milliseconds pause before speaking
  speaker: 'caller' | 'user';
  text: string;
  words: { text: string; delayMs: number }[]; // progressive streaming words
}

export interface ConversationScenario {
  id: string;
  caller: CallerInfo;
  title: string;
  description: string;
  steps: ScenarioStep[];
}

export const CONVERSATION_SCENARIOS: ConversationScenario[] = [
  {
    id: 'john-mathew-office',
    title: 'John Mathew (Office & Project Document)',
    description: 'Master prompt reference scenario with document request and 10:30 arrival time',
    caller: {
      name: 'John Mathew',
      phoneNumber: '+91 98401 23456',
      subtitle: 'Mobile Call',
      initials: 'JM'
    },
    steps: [
      {
        delayAfterPrevious: 1800,
        speaker: 'caller',
        text: 'Hi deepak, how are you?',
        words: [
          { text: 'Hi', delayMs: 400 },
          { text: 'deepak,', delayMs: 450 },
          { text: 'how', delayMs: 380 },
          { text: 'are', delayMs: 250 },
          { text: 'you?', delayMs: 400 }
        ]
      },
      {
        delayAfterPrevious: 2600,
        speaker: 'caller',
        text: 'I wanted to check if you received the project document.',
        words: [
          { text: 'I', delayMs: 300 },
          { text: 'wanted', delayMs: 320 },
          { text: 'to', delayMs: 200 },
          { text: 'check', delayMs: 350 },
          { text: 'if', delayMs: 200 },
          { text: 'you', delayMs: 250 },
          { text: 'received', delayMs: 380 },
          { text: 'the', delayMs: 200 },
          { text: 'project', delayMs: 400 },
          { text: 'document.', delayMs: 450 }
        ]
      },
      {
        delayAfterPrevious: 3000,
        speaker: 'caller',
        text: "I'll reach the office around 10:30.",
        words: [
          { text: "I'll", delayMs: 350 },
          { text: 'reach', delayMs: 380 },
          { text: 'the', delayMs: 200 },
          { text: 'office', delayMs: 420 },
          { text: 'around', delayMs: 360 },
          { text: '10:30.', delayMs: 500 }
        ]
      },
      {
        delayAfterPrevious: 2800,
        speaker: 'caller',
        text: 'Can you send me the latest version?',
        words: [
          { text: 'Can', delayMs: 320 },
          { text: 'you', delayMs: 280 },
          { text: 'send', delayMs: 350 },
          { text: 'me', delayMs: 220 },
          { text: 'the', delayMs: 200 },
          { text: 'latest', delayMs: 380 },
          { text: 'version?', delayMs: 420 }
        ]
      },
      {
        delayAfterPrevious: 3200,
        speaker: 'caller',
        text: 'Thanks, see you soon!',
        words: [
          { text: 'Thanks,', delayMs: 400 },
          { text: 'see', delayMs: 300 },
          { text: 'you', delayMs: 250 },
          { text: 'soon!', delayMs: 400 }
        ]
      }
    ]
  },
  {
    id: 'dr-priya-clinic',
    title: 'Dr. Priya Sharma (Clinic Appointment)',
    description: 'Medical appointment confirmation and hospital visit instructions',
    caller: {
      name: 'Dr. Priya Sharma',
      phoneNumber: '+91 94440 98765',
      subtitle: 'Apollo Clinic',
      initials: 'PS'
    },
    steps: [
      {
        delayAfterPrevious: 1800,
        speaker: 'caller',
        text: 'Hello, I am calling regarding your appointment.',
        words: [
          { text: 'Hello,', delayMs: 420 },
          { text: 'I', delayMs: 250 },
          { text: 'am', delayMs: 200 },
          { text: 'calling', delayMs: 350 },
          { text: 'regarding', delayMs: 380 },
          { text: 'your', delayMs: 250 },
          { text: 'appointment.', delayMs: 450 }
        ]
      },
      {
        delayAfterPrevious: 2800,
        speaker: 'caller',
        text: 'Doctor Sharma is available at 4 PM today.',
        words: [
          { text: 'Doctor', delayMs: 350 },
          { text: 'Sharma', delayMs: 380 },
          { text: 'is', delayMs: 200 },
          { text: 'available', delayMs: 400 },
          { text: 'at', delayMs: 200 },
          { text: '4', delayMs: 300 },
          { text: 'PM', delayMs: 300 },
          { text: 'today.', delayMs: 400 }
        ]
      },
      {
        delayAfterPrevious: 2800,
        speaker: 'caller',
        text: 'Please bring your medical report.',
        words: [
          { text: 'Please', delayMs: 380 },
          { text: 'bring', delayMs: 340 },
          { text: 'your', delayMs: 250 },
          { text: 'medical', delayMs: 400 },
          { text: 'report.', delayMs: 450 }
        ]
      },
      {
        delayAfterPrevious: 2500,
        speaker: 'caller',
        text: 'Thank you, take care!',
        words: [
          { text: 'Thank', delayMs: 350 },
          { text: 'you,', delayMs: 280 },
          { text: 'take', delayMs: 300 },
          { text: 'care!', delayMs: 400 }
        ]
      }
    ]
  }
];
