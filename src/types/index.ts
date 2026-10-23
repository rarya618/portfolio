export interface StepImage {
  src: string;
  alt: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  body: string;
  image?: StepImage;
}

export interface ProjectProcess {
  summary: string;
  steps: ProcessStep[];
  decisions?: string[];
}

export interface GDGAssets {
  banner?: string;
  thumbnail?: string;
  presentation?: string;
  video?: string;
}

export interface GDGEvent {
  id: number;
  title: string;
  status?: 'rescheduled';
  role?: string;
  description: string;
  assets: GDGAssets;
}

export interface Project {
  id: number;
  slug: string;
  name: string;
  description: string;
  /** One line for the "also built" list, used when the project has no case study */
  tagline?: string;
  mode: 'Engineering' | 'Design' | 'Design + Engineering';
  tags: string[];
  url?: string;
  designUrl?: string;
  process?: ProjectProcess;
}

export interface Talk {
  id: number;
  title: string;
  event: string;
  date?: string;
  description: string;
  links: { label: string; url: string }[];
}
