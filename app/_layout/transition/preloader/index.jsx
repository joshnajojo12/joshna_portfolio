'use client';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';

import { preloaderWords } from '@/data';
import { useDimensions, useTimeOut } from '@/hooks';

import { fade, slideUp } from './variants';

export function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0);
  const { width, height } = useDimensions();
  const isReady = width > 0 && height > 0;

  useTimeOut({
    callback: () => {
      if (index === preloaderWords.length - 1) {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
        if (onComplete) onComplete();
        return;
      }
      setIndex(prevIndex => prevIndex + 1);
    },
    duration: index === 0 ? 1000 : 150,
    deps: [index],
    enabled: isReady,
  });

  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${
    height + 300
  } 0 ${height}  L0 0`;
  const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${
    width / 2
  } ${height} 0 ${height}  L0 0`;

  /** @type {import('framer-motion').Variants} */
  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      className='fixed z-50 flex h-screen w-screen cursor-wait items-center justify-center bg-foreground'
      variants={slideUp}
      initial='initial'
      exit='exit'
    >
      {isReady ? (
        <>
          <motion.div
            className='flex items-center justify-center text-3xl text-background md:text-4xl'
            variants={fade}
            initial='initial'
            animate='enter'
          >
            <Dot size={48} className='me-3' />
            <p>{preloaderWords[index]}</p>
          </motion.div>
          <motion.svg className='absolute top-0 -z-10 h-[calc(100%+300px)] w-full'>
            <motion.path
              className='fill-foreground'
              variants={curve}
              initial='initial'
              exit='exit'
            />
          </motion.svg>
        </>
      ) : null}
    </motion.div>
  );
}
