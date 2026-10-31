# sona-final-year-mini-it-aids-d-aravikutty78-668
StartupFair hackathon: Solo Participant 19 (Final year mini project (IT / AIDS Dept))

---

# Signify - Accessible Smart Sign Language Telephony & Real-Time 3D ISL Avatar System

Signify is an accessible communication application designed to make voice phone calls accessible for Deaf and Hard-of-Hearing individuals. It translates incoming spoken voice in real time into continuous captions and 3D Indian Sign Language (ISL) animations powered by a rigged 3D avatar engine.

## Key Features

- **Live Voice-to-Sign Translation**: Converts live voice audio stream into semantic tokens and corresponding ISL gesture sequences.
- **Interactive 3D Avatar (Three.js + WebGL)**: Renders 3D avatar models (XBot and YBot) with bone articulation and finger animations derived from the Sign_Verse dataset.
- **Dual-Panel Workspace**:
  - **Mobile Phone Chassis**: An interactive smartphone UI featuring Incoming Call, In-Call, Live Captions, 3D Sign view, and Post-Call Summary.
  - **Studio Telemetry & Companion Console**: Real-time monitoring of ISL grammar tokens, live speech-to-text streaming, scenario selection, and manual phrase testing.
- **Multi-scenario Simulation**: Pre-configured conversational scenarios (office meetings, medical consultations) with dynamic playback.
- **Live Mic Support**: Test using real microphone input via Web Speech API.
- **Accessibility & Customization**: High contrast mode, signing speed adjustments (0.75x, 1.0x, 1.25x), avatar model switching (Rahul / Priya), and light/dark theme toggle.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **3D Graphics**: Three.js, GLTFLoader (Mixamo GLB models)
- **Styling**: Tailwind CSS & Custom Design System
- **Icons**: Lucide React
- **Dataset**: Sign_Verse ISL Bone Rotations Dataset

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/StartupFair/sona-final-year-mini-it-aids-d-aravikutty78-668.git

# Navigate to the project directory
cd sona-final-year-mini-it-aids-d-aravikutty78-668

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Building for Production

```bash
npm run build
```
