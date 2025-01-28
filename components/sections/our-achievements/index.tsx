'use client';
import { Container } from '@/components/ui/container';
import { motion, useTransform } from 'framer-motion';
import { Users, Rocket, Target, Award, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollY } from '@/hooks/useScrollY';

export default function OurAchievements() {
  const containerRef = useRef<HTMLDivElement>(null);
   const scrollYProgress = useScrollY(containerRef);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const achievements = [
    {
      metric: "50+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries",
      icon: Rocket,
    },
    {
      metric: "30+",
      label: "Happy Clients",
      description: "Satisfied clients worldwide who trust our expertise",
      icon: Users,
    },
    {
      metric: "80+",
      label: "Solutions Delivered",
      description: "Innovative solutions that drive business growth",
      icon: Target,
    },
    {
      metric: "95%",
      label: "Client Retention",
      description: "Long-term partnerships built on trust and results",
      icon: Award,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <Container>
        <motion.div 
          ref={containerRef}
          style={{ opacity, scale }}
          className="relative z-10"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Impact in
                <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"> Numbers</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Measurable results that demonstrate our commitment to excellence and client success
              </p>
            </motion.div>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-background/60 backdrop-blur-sm border border-muted p-6 rounded-xl hover:border-primary transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 rounded-xl" />
                  <div className="relative">
                    <achievement.icon className="h-8 w-8 text-primary mb-4" />
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-4xl font-bold tracking-tight">
                          {achievement.metric}
                        </h3>
                        <div className="h-px flex-1 bg-primary/20" />
                      </div>
                      <p className="font-semibold">{achievement.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="inline-block p-[1px] bg-gradient-to-r from-primary/80 via-primary to-primary/80 rounded-full">
              <Button 
                variant="secondary"
                className="gap-2 rounded-full group px-6"
              >
                View Our Portfolio
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute right-1/4 top-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse delay-500" />
        </div>
      </Container>
    </section>
  );
}
