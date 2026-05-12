import type { Project, Stat } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Meridian Design System',
    description:
      'Component library spanning 80+ primitives. Designed every component in Figma, built each one in React with full token sync.',
    mode: 'Design + Engineering',
    tags: ['Figma', 'React', 'Tokens', 'Storybook'],
  },
  {
    id: 2,
    name: 'Real-time Canvas Engine',
    description:
      'Multiplayer infinite canvas built on CRDTs and WebSockets. Sub-20ms sync across 1000 concurrent users.',
    mode: 'Engineering',
    tags: ['Rust', 'CRDTs', 'WebGL', 'WebSockets'],
  },
  {
    id: 3,
    name: 'Analytics Dashboard Redesign',
    description:
      'End-to-end product redesign for a B2B analytics platform. Reduced task completion time by 40% through information architecture overhaul.',
    mode: 'Design',
    tags: ['UX Research', 'Figma', 'Prototyping'],
  },
  {
    id: 4,
    name: 'Generative UI Toolkit',
    description:
      'Developer tool for generating production-ready UI components from natural language. Designed the product, built the inference pipeline.',
    mode: 'Design + Engineering',
    tags: ['Python', 'LLMs', 'TypeScript', 'Product'],
  },
];

export const STATS: Stat[] = [
  { value: '3+', label: 'Years shipping product' },
  { value: '8+', label: 'Components designed & built' },
  { value: '2', label: 'Products launched from scratch' },
];

export const STACK = [
  'Rust', 'Go', 'TypeScript', 'Python',
  'React', 'Figma', 'Kubernetes', 'Postgres',
];

export const MARQUEE_ITEMS = [
  'Rust', 'TypeScript', 'Systems Design', 'Distributed Systems',
  'React', 'Go', 'ML Infrastructure', 'API Design', 'Figma',
  'Design Systems', 'Product Thinking', 'WebGL',
];
