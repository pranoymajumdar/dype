import { motion, useTransform } from 'framer-motion';
import { useScrollY } from '@/hooks/useScrollY';
import { useRef } from 'react';
import { Container } from './container';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedSection({ children, className = "py-24" }: AnimatedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScrollY(containerRef);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section className={`${className} bg-background relative overflow-hidden`}>
      <Container>
        <motion.div
          ref={containerRef}
          style={{ opacity, scale }}
          className="relative z-10"
        >
          {children}
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