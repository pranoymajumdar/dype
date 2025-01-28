import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  highlightedText: string;
  description: string;
}

export function SectionHeader({ title, highlightedText, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mb-16"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {title}
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            {highlightedText}
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
} 