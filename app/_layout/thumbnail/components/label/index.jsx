'use client';

import { motion } from 'framer-motion';

/** @param {import('react').PropsWithChildren<unknown>} */
export function ThumbnailLabel({ children }) {
  return (
    <motion.div
      style={{
        paddingInlineStart: 'clamp(2.5em, 8vw, 8em)',
      }}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
    >
      <h5 className='text-xs uppercase tracking-widest text-secondary-foreground'>
        {children}
      </h5>
    </motion.div>
  );
}
