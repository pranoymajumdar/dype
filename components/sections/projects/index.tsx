'use client';
import { Container } from '@/components/ui/container';
import { motion, useTransform } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useScrollY } from '@/hooks/useScrollY';
import { projects } from '@/constants';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
   const scrollYProgress = useScrollY(containerRef);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
;

  return (
    <section className="py-24 bg-background/50 relative overflow-hidden">
      <Container>
        <motion.div
          ref={containerRef}
          style={{ opacity, scale }}
          className="relative z-10"
        >
          {/* Header */}
          <div className="max-w-2xl mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Featured
                <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"> Projects</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore our portfolio of successful projects that showcase our expertise in delivering innovative solutions.
              </p>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Project Image */}
                  <div className={`relative overflow-hidden rounded-xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/0 to-primary/0 z-10" />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="relative aspect-[16/9]"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary/10 backdrop-blur-sm z-20 flex items-center justify-center gap-4"
                    >
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={project.liveUrl} className="gap-2">
                          Live Demo <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={project.githubUrl} className="gap-2">
                          Code <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-medium text-primary">
                          {project.category}
                        </span>
                        <div className="h-px flex-1 bg-primary/20" />
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <Button size="lg" variant="outline" className="group rounded-full">
              View All Projects
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </Container>
    </section>
  );
}
