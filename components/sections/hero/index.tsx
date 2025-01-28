"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronRight, Github, Stars } from "lucide-react";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const src = resolvedTheme === "light" ? "/app-light.png" : "/app-dark.png";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-20">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-96 w-96 -translate-x-1/2 bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 translate-x-1/2 bg-primary/5 blur-3xl" />
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Top Badge */}
          <motion.div 
            variants={itemVariants}
            className="mx-auto mb-8 flex justify-center"
          >
            <Badge variant="outline" className="gap-2 rounded-full px-4 py-2">
              <Stars className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">
                Transforming Ideas into Reality
              </span>
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-primary"
              >
                Learn more
                <ChevronRight className="h-3 w-3" />
              </Link>
            </Badge>
          </motion.div>

          {/* Main Content */}
          <div className="relative mx-auto max-w-5xl text-center">
            <motion.h1 
              variants={itemVariants}
              className="mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-7xl"
            >
              Bring Your Software to Life{" "}
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                in Days
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              Unlock your potential with custom software solutions that drive innovation and efficiency. 
              We turn your vision into reality with cutting-edge technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="mb-16 flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="group h-12 rounded-full px-8">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group h-12 rounded-full px-8"
              >
                <Github className="mr-2 h-4 w-4" />
                View on Github
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* App Preview */}
            <motion.div
              variants={itemVariants}
              className="relative mx-auto max-w-5xl"
            >
              <div className="relative rounded-xl bg-gradient-to-b from-primary/20 to-primary/0 p-1">
                <div className="overflow-hidden rounded-lg bg-background/50 backdrop-blur-sm">
                  {/* Browser-like header */}
                  <div className="flex items-center gap-2 border-b border-primary/10 px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-primary/20" />
                      <div className="h-3 w-3 rounded-full bg-primary/20" />
                      <div className="h-3 w-3 rounded-full bg-primary/20" />
                    </div>
                  </div>
                  
                  {/* App preview image */}
                  <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative"
                  >
                    <Image
                      src={src}
                      alt="App preview"
                      width={1200}
                      height={800}
                      className="w-full"
                      priority
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </motion.div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -right-8 -top-8 hidden rounded-2xl border border-primary/10 bg-background/80 p-4 backdrop-blur-sm md:block"
              >
                <Stars className="h-6 w-6 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
