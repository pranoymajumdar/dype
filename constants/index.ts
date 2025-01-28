import { Globe, Smartphone, ShoppingCart, Palette, Box, PenTool } from 'lucide-react';
import { Service, Project, Achievement, Testimonial } from '@/types';

export const services: Service[] = [
  {
    id: 1,
    title: 'Web App Development',
    description: 'Build responsive and high-performance websites tailored to your needs',
    icon: Globe,
    color: 'from-blue-500/20 to-blue-500/0'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Creating user-friendly mobile applications that engage and retain users',
    icon: Smartphone,
    color: 'from-green-500/20 to-green-500/0'
  },
  {
    id: 3,
    title: 'E-commerce Development',
    description: 'Building secure and scalable e-commerce platforms for your business growth',
    icon: ShoppingCart,
    color: 'from-purple-500/20 to-purple-500/0'
  },
  {
    id: 4,
    title: 'Web Design',
    description: 'Crafting visually stunning and user-friendly website designs',
    icon: Palette,
    color: 'from-pink-500/20 to-pink-500/0'
  },
  {
    id: 5,
    title: 'Product Design',
    description: 'Designing products that are user-centric and visually appealing',
    icon: Box,
    color: 'from-yellow-500/20 to-yellow-500/0'
  },
  {
    id: 6,
    title: 'Graphics',
    description: 'Creating stunning graphics to enhance your brand identity',
    icon: PenTool,
    color: 'from-red-500/20 to-red-500/0'
  },
];

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "We built this custom e-commerce platform with seamless shopping experience",
    image: "/projects/ecommerce.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "E-commerce"
  },
  {
    title: "Logistics Management",
    description: "Our logistics optimization system for efficient delivery tracking",
    image: "/projects/logistics.png",
    tags: ["React", "Node.js", "MongoDB", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Logistics"
  },
  {
    title: "Admin Dashboard",
    description: "Manage your business with our feature-rich analytics dashboard",
    image: "/projects/admin.png",
    tags: ["Vue.js", "Express", "PostgreSQL", "Charts.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Admin Dashboard"
  },
  {
    title: "Healthcare App",
    description: "A modern healthcare app for patient care and management",
    image: "/projects/healthcare.png",
    tags: ["React Native", "Firebase", "Redux", "AI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Healthcare"
  },
  {
      title: "Chatbots",
      description: "AI chatbots offering personalized and automated customer support.",
      image: "/projects/chatbots.png",
      tags: ["React Native", "Firebase", "Redux", "AI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Chatbots"
    },
    {
      title: "Landing Page",
      description: "Stunning landing pages designed to capture attention and drive conversions.",
      image: "/projects/landing-page.png",
      tags: ["React Native", "Firebase", "Redux", "AI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Chatbots"
    },
];
