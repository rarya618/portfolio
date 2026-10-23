import type { Project, GDGEvent, Talk } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: 'tracksense',
    name: 'TrackSense',
    description:
      'An iOS music app built on Apple Music. It started as a way to check my listening stats and turned into a full player. Playback syncs across devices in real time, you can share a listening session with a 6-character code, and the app themes itself from the album art. There\'s a web dashboard for library stats too. I designed and built it on my own, from Figma to the App Store.',
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
          body: 'used a lot of stats apps before jumping in. most were years out of date, too slow, and felt abandoned. [last.fm](https://last.fm) scrobbling was an option but added an unnecessary dependency when apple\'s own [musickit](https://developer.apple.com/musickit/) already exposed the data natively. that settled it. i just wanted something fast, native, and well-designed on my phone.',
        },
        {
          number: 2,
          title: 'design',
          body: 'jumped straight into [figma](https://figma.com) before writing any swift. the first thing i designed was the landing page. initially a 3x3 grid for recents and top songs with a picker at the top to switch views. it looked clunky, caused loading issues, and needed workarounds i didn\'t want. redesigned it as a vertical scroll with six items per section and a see all button. that one change let me use system defaults throughout, improved loading, and removed all the workarounds.',
        },
        {
          number: 3,
          title: 'engineering & the pivot',
          body: 'built v1 around the system player. felt fine until i realised [musickit](https://developer.apple.com/musickit/) doesn\'t expose queue items through it, which was a dead end for building anything beyond stats. switching to the application player runs a sandboxed environment inside the app separate from the system. it was disappointing at first, but it ended up being the right call. full control over playback and queue, a completely distinct experience from every other music app, and tapping a song from the [dynamic island](https://developer.apple.com/design/human-interface-guidelines/dynamic-island) or lock screen opens tracksense instead of apple music. no other app does that. that\'s when it stopped being a stats app and became a music app powered by apple music. real-time sync runs on [firebase realtime database](https://firebase.google.com/products/realtime-database), low latency, free to scale, and i already knew the sdk. integrating firebase into swift was a pain though. surprisingly little support out there for it.',
        },
        {
          number: 4,
          title: 'auth',
          body: 'auth wasn\'t planned from the start. the app launched with [firebase](https://firebase.google.com) anonymous sign in, no login, no passwords, no friction. it worked until users told me they wanted to control their music from other devices. that\'s when i built auth codes, short codes you enter to sign in on a new device without a password. the codes are hashed and never stored in plain text. when you enter one, the hash is compared. the code is only visible once when it\'s created and disappears when you close the screen. regenerating a new one revokes the old one. recovery emails cover the case where someone loses access entirely. share codes go further, giving scoped access to your account so someone else can control playback without touching anything else. similar to permissions in google docs, but for your music.',
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
    id: 7,
    slug: 'devfest-sydney',
    name: 'DevFest Sydney',
    description:
      'The website and back office for DevFest Sydney 2026, GDG Sydney\'s annual conference. Speakers, volunteers and attendees went through it: call for speakers, volunteer signups, the lineup and schedule, a job board and a post-event survey. Organisers ran reviews, emails and the crew roster from an admin panel. I was the only developer, with 475 commits from June to October.',
    mode: 'Design + Engineering',
    tags: ['Next.js', 'Tailwind', 'Firebase', 'Resend'],
    url: 'https://devfest.gdgsydney.com',
    process: {
      summary:
        'devfest sydney is gdg sydney\'s annual conference, held on 10 october 2026 at torrens university. i built the website, and it grew into the system we ran the event on: speakers, volunteers, the schedule, and everything we needed on the day.',
      steps: [
        {
          number: 1,
          title: 'call for speakers',
          body: 'the site launched in june with one job: the call for speakers. the form takes a talk, workshop or lightning talk proposal, sends a confirmation email through resend, and stores it in firestore. it opens and closes from a single setting, with a countdown to the closing date. people can send more than one proposal, for example a talk and a workshop.',
        },
        {
          number: 2,
          title: 'reviewing and confirming speakers',
          body: 'behind it is an admin panel, with google sign-in limited to the organisers. we review proposals there and accept or reject them. accepting someone and telling them are separate steps, so decisions and emails don\'t have to happen at the same time. accepted speakers get a link to confirm, then their free ticket, then a calendar invite for their session. only confirmed speakers show up on the public lineup and schedule. rejections go out once per person, listing every proposal they sent, and nobody who is speaking gets one.',
        },
        {
          number: 3,
          title: 'volunteers and crew',
          body: 'volunteers sign up through their own form and confirm the same way speakers do. accepted volunteers become the crew: each one gets an area and a shift, and the roster exports to csv. the public crew page only shows volunteers who have confirmed and that an organiser has added to it.',
        },
        {
          number: 4,
          title: 'on the day',
          body: 'the last few weeks added what we needed at the venue. a job board for open roles and for attendees open to work, with every post approved first and sponsors\' roles listed first. a version of it for the screen at the venue that fits on one screen, scrolls itself when it fills up, and has a qr code to post a role. a page of starter guides for the builder\'s space. a feedback survey with an nps score, and a form for workshop credits when one workshop couldn\'t run as planned. after the event, speakers got a thank-you email with the photos and a link to claim a mug.',
        },
      ],
      decisions: [
        'accepting and emailing as separate steps. decisions could be made and changed before anyone heard anything.',
        'confirm links behind a button, not on page load. email scanners open links automatically and would have confirmed people on their behalf.',
        'one rejection email per person, not per proposal. someone who sent three proposals gets one email that names all three.',
        'the crew is the volunteer list, not a copy. a roster is a few extra fields on each signup, and a copy would just be something else to keep in sync.',
        'the venue screen refreshes every 30 seconds instead of listening live. the job board holds private emails, so browsers can\'t read it directly.',
      ],
    },
  },
  {
    id: 2,
    slug: 'tailr',
    name: 'Tailr',
    description:
      'Paste in a job listing or its URL and Tailr uses the Claude API to pull out the skills, qualifications and tone it\'s asking for, ranked by importance. Upload your resume and it scores how well you match. I built it in Next.js while I was job hunting.',
    mode: 'Design + Engineering',
    tags: ['Next.js', 'Claude API', 'TypeScript', 'Claude Code'],
    url: 'https://tailr.russal.dev',
    process: {
      summary:
        'built tailr while i was actively applying for jobs. i kept struggling to isolate the right keywords from job listings: what actually matters versus what\'s boilerplate. it was also my first time using [next.js](https://nextjs.org), so i was learning the framework and solving a real problem at the same time. i was also using it the whole time i was building it, so i found problems straight away.',
      steps: [
        {
          number: 1,
          title: 'the problem',
          body: 'every job listing reads differently. some bury the real requirements in the middle of a wall of text, others front-load buzzwords that don\'t reflect what the role actually needs. manually reading through them to pull out what to emphasise on a resume takes too long and it\'s easy to miss things. i wanted something that pulled out what mattered and ranked it by how much it mattered for the role.',
        },
        {
          number: 2,
          title: 'building the keyword extractor',
          body: 'the core of tailr is a structured prompt to the [claude api](https://anthropic.com) that returns a consistent json shape: technical skills, soft skills, required qualifications, nice-to-haves, industry domain, and a bonus: the company name and job title extracted directly from the listing. when a url is provided instead of pasted text, [cheerio](https://cheerio.js.org) scrapes the page, strips out nav, headers, and footers, then cascades through a series of css selectors to isolate the actual job description content before passing it to the model. the prompt returns the same structure every time, so the front end can render it as is.',
        },
        {
          number: 3,
          title: 'adding the resume analyser',
          body: 'using tailr to analyse listings made the next gap obvious: once you know what a job is looking for, you still have to manually compare that against your resume. that was the part taking the most time. so i added a resume analyser alongside the keyword extractor. you upload your resume, tailr scores it against the extracted keywords, and returns a weighted breakdown: required qualifications count for 40% of the score, technical skills 30%, soft skills 15%, nice-to-haves 10%, industry domain 5%. it also gives three to five specific suggestions. i only thought to add this because i was using tailr myself.',
        },
        {
          number: 4,
          title: 'the pdf and docx approaches',
          body: 'the resume analyser needed to read files reliably. the first attempt used pdfparser, which couldn\'t read pdfs at all. it just returned nothing. switching to the [claude api](https://anthropic.com)\'s native document support fixed it: pdfs are base64-encoded and sent directly, and the model reads them as-is without any extraction layer. docx files take a different path: [mammoth](https://github.com/mwilliamson/mammoth.js) extracts the raw text, which then gets sent as plain text in the prompt. that way people can upload whichever format they already have.',
        },
      ],
      decisions: [
        'structured json output over free-form text. the front end could rely on the shape instead of parsing whatever came back.',
        'cheerio for url scraping. stripping nav and boilerplate before sending to the model kept the context clean and reduced noise in the extraction.',
        'weighted scoring over a flat score. a single number doesn\'t tell you where the gaps are. a breakdown by category with suggestions tells you what to fix.',
        'native pdf reading over text extraction. sending base64 straight to the claude api was more reliable than the extraction library i tried, and a lot less code.',
        'using it myself the whole time. i ran tailr on real job listings while building it, and the resume analyser only exists because of that.',
      ],
    },
  },
  {
    id: 6,
    slug: 'gdg-sydney-website',
    name: 'GDG Sydney website',
    tagline: 'the website for gdg sydney, with events, team and sponsors pulled live from bevy.',
    description:
      'The website for GDG Sydney. Upcoming and past events, the organising team, sponsors and member numbers all load live from Bevy, so the site stays current without anyone updating it by hand. It also has a call for speakers form and the code of conduct, all built to Google\'s GDG brand guide.',
    mode: 'Design + Engineering',
    tags: ['Astro', 'React', 'Tailwind', 'Firebase'],
    url: 'https://gdgsydney.com',
  },
  {
    id: 3,
    slug: 'dermanote',
    name: 'DermaNote',
    tagline: 'an ios app for tracking psoriasis flares over time.',
    description:
      'An iOS app for tracking psoriasis flares over time. You do a quick daily check-in with a custom intensity slider, log symptoms and photos, and tick off treatment tasks. The history view has a calendar heatmap and 30-day trend charts. Runs on Firebase.',
    mode: 'Design + Engineering',
    tags: ['SwiftUI', 'Swift Charts', 'Firebase'],
    url: undefined,
  },
  {
    id: 4,
    slug: 'checkpad',
    name: 'Checkpad',
    description:
      'Event check-in for meetups, first built for GDG chapters. Attendees scan one QR code at the door instead of digging through their email for a ticket. It has live dashboards, role-based access, Bevy CSV import and walk-in registration. I\'m now rebuilding it with a new design and backend.',
    mode: 'Design + Engineering',
    tags: ['Astro', 'React', 'Tailwind', 'Firebase', 'Figma', 'Claude Code'],
    url: 'https://gdgcheckin.com',
    designUrl: 'https://www.figma.com/design/PDbJHFMHYOi45MJd5ro6Lp/Checkpad',
    process: {
      summary:
        'a friend at [gdg sydney](https://gdg.community.dev/gdg-sydney/) was venting about how painful the [bevy](https://www.bevy.com) check-in process was. i came up with a fix and had the core working in two hours. it has since grown into a platform used across multiple gdg chapters, and i\'m now rebuilding it as checkpad so any meetup can use it.',
      steps: [
        {
          number: 1,
          title: 'the problem with bevy',
          body: '[bevy](https://www.bevy.com)\'s check-in flow requires staff to scan each attendee\'s individual qr code from a pdf they have to find and download from their email. [meetup](https://meetup.com) signups don\'t have a qr code at all and need to be checked in manually. walk-ins do too. people spend a lot of time at the door just hunting for the qr code. the fix was to flip the process. instead of staff scanning attendees, attendees scan one qr code at the entrance, enter their email, and the app does the rest. if they\'re registered, they\'re checked in. if not, they fill in their name and are registered and checked in on the spot.',
        },
        {
          number: 2,
          title: 'building it',
          body: 'the core database system and dashboard were done in two hours. real-time data, basic check-in flow, the main functionality. auth came after, then role-based access, [bevy](https://www.bevy.com) csv import, and walk-in registration with atomic ticket numbering using [firebase](https://firebase.google.com) transactions so multiple staff devices can check in walk-ins at the same time without duplicate ticket numbers. also used [material ui](https://mui.com) as a challenge since i had never tried it. won\'t be doing that again. it complicates a lot of things that [tailwind](https://tailwindcss.com) handles in a straightforward way.',
        },
        {
          number: 3,
          title: 'iterating after the first event',
          body: 'running it at a real event showed two problems. the check-in flow for pre-registered attendees was two steps, which confused some people at the door. redesigned it to one step. the other issue was staff struggling to match attendees to name badges. fixed that by making the confirmation screen show the attendee\'s name in large text with an instruction to show it to the staff member. small change, made badge handoff a lot faster. the merch draw also came out of running real events. started as a way to incentivise check-in and has since become a regular thing at the end of every event.',
        },
        {
          number: 4,
          title: 'scaling across chapters',
          body: 'i built it to support multiple teams from the start. each gdg chapter gets their own team in the app, creates and manages their own events, and only sees what\'s theirs. got the domain [gdgcheckin.com](https://gdgcheckin.com) specifically so the app isn\'t tied to any one city. currently in discussions with [gdg melbourne](https://gdg.community.dev/gdg-melbourne/) to onboard them. the plan is to keep adding chapters the same way.',
        },
        {
          number: 5,
          title: 'rebuilding it as checkpad',
          body: 'the first version proved the idea, so i\'m rebuilding it from scratch as checkpad, for any meetup rather than just gdg. this time i designed every screen in figma before building it: the attendee check-in flow, staff check-in on a phone, a prize draw display for the projector, and event analytics. it\'s now two apps sharing one design package: an astro site for attendees and a react dashboard for organisers. the backend moves from realtime database to firestore, check-ins run on the server, and organisers only see their own team\'s events. the attendee flow and both dashboards are built, and the backend is next.',
        },
      ],
      decisions: [
        'flip the qr flow. one qr at the door instead of one per attendee. solved the pdf email problem entirely.',
        'firebase transactions for walk-in numbering. prevents duplicate ticket numbers when multiple devices check in simultaneously.',
        'hand-rolled csv parser. no external dependency, handles bevy\'s quoting edge cases without surprises.',
        'name on the confirmation screen. made badge handoff a lot faster at the door.',
        'material ui over tailwind. used it as a challenge. went back to tailwind for checkpad.',
        'firestore over realtime database for the rebuild. rules apply per document, and it can look attendees up by email without loading a whole event.',
        'design first for checkpad. every screen was in figma before any code, including the empty, error and phone states.',
      ],
    },
  },
  {
    id: 5,
    slug: 'storia',
    name: 'Storia',
    tagline: 'a writing tool for screenwriters to develop their stories.',
    description:
      'A tool for screenwriters to develop their stories. It has a block-based editor, folders and projects to keep things organised, and Firebase auth. I designed it for both web and mobile.',
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
  Astro: 'https://astro.build',
  Resend: 'https://resend.com',
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

export const GDG_EVENTS: GDGEvent[] = [
  {
    id: 1,
    title: 'burnout to boardroom: architecting your ai c-suite with vertex ai',
    description: 'my first event as solo host, on using vertex ai to build an ai c-suite for your organisation. i did all the visual design: banner, thumbnail and presentation.',
    assets: {
      banner: '',
      thumbnail: '',
      presentation: '',
    },
  },
  {
    id: 2,
    title: 'from prompt to product: build an ai shopping assistant in minutes',
    status: 'rescheduled',
    description: 'an event on building an ai shopping assistant quickly with google\'s tools. it got cancelled and will be rescheduled.',
    assets: {
      banner: '',
      thumbnail: '',
    },
  },
  {
    id: 3,
    title: '"i build with ai, and so can you" — a gemini x android studio workshop',
    description: 'a hands-on workshop on using gemini in android studio. i looked after the speakers flying in from melbourne, and it\'s where [checkpad](/project/checkpad) debuted. good turnout.',
    assets: {
      banner: '',
      thumbnail: '',
      presentation: '',
    },
  },
  {
    id: 4,
    title: 'ai always compiles: is your organisation shipping those results?',
    role: 'instructor',
    description: 'a talk and workshop on why adopting ai often doesn\'t turn into real output for organisations. i organised a speaker who flew in from dallas and ran the hands-on workshop myself.',
    assets: {
      presentation: '',
      video: '',
    },
  },
  {
    id: 5,
    title: 'build with ai: build a resume reviewer with google ai studio',
    description: 'a workshop where attendees built a working resume reviewer in google ai studio. i did all the visual design: banner, thumbnail, presentation and a display video.',
    assets: {
      banner: '',
      thumbnail: '',
      presentation: '',
      video: '',
    },
  },
];

export const TALKS: Talk[] = [
  {
    id: 1,
    title: 'how does firebase know i closed my laptop?',
    event: 'devfest melbourne 2026',
    description: 'a talk on presence with the firebase realtime database: how an app knows who\'s online, and how it finds out when someone isn\'t. it covers .info/connected, the ondisconnect handlers the server runs when a client drops, and a heartbeat for the quiet cases, like wi-fi cutting out or a laptop lid closing, where the connection never says goodbye. the demo is still live. open it in a few tabs, then close one and watch it drop.',
    links: [
      { label: 'demo', url: 'https://presence-talk-demo.web.app' },
      { label: 'code', url: 'https://github.com/rarya618/firebase-presence-talk' },
    ],
  },
];

export const CONSULTING = {
  pitch: 'i take on contract work for founders and teams who need a senior engineer but aren\'t ready for a full-time hire.',
  availability: 'currently accepting new clients',
  forWho: 'usually early-stage startups, solo founders and small teams who need to move fast. i can build something from scratch, work in your existing codebase, or just help you make a technical call.',
  services: [
    { label: 'full-stack web', detail: 'React · TypeScript · Firebase' },
    { label: 'iOS development', detail: 'SwiftUI · MusicKit · App Store' },
    { label: 'firebase / backend', detail: 'auth · realtime DB · cloud functions' },
    { label: 'technical advisory', detail: 'stack choices · architecture · code review' },
  ],
  process: [
    { step: '01', title: 'discovery', body: 'a short call about the problem, what you\'ve tried, and what you want to end up with. no commitment.' },
    { step: '02', title: 'proposal', body: 'a written scope with deliverables, a timeline, and a fixed or hourly rate.' },
    { step: '03', title: 'delivery', body: 'i build it with you, ship it, and hand it over. i\'m still around for questions after.' },
  ],
};

export const CONTACT = {
  email: 'hello@russal.dev',
  github: 'https://github.com/rarya618',
  linkedin: 'https://linkedin.com/in/rarya618',
  resume: '/resume.pdf',
};
