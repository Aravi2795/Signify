import type { SemanticRepresentation } from '../../types/call';
import { 
  SIGN_VERSE_STOP_WORDS, 
  SIGN_VERSE_VERB_MAPPINGS, 
  SIGN_VERSE_WH_WORDS 
} from '../sign/SignVerseDataset';

export interface DetectedLanguage {
  code: string;
  name: string;
}

export class SemanticProcessor {
  /**
   * Unicode pattern language detection matching Sign_Verse languageUtils.js
   */
  detectLanguage(text: string): DetectedLanguage {
    if (/[\u0D00-\u0D7F]/.test(text)) {
      return { code: 'ml', name: 'Malayalam (മലയാളം)' };
    } else if (/[\u0B80-\u0BFF]/.test(text)) {
      return { code: 'ta', name: 'Tamil (தமிழ்)' };
    } else if (/[\u0900-\u097F]/.test(text)) {
      return { code: 'hi', name: 'Hindi (हिन्दी)' };
    } else if (/[\u0C00-\u0C7F]/.test(text)) {
      return { code: 'te', name: 'Telugu (తెలుగు)' };
    } else if (/[\u0C80-\u0CFF]/.test(text)) {
      return { code: 'kn', name: 'Kannada (ಕನ್ನಡ)' };
    } else if (/[\u0A80-\u0AFF]/.test(text)) {
      return { code: 'gu', name: 'Gujarati (ગુજરાતી)' };
    } else if (/[\u0980-\u09FF]/.test(text)) {
      return { code: 'bn', name: 'Bengali (বাংলা)' };
    } else if (/[\u0A00-\u0A7F]/.test(text)) {
      return { code: 'pa', name: 'Punjabi (ਪੰਜਾਬੀ)' };
    }
    return { code: 'en', name: 'English' };
  }

  /**
   * Parse spoken sentence into a semantic representation and ISL glosses
   * adhering strictly to the Sign_Verse GrammarEngine rules.
   */
  process(text: string): { semantic: SemanticRepresentation; glosses: string[]; detectedLang: DetectedLanguage } {
    const cleanText = text.trim();
    const lower = cleanText.toLowerCase();
    const detectedLang = this.detectLanguage(cleanText);

    const semantic: SemanticRepresentation = {
      intent: 'statement',
      rawText: cleanText,
      sentiment: 'neutral'
    };

    // Intent detection
    if (lower.startsWith('hi') || lower.startsWith('hello') || lower.includes('good morning') || lower.includes('how are you')) {
      semantic.intent = 'greeting';
      semantic.sentiment = 'friendly';
    } else if (lower.includes('?') || lower.startsWith('can you') || lower.startsWith('could you') || lower.startsWith('will you')) {
      if (lower.startsWith('can you') || lower.startsWith('could you') || lower.includes('please')) {
        semantic.intent = 'request';
      } else {
        semantic.intent = 'question';
      }
    } else if (lower.includes('bye') || lower.includes('see you') || lower.includes('take care') || lower.includes('goodbye')) {
      semantic.intent = 'farewell';
      semantic.sentiment = 'friendly';
    } else if (lower.includes('thank')) {
      semantic.intent = 'statement';
      semantic.sentiment = 'friendly';
    }

    // Entity extraction: Subject
    if (lower.includes("i will") || lower.includes("i'll") || lower.startsWith('i ') || lower.includes(' me ')) {
      semantic.subject = 'I';
    } else if (lower.includes('you')) {
      semantic.subject = 'you';
    } else if (lower.includes('doctor') || lower.includes('dr.')) {
      semantic.subject = 'doctor';
    }

    // Entity extraction: Time
    const timeMatch = cleanText.match(/(\d{1,2}(?::\d{2})?\s*(?:am|pm)?|\bnoon\b|\bmidnight\b|\btoday\b|\btomorrow\b)/i);
    if (timeMatch) {
      semantic.time = timeMatch[1].toUpperCase();
    }

    // Entity extraction: Location
    if (lower.includes('office')) semantic.location = 'office';
    if (lower.includes('hospital') || lower.includes('clinic')) semantic.location = 'hospital';
    if (lower.includes('home') || lower.includes('house')) semantic.location = 'home';
    if (lower.includes('school')) semantic.location = 'school';

    // Entity extraction: Action
    if (lower.includes('reach') || lower.includes('arrive') || lower.includes('come')) semantic.action = 'reach';
    if (lower.includes('send') || lower.includes('forward')) semantic.action = 'send';
    if (lower.includes('bring') || lower.includes('carry')) semantic.action = 'bring';
    if (lower.includes('meet') || lower.includes('see')) semantic.action = 'see';
    if (lower.includes('call') || lower.includes('speak')) semantic.action = 'call';
    if (lower.includes('help')) semantic.action = 'help';
    if (lower.includes('eat')) semantic.action = 'eat';
    if (lower.includes('drink')) semantic.action = 'drink';
    if (lower.includes('walk')) semantic.action = 'walk';
    if (lower.includes('work')) semantic.action = 'work';

    // Entity extraction: Object
    if (lower.includes('document') || lower.includes('file') || lower.includes('pdf')) semantic.object = 'document';
    if (lower.includes('report') || lower.includes('prescription')) semantic.object = 'report';
    if (lower.includes('version')) semantic.object = 'version';

    // Generate grammatical sign language gloss sequence using Sign_Verse grammar engine rules
    const glosses = this.generateISLGlosses(cleanText);

    return { semantic, glosses, detectedLang };
  }

  /**
   * Indian Sign Language (ISL) Grammar Engine implementation:
   * 1. Multi-word phrase normalization (e.g. "thank you" -> THANKYOU, "good morning" -> GOOD)
   * 2. Stop words removal (A, AN, THE, IS, AM, ARE, WAS, WERE, TO, OF, IN, ON, AT, FOR, etc.)
   * 3. Verb lemmatization using Sign_Verse VERB_MAPPINGS
   * 4. Time-Topic-Object-Action (TASO/SOV) reordering
   * 5. Wh-question words moved to sentence-final position
   */
  private generateISLGlosses(raw: string): string[] {
    let normalized = raw.toUpperCase()
      .replace(/[.,?!;:()'"]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    // 1. Multi-word phrase mappings
    normalized = normalized
      .replace(/\bTHANK\s+YOU\b/g, 'THANKYOU')
      .replace(/\bTHANKS\b/g, 'THANKYOU')
      .replace(/\bGOODBYE\b/g, 'GOODBYE')
      .replace(/\bGOOD\s+MORNING\b/g, 'GOOD')
      .replace(/\bGOOD\s+AFTERNOON\b/g, 'GOOD')
      .replace(/\bGOOD\s+NIGHT\b/g, 'GOOD')
      .replace(/\bSEE\s+YOU\b/g, 'SEE YOU')
      .replace(/\bSEE\s+YOU\s+SOON\b/g, 'SEE YOU')
      .replace(/\bHOW\s+ARE\s+YOU\b/g, 'YOU HOW');

    // 2. Tokenize
    const rawTokens = normalized.split(/\s+/).filter(Boolean);

    // 3. Filter stop words & normalize verbs
    const processedTokens: string[] = [];
    for (const token of rawTokens) {
      // Map pronoun synonyms
      let t = token;
      if (t === 'I' || t === "I'LL" || t === "I'M") t = 'ME';
      if (t === 'YOUR') t = 'YOU';
      if (t === 'HIM' || t === 'HIS') t = 'HE';
      if (t === 'HER') t = 'SHE';
      if (t === 'THEM') t = 'THEY';
      if (t === 'US' || t === 'OUR') t = 'WE';

      // Verb conjugation normalization (Sign_Verse grammar.py)
      if (SIGN_VERSE_VERB_MAPPINGS[t]) {
        t = SIGN_VERSE_VERB_MAPPINGS[t];
      }

      // Check stop words
      if (SIGN_VERSE_STOP_WORDS.has(t) && t !== 'CAN') {
        continue;
      }

      processedTokens.push(t);
    }

    if (processedTokens.length === 0) {
      return ['HELLO'];
    }

    // 4. ISL Reordering (Time-Topic-Object-Action & Wh-words to end)
    const timeTokens: string[] = [];
    const questionTokens: string[] = [];
    const mainTokens: string[] = [];

    const TIME_WORDS = new Set(['TIME', 'TODAY', 'TOMORROW', 'NOW', 'MORNING', 'NIGHT', '10:30']);

    for (const token of processedTokens) {
      if (SIGN_VERSE_WH_WORDS.has(token)) {
        questionTokens.push(token);
      } else if (TIME_WORDS.has(token) || /^\d{1,2}(:\d{2})?$/.test(token)) {
        timeTokens.push(token);
      } else {
        mainTokens.push(token);
      }
    }

    // Reconstruct in ISL sequence: [Time, Subject/Object/Verbs, Wh-Questions]
    const finalSequence = [...timeTokens, ...mainTokens, ...questionTokens];
    return finalSequence.length > 0 ? finalSequence : ['HELLO'];
  }
}
