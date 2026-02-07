'use client';

import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'section' | 'div';
  id?: string;
}

export function AnimatedSection({ children, className = '', delay = 0, as: Tag = 'section', id }: AnimatedSectionProps) {
  const Component = Tag === 'section' ? motion.section : motion.div;
  return (
    <Component
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function AnimatedItem({ children, className = '', index = 0 }: AnimatedItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
