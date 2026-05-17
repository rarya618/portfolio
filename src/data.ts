import type { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'TrackSense',
    description:
      'Solo-built and shipped an Apple Music-powered app that lets you analyse your listening trends and sync playback in real time across devices. Built full-stack: SwiftUI + MusicKit on iOS, React + Vite + Tailwind on web, Firebase Cloud Functions on the backend.',
    mode: 'Engineering',
    tags: ['SwiftUI', 'MusicKit', 'React', 'Firebase'],
    url: 'https://tracksense.fm',
  },
  {
    id: 2,
    name: 'GDG Check-In App',
    description:
      'A real-time event check-in system with live-updating dashboards, on-the-spot attendee registration, and Bevy integration for event management. Built with React, Firebase Auth, and Realtime Database for instant state sync across devices.',
    mode: 'Engineering',
    tags: ['React', 'Firebase', 'Realtime Database', 'Bevy'],
    url: 'https://gdgcheckin.com',
  },
  {
    id: 3,
    name: 'DermaNote',
    description:
      'A mobile app using computer vision to help users track psoriasis flare progression over time. Firebase-backed with an ML image analysis pipeline. iOS-first, with Android on the roadmap.',
    mode: 'Engineering',
    tags: ['iOS', 'Firebase', 'Computer Vision', 'ML'],
    url: undefined,
  },
  {
    id: 4,
    name: 'Storia',
    description:
      'Personal story development platform for screenwriters. Built with React, TypeScript, and Firebase. Implemented auth with cookies and session storage, and designed high-fidelity interfaces across web and mobile.',
    mode: 'Design + Engineering',
    tags: ['React', 'TypeScript', 'Firebase'],
    url: undefined,
  },
  {
    id: 5,
    name: 'GDG Calendar App',
    description:
      'An embeddable Google Calendar integration built for Notion. React + Firebase with an OAuth2 flow via Cloud Functions for secure API access, restricted to authorised clients only.',
    mode: 'Engineering',
    tags: ['React', 'Firebase', 'Google Calendar API', 'OAuth2'],
    url: undefined,
  },
];

export const STACK = [
  'SwiftUI', 'React', 'TypeScript', 'Firebase',
  'MusicKit', 'Tailwind', 'Python', 'Figma',
];

export const BIO =
  "sydney-based developer with 3+ years taking products from idea to deployment. i've freelanced for startups, contracted remotely for a us-based screenwriting platform, and solo-shipped an app to the app store.\n\noutside of building, i organise gdg sydney, a community of 1,900+ developers, and have spoken at workshops on react and firebase at google hq. i previously helped grow the largest tech student community at the university of sydney to 2,300+ members.\n\ni was born in russia, speak some russian, and bring that international perspective to everything i build.";

export const TECH_URLS: Record<string, string | undefined> = {
  SwiftUI: 'https://developer.apple.com/xcode/swiftui/',
  MusicKit: 'https://developer.apple.com/musickit/',
  React: 'https://react.dev',
  Firebase: 'https://firebase.google.com',
  TypeScript: 'https://www.typescriptlang.org',
  Tailwind: 'https://tailwindcss.com',
  Python: 'https://python.org',
  Figma: 'https://figma.com',
  'Realtime Database': 'https://firebase.google.com/products/realtime-database',
  Bevy: 'https://bevy.community',
  iOS: 'https://developer.apple.com/ios/',
  'Computer Vision': undefined,
  ML: undefined,
  'Google Calendar API': 'https://developers.google.com/calendar',
  OAuth2: 'https://oauth.net/2/',
};

export const CONTACT = {
  email: 'hello@russal.dev',
  github: 'https://github.com/russalarya',
  linkedin: 'https://linkedin.com/in/russalarya',
  resume: '/resume.pdf',
};
