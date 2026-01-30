'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import { useContactSlider } from '@/hooks';

import { MessageForm, SocialInfo, UserDetails } from './components';

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const block = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

export function Contact() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX, transformY } = useContactSlider(containerRef);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 95%', 'start 55%'],
  });
  const veilScaleY = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.footer
      id="contact"
      ref={containerRef}
      className='relative bg-foreground text-background'
      style={{ y: transformY }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-foreground origin-top"
        style={{ scaleY: veilScaleY }}
      />
      <motion.div
        style={{ paddingBlock: 'clamp(4em, 14vh, 10em)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
      >
        <motion.div variants={block}>
          <UserDetails transformX={transformX} />
        </motion.div>
        <motion.div variants={block}>
          <MessageForm />
        </motion.div>
        <motion.div variants={block}>
          <SocialInfo />
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
