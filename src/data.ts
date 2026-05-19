import type { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: 'tracksense',
    name: 'TrackSense',
    description:
      'Solo-designed and shipped a consumer iOS app end-to-end — from product concept and motion UI design to App Store release. Features real-time playback sync, shared listening sessions via 6-character share codes, dynamic album art color theming, and a web dashboard with library stats. Built full-stack using Claude Code: SwiftUI + MusicKit on iOS, React + Vite + Tailwind on web, Firebase Cloud Functions on the backend.',
    mode: 'Design + Engineering',
    tags: ['SwiftUI', 'MusicKit', 'React', 'Tailwind', 'Firebase', 'Claude Code'],
    url: 'https://tracksense.fm',
    process: {
      summary:
        'Add your process summary here — a short paragraph about what drove this project, what problem it solved, and what you were trying to prove to yourself.',
      steps: [
        {
          number: 1,
          title: 'research & scoping',
          body: 'Describe your research phase here — user interviews, competitor analysis, what you learned.',
        },
        {
          number: 2,
          title: 'design',
          body: 'Describe your design process — Figma explorations, key visual decisions, what you iterated on.',
        },
        {
          number: 3,
          title: 'engineering',
          body: 'Describe how you built it — architecture choices, technical challenges, what you shipped.',
        },
      ],
      decisions: [
        'Add a key decision or tradeoff you made here.',
        'And another one — what did you choose and why?',
      ],
    },
  },
  {
    id: 2,
    slug: 'tailr',
    name: 'Tailr',
    description:
      'A Next.js tool that analyses job listings — via pasted text or URL — and uses the Claude API to extract ranked skills, qualifications, and tone signals to help candidates tailor their resume. Designed and shipped end-to-end using Claude Code.',
    mode: 'Design + Engineering',
    tags: ['Next.js', 'Claude API', 'TypeScript', 'Claude Code'],
    url: 'https://tailr.russal.dev',
  },
  {
    id: 3,
    slug: 'dermanote',
    name: 'DermaNote',
    description:
      'iOS health app for tracking psoriasis flare progression over time. Daily check-in flow with a custom gradient intensity slider, symptom and photo logging, and treatment task tracking. History view with a calendar heatmap and Swift Charts trend lines over 30 days. Firebase-backed.',
    mode: 'Design + Engineering',
    tags: ['SwiftUI', 'Swift Charts', 'Firebase'],
    url: undefined,
  },
  {
    id: 4,
    slug: 'gdg-checkin',
    name: 'GDG Check-In App',
    description:
      'Real-time event check-in system with live dashboards, QR self-service check-in, role-based access, Bevy CSV import, and walk-in registration with atomic ticket numbering. Built using Claude Code. Now scaling to GDG Melbourne.',
    mode: 'Engineering',
    tags: ['React', 'Material UI', 'Firebase', 'Claude Code'],
    url: 'https://gdgcheckin.com',
  },
  {
    id: 5,
    slug: 'storia',
    name: 'Storia',
    description:
      'Personal story development platform for screenwriters. Block-based document editing with folder and project organisation, collapsible sidebar, and Firebase auth. Designed high-fidelity interfaces across web and mobile.',
    mode: 'Design + Engineering',
    tags: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    url: undefined,
  },
];

export const STACK = [
  'SwiftUI', 'React', 'Next.js', 'TypeScript',
  'Firebase', 'MusicKit', 'Tailwind', 'Python', 'Claude Code', 'Figma',
];

export const TECH_URLS: Record<string, string | undefined> = {
  SwiftUI: 'https://developer.apple.com/xcode/swiftui/',
  MusicKit: 'https://developer.apple.com/musickit/',
  React: 'https://react.dev',
  'Next.js': 'https://nextjs.org',
  Firebase: 'https://firebase.google.com',
  TypeScript: 'https://www.typescriptlang.org',
  Tailwind: 'https://tailwindcss.com',
  'Material UI': 'https://mui.com',
  'Claude API': 'https://anthropic.com',
  Python: 'https://python.org',
  'Claude Code': 'https://claude.ai/code',
  'Swift Charts': 'https://developer.apple.com/documentation/charts',
  Figma: 'https://figma.com',
};

export const CONTACT = {
  email: 'hello@russal.dev',
  github: 'https://github.com/rarya618',
  linkedin: 'https://linkedin.com/in/rarya618',
  resume: '/resume.pdf',
};
