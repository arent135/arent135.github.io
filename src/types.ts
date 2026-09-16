export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: 'AI/ML' | 'Security' | 'WEB DEV';
  highlights?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface TimelineEntry {
  id: string;
  period: string;
  role: string;
  organization: string;
  organizationColor?: 'primary' | 'secondary';
  description: string;
  details?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  colorClass: string;
  items: Array<{
    name: string;
    level?: string;
    description?: string;
  }>;
}

export interface TerminalCommand {
  command: string;
  output?: string[];
  timestamp?: string;
}
