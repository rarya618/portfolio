export interface ProcessStep {
  number: number;
  title: string;
  body: string;
  images?: string[];
}

export interface ProjectProcess {
  summary: string;
  steps: ProcessStep[];
  decisions?: string[];
}

export interface Project {
  id: number;
  slug: string;
  name: string;
  description: string;
  mode: 'Engineering' | 'Design' | 'Design + Engineering';
  tags: string[];
  url?: string;
  process?: ProjectProcess;
}
