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
        'had the idea about three years ago because i kept having to open the mac app just to check my listening stats. only got around to building it last september. it was the perfect excuse to learn swift, and my process for learning anything is by doing. what was supposed to be a short project kept evolving into something no other app on the store does.',
      steps: [
        {
          number: 1,
          title: 'research & catalyst',
          body: 'used a lot of stats apps before jumping in. most were years out of date, too slow, and felt abandoned. last.fm scrobbling was an option but added an unnecessary dependency when apple\'s own musickit already exposed the data natively. that was the unlock. i just wanted something fast, native, and well-designed on my phone.',
        },
        {
          number: 2,
          title: 'design',
          body: 'jumped straight into figma before writing any swift. the first thing i designed was the landing page. initially a 3x3 grid for recents and top songs with a picker at the top to switch views. it looked clunky, caused loading issues, and needed workarounds i didn\'t want. redesigned it as a vertical scroll with six items per section and a see all button. that one change let me use system defaults throughout, improved loading, and removed all the workarounds.',
        },
        {
          number: 3,
          title: 'engineering & the pivot',
          body: 'built v1 around the system player. felt fine until i realised musickit doesn\'t expose queue items through it, which was a dead end for building anything beyond stats. switching to the application player runs a sandboxed environment inside the app separate from the system. it was disappointing at first, but turned out to be a blessing in disguise. full control over playback and queue, a completely distinct experience from every other music app, and tapping a song from the dynamic island or lock screen opens tracksense instead of apple music. no other app does that. that\'s when it stopped being a stats app and became a music app powered by apple music. real-time sync runs on firebase realtime database, low latency, free to scale, and i already knew the sdk. integrating firebase into swift was a pain though. surprisingly little support out there for it.',
        },
        {
          number: 4,
          title: 'auth',
          body: 'auth wasn\'t planned from the start. the app launched with firebase anonymous sign in, no login, no passwords, no friction. it worked until users told me they wanted to control their music from other devices. that\'s when i built auth codes, short codes you enter to sign in on a new device without a password. the codes are hashed and never stored in plain text. when you enter one, the hash is compared. the code is only visible once when it\'s created and disappears when you close the screen. regenerating a new one revokes the old one. recovery emails cover the case where someone loses access entirely. share codes go further, giving scoped access to your account so someone else can control playback without touching anything else. similar to permissions in google docs, but for your music.',
        },
      ],
      decisions: [
        'anonymous auth over traditional login. no passwords means no friction at sign up. auth codes and recovery emails handle the edge cases.',
        'application player over system player. was disappointed to make the switch, but it gave full queue control and made the app genuinely its own thing.',
        'firebase realtime database over firestore for live sync. latency matters when syncing playback state between devices in real time.',
        'musickit directly over last.fm scrobbling. faster, more accurate, and consistent with the rest of ios.',
        'vertical scroll over 3x3 grid. one redesign that fixed loading, removed workarounds, and made everything feel native.',
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
