'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { projectOptions } from '@/data';
import { useProjectSlider } from '@/hooks';
import { randomId } from '@/utils';

import { ProjectSlider } from './slider';

export function Project() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX1, transformX2, transformY } =
    useProjectSlider(containerRef);

  const firstSlider = projectOptions.first.map(({ type, source, poster }) => {
    const id = randomId();
    return (
      <ProjectSlider key={id} type={type} source={source} poster={poster} />
    );
  });

  const secondSlider = projectOptions.second.map(({ type, source, poster }) => {
    const id = randomId();
    return (
      <ProjectSlider key={id} type={type} source={source} poster={poster} />
    );
  });

  return (
    <section ref={containerRef} id='projects' className='relative z-10 mt-10'>
      <div className='grid items-center'>
        <div className='bg-background'>
          <motion.div
            className='mb-10 flex gap-10'
            style={{
              width: '120vw',
              x: transformX1,
            }}
          >
            {firstSlider}
          </motion.div>

          <motion.div
            className='mb-10 flex gap-10'
            style={{
              width: '120vw',
              x: transformX2,
            }}
          >
            {secondSlider}
          </motion.div>
        </div>

        <motion.div
          className='w-screen bg-foreground'
          style={{
            height: transformY,
            borderRadius: '0 0 50% 50%',
          }}
        />
      </div>
    </section>
  );
}
