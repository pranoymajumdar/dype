'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  title: string;
  description: string;
  className?: string;
  children: React.ReactNode;
}

const BentoCard = ({ title, description, className, children }: BentoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-900/90 to-neutral-900/50",
        "border border-neutral-800/50 backdrop-blur-sm",
        "p-8 transition-all duration-500",
        "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      <div className="relative z-10 h-full">
        <div className="mb-8 h-32 w-full">
          {children}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-neutral-200">{title}</h3>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
};

export const BentoGrid = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Connect Card */}
          <BentoCard
            title="Connect Seamlessly"
            description="One-click connection with pre-configured cloud service permissions and secure API integration."
            className="lg:col-span-2"
          >
            <svg
              viewBox="0 0 200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              {/* Background Grid */}
              <path
                d="M20 20h160M20 60h160M20 100h160"
                className="stroke-neutral-800"
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />
              <path
                d="M60 10v100M100 10v100M140 10v100"
                className="stroke-neutral-800"
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />

              {/* Cloud Icon */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <path
                  d="M100 45c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 .342.011.681.034 1.018C66.327 47.098 64 50.177 64 53.75c0 5.385 4.365 9.75 9.75 9.75h26.5c5.385 0 9.75-4.365 9.75-9.75 0-3.573-2.327-6.652-5.534-7.732.023-.337.034-.676.034-1.018z"
                  className="fill-primary/20 stroke-primary"
                  strokeWidth="1.5"
                />
              </motion.g>

              {/* Connection Lines */}
              <motion.g
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              >
                <path
                  d="M85 70v20M115 70v20"
                  className="stroke-primary"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M75 90h50"
                  className="stroke-primary"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </motion.g>

              {/* Glowing Dots */}
              <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <circle cx="85" cy="90" r="2" className="fill-primary" />
                <circle cx="115" cy="90" r="2" className="fill-primary" />
              </motion.g>
            </svg>
          </BentoCard>

          {/* Build Card */}
          <BentoCard
            title="Build with Ease"
            description="Choose from optimized templates or seamlessly import your existing projects."
            className="lg:col-span-2"
          >
            <svg
              viewBox="0 0 200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              {/* 3D Cube */}
              <motion.g
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Top Face */}
                <path
                  d="M100 30L70 45L100 60L130 45L100 30Z"
                  className="fill-primary/20 stroke-primary"
                  strokeWidth="1.5"
                />
                {/* Left Face */}
                <path
                  d="M70 45L70 75L100 90L100 60L70 45Z"
                  className="fill-primary/10 stroke-primary"
                  strokeWidth="1.5"
                />
                {/* Right Face */}
                <path
                  d="M100 60L100 90L130 75L130 45L100 60Z"
                  className="fill-primary/15 stroke-primary"
                  strokeWidth="1.5"
                />
              </motion.g>

              {/* Floating Elements */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <path
                  d="M60 40h10M130 80h10M75 85v10"
                  className="stroke-primary/50"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="3 3"
                />
              </motion.g>
            </svg>
          </BentoCard>

          {/* Deploy Card */}
          <BentoCard
            title="Deploy Globally"
            description="Launch worldwide with a single command or automate deployments with CI/CD integration."
            className="lg:col-span-2"
          >
            <svg
              viewBox="0 0 200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              {/* Terminal Window */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <rect
                  x="40"
                  y="30"
                  width="120"
                  height="60"
                  rx="4"
                  className="fill-neutral-900 stroke-primary"
                  strokeWidth="1.5"
                />
                <rect
                  x="40"
                  y="30"
                  width="120"
                  height="20"
                  rx="4"
                  className="fill-primary/20"
                />
                {/* Window Controls */}
                <circle cx="55" cy="40" r="3" className="fill-primary/40" />
                <circle cx="70" cy="40" r="3" className="fill-primary/40" />
                <circle cx="85" cy="40" r="3" className="fill-primary/40" />
              </motion.g>

              {/* Command Text */}
              <motion.g
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <text
                  x="50"
                  y="70"
                  className="fill-primary text-[8px] font-mono"
                >
                  $ npx nuxthub deploy
                </text>
                {/* Blinking Cursor */}
                <motion.rect
                  x="135"
                  y="63"
                  width="5"
                  height="10"
                  className="fill-primary/50"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.g>
            </svg>
          </BentoCard>

          {/* Share Card */}
          <BentoCard
            title="Share & Monitor"
            description="Instantly share your app globally and monitor resources through an intuitive dashboard."
            className="lg:col-span-2"
          >
            <svg
              viewBox="0 0 200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              {/* Dashboard UI */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Browser Window */}
                <rect
                  x="30"
                  y="20"
                  width="140"
                  height="80"
                  rx="4"
                  className="fill-neutral-900 stroke-primary"
                  strokeWidth="1.5"
                />
                {/* Header Bar */}
                <rect
                  x="30"
                  y="20"
                  width="140"
                  height="15"
                  rx="4"
                  className="fill-primary/20"
                />
                {/* Window Controls */}
                <circle cx="42" cy="27.5" r="2.5" className="fill-primary/40" />
                <circle cx="52" cy="27.5" r="2.5" className="fill-primary/40" />
                <circle cx="62" cy="27.5" r="2.5" className="fill-primary/40" />
              </motion.g>

              {/* Dashboard Elements */}
              <motion.g
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Chart Lines */}
                <path
                  d="M45 70l20-15 20 10 20-20 20 15"
                  className="stroke-primary"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                {/* Data Points */}
                <circle cx="45" cy="70" r="2" className="fill-primary" />
                <circle cx="65" cy="55" r="2" className="fill-primary" />
                <circle cx="85" cy="65" r="2" className="fill-primary" />
                <circle cx="105" cy="45" r="2" className="fill-primary" />
                <circle cx="125" cy="60" r="2" className="fill-primary" />
              </motion.g>
            </svg>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};
