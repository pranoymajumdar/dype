"use client";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Clock,
  Calendar,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  const project = {
    title: "E-commerce Platform",
    subtitle: "AI-Powered Shopping Experience",
    description: `
      ChrobaLearn.co sought to optimize their inventory management through AI integration.
      
      We developed a machine learning model that accurately analyzes demand trends, allowing for smarter restocking decisions. The AI system was integrated with their existing platform, providing real-time insights and automation.
      
      This led to reduced waste, improved stock turnover, and significant cost savings, while ensuring that high-demand items were always available.
    `,
    image: "/projects/ecommerce.png",
    timeline: "6 Months",
    website: "chronobase.co.uk",
    service: "E-commerce Dev",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Machine Learning",
    ],
    features: [
      "AI-Powered Inventory Management",
      "Real-time Analytics Dashboard",
      "Automated Restocking System",
      "Demand Prediction",
      "Integration with Existing Systems",
    ],
  };

  return (
    <main className="min-h-screen py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 w-[700px] h-[700px] bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Container className="relative">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Button variant="ghost" asChild className="group">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-2xl text-muted-foreground">
                {project.subtitle}
              </p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { icon: Clock, label: "Timeline", value: project.timeline },
                { icon: Globe, label: "Website", value: project.website },
                { icon: Calendar, label: "Service", value: project.service },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-muted/50">
                  <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                    <stat.icon className="h-4 w-4" />
                    <span className="text-sm">{stat.label}</span>
                  </div>
                  <div className="font-medium">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4 text-muted-foreground">
              {project.description.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="group">
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="group">
                <Github className="mr-2 h-4 w-4" />
                View Source
                <ArrowLeft className="ml-2 h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="sticky top-24"
          >
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-1">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                />
              </div>
            </div>

            {/* Preview Images Grid */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="relative aspect-square rounded-lg overflow-hidden bg-muted"
                >
                  <Image
                    src={project.image}
                    alt={`Preview ${i}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    priority
                    quality={100}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </main>
  );
}
