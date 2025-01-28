'use client';
import { Container } from '@/components/ui/container';
import { motion, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';
import { useScrollY } from '@/hooks/useScrollY';

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
   const scrollYProgress = useScrollY(containerRef);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const testimonials = [
    {
      name: "Nikhoy",
      role: "CEO, TechCo",
      image: "/testimonials/1.png",
      content: "Their logistics software has optimized our deliveries, saving us both time and money. Their integration process was smooth and the support team was very helpful."
    },
    {
      name: "Preet",
      role: "CTO, HealthTech",
      image: "/testimonials/2.png",
      content: "Dyte's healthcare app has brought unprecedented efficiency to our operations. The custom features they added have made a significant difference."
    },
    {
      name: "Akhilesh",
      role: "CEO, AI Solutions",
      image: "/testimonials/3.png",
      content: "The AI chatbot's provides excellent customer service, improving our customer experience. Our response time has improved dramatically."
    },
    {
      name: "Abhoy",
      role: "CTO, OnlineStore",
      image: "/testimonials/4.png",
      content: "Dyte transformed our online store with great UX design. Sales have never been better! The team was responsive and attentive to our needs."
    }
  ];

  return (
    <section className="py-24 bg-background/50 relative overflow-hidden">
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
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                What Our Clients
                <span className="bg-gradient-to-r from-primary/50 to-primary text-transparent bg-clip-text"> Say About Us</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Real feedback from real clients who have experienced our dedication to excellence
              </p>
            </motion.div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/5 to-transparent rounded-2xl -rotate-1 scale-[1.02] group-hover:rotate-0 group-hover:scale-[1.03] transition-transform duration-500" />
                  
                  <div className="relative bg-background/60 backdrop-blur-sm p-8 rounded-xl border border-primary/10 h-full">
                    <Quote className="h-10 w-10 text-primary/20 mb-6" />
                    
                    <blockquote className="mb-8">
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        &quot;{testimonial.content}&quot;
                      </p>
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
