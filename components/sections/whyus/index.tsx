'use client';
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { motion, useTransform } from 'framer-motion'
import { Target, Lightbulb, Shield, Gem } from 'lucide-react'
import { useRef } from 'react';
import { useScrollY } from '@/hooks/useScrollY';

export default function WhyUsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
   const scrollYProgress = useScrollY(containerRef);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const reasons = [
    {
      title: 'Expertise',
      description: 'Years of experience delivering high-quality solutions',
      icon: Target
    },
    {
      title: 'Innovation',
      description: 'Cutting-edge technology and modern approaches',
      icon: Lightbulb
    },
    {
      title: "Reliability",
      description: "Consistent delivery and outstanding support",
      icon: Shield,
    },
    {
      title: "Value",
      description: "Competitive pricing without compromising quality",
      icon: Gem,
    },
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background/50 relative overflow-hidden">
      <Container>
        <motion.div
          ref={containerRef}
          style={{ opacity, scale }}
          className="relative z-10"
        >
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              From Apps and Websites to automation systems and bots, we develop innovation solutions with a focus on robust development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full transition-colors hover:bg-muted/50">
                  <CardHeader>
                    <div className="mb-2">
                      {reason.icon && <reason.icon className="h-8 w-8 text-primary" />}
                    </div>
                    <h3 className="font-semibold tracking-tight">{reason.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
