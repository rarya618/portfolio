export type Mode = 'engineer' | 'designer';

export interface Project {
  id: number;
  name: string;
  description: string;
  mode: 'Engineering' | 'Design' | 'Design + Engineering';
  tags: string[];
}

export interface Stat {
  value: string;
  label: string;
}
