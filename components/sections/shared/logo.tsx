'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={cn(
        "inline-flex items-center gap-2 group relative",
        "hover:opacity-100 transition-all duration-500",
        "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 rounded-lg",
        className
      )}
    >

      {/* SVG Text Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative h-8"
      >
        <svg
          viewBox="0 0 80 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full transform group-hover:scale-105 transition-transform duration-300"
        >
          {/* Letter D */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            d="M2 20V2M2 2H10C12.7614 2 15 4.23858 15 7V15C15 17.7614 12.7614 20 10 20H2"
            className="stroke-foreground group-hover:stroke-primary"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter Y */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            d="M22 2L28 10L34 2M28 10V20"
            className="stroke-foreground group-hover:stroke-primary"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter P */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            d="M42 20V2H52C54.7614 2 57 4.23858 57 7V9C57 11.7614 54.7614 14 52 14H42"
            className="stroke-foreground group-hover:stroke-primary"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter E */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            d="M65 2H78M65 11H75M65 20H78M65 2V20"
            className="stroke-foreground group-hover:stroke-primary"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Decorative Dots */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <circle cx="8" cy="11" r="1" className="fill-foreground/40 group-hover:fill-primary/40" />
            <circle cx="28" cy="10" r="1" className="fill-foreground/40 group-hover:fill-primary/40" />
            <circle cx="52" cy="8" r="1" className="fill-foreground/40 group-hover:fill-primary/40" />
            <circle cx="71" cy="11" r="1" className="fill-foreground/40 group-hover:fill-primary/40" />
          </motion.g>
        </svg>

        {/* Enhanced Dot Accent */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="absolute -right-2 -top-1 flex items-center justify-center"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary group-hover:animate-ping opacity-75" />
          <span className="absolute h-1.5 w-1.5 rounded-full bg-primary transform group-hover:scale-110 transition-transform duration-300" />
        </motion.div>

        {/* Text Glow Effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent blur-lg" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
