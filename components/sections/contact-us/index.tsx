'use client';
import { Container } from '@/components/ui/container';
import { motion, useTransform } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Twitter, Github, Linkedin } from 'lucide-react';
import { useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useScrollY } from '@/hooks/useScrollY';
export default function ContactUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScrollY(containerRef);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 000-0000",
      description: "Monday to Friday, 9am to 6pm"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@example.com",
      description: "Online support 24/7"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Business Avenue",
      description: "New York, NY 10001"
    }
  ];

  const socialLinks = [
    {
      icon: Twitter,
      url: "https://twitter.com/",
      platform: "twitter"
    },
    {
      icon: Github,
      url: "https://github.com/",
      platform: "github"
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/",
      platform: "linkedin"
    }
  ]
  return (
    <section className="py-24 bg-background relative overflow-hidden">
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
                Let&apos;s Start a
                <span className="bg-gradient-to-r from-primary/50 to-primary text-transparent bg-clip-text"> Conversation</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have a project in mind? Let&apos;s talk about how we can help bring your ideas to life
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-background/60 backdrop-blur-sm p-8 rounded-2xl border border-primary/10">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input placeholder="john@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project..."
                      className="min-h-[150px] resize-none"
                    />
                  </div>
                  <Button className="w-full gap-2 group">
                    Send Message
                    <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:pl-12 lg:border-l border-primary/10"
            >
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex gap-4 p-6 rounded-xl bg-background/60 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors">
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg group-hover:blur-xl transition-all" />
                        <div className="relative bg-background rounded-lg p-3 border border-primary/20">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-foreground/80 font-medium">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Social Links */}
                <div className="flex gap-4 pt-6">
                  {socialLinks.map(({icon: Icon, url, platform}, index) => (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="p-3 rounded-lg bg-background/60 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors"
                    >
                      <span className="sr-only">Follow us on {platform}</span>
                      <Icon className="h-5 w-5 text-primary" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/3 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute right-1/3 bottom-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </Container>
    </section>
  );
}
