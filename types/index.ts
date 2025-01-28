import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Achievement {
  metric: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
} 