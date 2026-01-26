'use client';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  // ✅ Prevent hydration flash
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ⛔ Render nothing until client is ready
  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1
            suppressHydrationWarning
            className='text-[clamp(4rem,12vw,10rem)] leading-none'
          >
            <ParallaxSlider repeat={4} baseVelocity={4}>
              <span className='pe-12'>
                Joshna Jojo
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>Freelance</span>
              <span className='block'>Designer &amp; Developer</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
