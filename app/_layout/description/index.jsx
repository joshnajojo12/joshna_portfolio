'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

/**
 * Animated description text
 */
const phrase =
  'Exploring technology, creativity, and innovation to build meaningful digital experiences with real-world impact.';

export function Description() {
  return (
    <article className='container relative'>
      <Wrapper>
        {/* Main animated text (hydration-safe) */}
        <div className='basis-full lg:basis-9/12'>
          <Title suppressHydrationWarning>
            <ParallaxReveal paragraph={phrase} />
          </Title>
        </div>

        {/* Supporting text */}
        <div className='basis-7/12 lg:basis-3/12'>
          <ParallaxFade>
            <Balancer as='p' className='mt-2 text-base lg:text-lg'>
              I enjoy working across web development, UI/UX design, and
              collaborative projects, where ideas, execution, and teamwork come
              together to solve real problems.
            </Balancer>
          </ParallaxFade>
        </div>

        {/* About button */}
        <motion.div
          whileInView={{ y: '-15%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className='absolute right-0 top-3/4 lg:top-full lg:me-10'>
            <Link href='/about'>
              <MagneticButton variant='ghost' size='xl'>
                About me
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </Wrapper>
    </article>
  );
}
