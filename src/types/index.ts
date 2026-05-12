export interface Project {
  id: number;
  name: string;
  description: string;
  mode: 'Engineering' | 'Design' | 'Design + Engineering';
  tags: string[];
  url?: string;
}
