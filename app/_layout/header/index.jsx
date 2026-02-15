'use client';

import {
  motion,
  useAnimationControls,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ChevronDown, MoveDownRight } from 'lucide-react';
import Image from 'next/image';

import { ParallaxReveal, ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  const { scrollY } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 280], [1, 0]);
  const scrollIndicatorY = useTransform(scrollY, [0, 200], [0, 24]);
  const indicatorOpacity = useSpring(scrollIndicatorOpacity, {
    stiffness: 100,
    damping: 30,
  });
  const indicatorY = useSpring(scrollIndicatorY, {
    stiffness: 100,
    damping: 30,
  });

  // Subtle cursor-reactive motion for the crystal
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });
  const crystalControls = useAnimationControls();

  const handlePointerMove = event => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX =
      (event.clientX - (rect.left + rect.width / 2)) / rect.width;
    const relativeY =
      (event.clientY - (rect.top + rect.height / 2)) / rect.height;

    // Very subtle parallax toward cursor
    x.set(relativeX * 28);
    y.set(relativeY * 20);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleBubbleClick = async () => {
    // Burst effect: quick expand + fade + blur, then gently reform
    await crystalControls.start({
      scale: 1.25,
      opacity: 0,
      filter: 'blur(14px)',
      transition: { duration: 0.4, ease: 'easeOut' },
    });
    await crystalControls.start({
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: 'easeOut' },
    });
  };

  return (
    <motion.header
      id='home'
      className='relative h-dvh overflow-hidden bg-black text-white'
      variants={slideUp}
      initial='initial'
      animate='enter'
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Central photo with gentle motion */}
      <motion.div
        aria-hidden='true'
        className='absolute inset-0 z-0 flex items-center justify-center'
        animate={{ y: [-6, 6, -6], scale: [1.01, 1.03, 1.01] }}
        transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity }}
      >
        {/* Breathing + subtle rotation */}
        <motion.div
          className='relative size-[30vw] min-h-[300px] min-w-[300px] rounded-full'
          style={{ x: springX, y: springY }}
          animate={{
            scale: [1, 1.035, 1],
            rotate: [-1.25, 1.25, -1.25],
          }}
          transition={{
            duration: 24,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        >
          <motion.div
            className='relative size-full cursor-pointer overflow-hidden rounded-full'
            animate={crystalControls}
            initial={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            onClick={handleBubbleClick}
          >
            <Image
              src='/images/personal/joshna.jpg'
              alt='Joshna Jojo'
              fill
              sizes='(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 30vw'
              priority
              className='object-cover object-center'
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* soft dark veil only for text readability */}
      <div
        aria-hidden='true'
        className='absolute inset-0 z-0 bg-gradient-to-b from-black/25 via-transparent to-black/40'
      />

      {/* Content */}
      <div className='relative z-10 flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
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
            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>
                <ParallaxReveal paragraph='Freelance' />
              </span>
              <span className='block'>
                <ParallaxReveal paragraph='Designer & Developer' />
              </span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
