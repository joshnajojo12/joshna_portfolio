'use client';

import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

const phrase =
  'Exploring technology, creativity, and innovation to build meaningful digital experiences with real-world impact.';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

export function Description() {
  return (
    <motion.article
      id="about"
      className='container relative'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={container}
    >
      <Wrapper>
        <motion.div className='basis-full lg:basis-9/12' variants={item}>
          <Title suppressHydrationWarning>
            <ParallaxReveal paragraph={phrase} />
          </Title>
        </motion.div>

        <motion.div className='basis-7/12 lg:basis-3/12' variants={item}>
          <ParallaxFade>
            <Balancer as='p' className='mt-2 text-base lg:text-lg'>
              I enjoy working across web development, UI/UX design, and
              collaborative projects, where ideas, execution, and teamwork come
              together to solve real problems.
            </Balancer>
          </ParallaxFade>
        </motion.div>

        <motion.div
          variants={item}
          className='flex w-full justify-end lg:absolute lg:right-0 lg:top-full lg:mt-0 lg:justify-end lg:pe-10'
        >
          <MagneticButton
            type="button"
            variant="primary"
            size="lg"
            onClick={() => {
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            About me
          </MagneticButton>
        </motion.div>
      </Wrapper>
    </motion.article>
  );
}
