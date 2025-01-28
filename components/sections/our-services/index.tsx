'use client';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeader } from '@/components/ui/section-header';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { services } from '@/constants';
import { containerVariants, itemVariants } from '@/constants/animations';

export default function OurServices() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <AnimatedSection>
      <SectionHeader
        title="Our"
        highlightedText=" Services"
        description="We offer comprehensive digital solutions to help your business thrive in the modern world"
      />

      {/* Services Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            onHoverStart={() => setHoveredId(service.id)}
            onHoverEnd={() => setHoveredId(null)}
            className="group relative"
          >
            <div className="relative h-full p-8 rounded-2xl bg-background/60 backdrop-blur-sm border border-primary/10 overflow-hidden">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-8 relative inline-flex">
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative p-4 bg-background rounded-xl border border-primary/20 group-hover:border-primary/40 transition-colors duration-500">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className={`mt-8 flex items-center gap-2 text-primary font-medium transition-opacity duration-300 ${hoveredId === service.id ? 'opacity-100' : 'opacity-0'}`}>
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        variants={itemVariants}
        className="text-center"
      >
        <Button asChild size="lg" variant="outline" className="rounded-full group">
          <Link href="/services">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </AnimatedSection>
  );
}
