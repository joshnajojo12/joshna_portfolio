'use client';

import { motion } from 'framer-motion';

import { ParallaxReveal } from '@/components';

export function Description() {
  return (
    <section id='about' className='relative mx-auto max-w-7xl px-8 py-32'>
      <div className='grid grid-cols-1 gap-y-10 lg:grid-cols-12'>
        {/* LEFT TEXT */}
        <div className='lg:col-span-8'>
          <h2 className='text-3xl leading-tight md:text-4xl lg:text-5xl'>
            <ParallaxReveal paragraph='Exploring technology, creativity, and innovation to build meaningful digital experiences with real-world impact.' />
          </h2>

          <p className='mt-6 max-w-xl text-base text-neutral-700 lg:text-lg'>
            <ParallaxReveal paragraph='I enjoy working across web development, UI/UX design, and collaborative projects, where ideas, execution, and teamwork come together to solve real problems.' />
          </p>
        </div>

        {/* RIGHT SIDE — ABOUT ME BUTTON */}
        <motion.div
          className='flex items-start justify-start pt-10 lg:col-span-4 lg:justify-end lg:pt-24'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <button
            className='
              flex
              size-32
              items-center
              justify-center
              rounded-full
              bg-[#1c1d20]
              text-white
              transition
              hover:bg-[#4f63ff]
            '
          >
            About me
          </button>
        </motion.div>
      </div>
    </section>
  );
}
