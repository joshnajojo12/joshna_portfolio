'use client';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Link from 'next/link';

import { ParallaxReveal } from '@/app/_components/parallax/reveal';
import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Container>
      <Row>
        <div className='flex items-center gap-8'>
          <ImageWrapper></ImageWrapper>
          <MainTitle>
            <ParallaxReveal paragraph='Let’s work' />
          </MainTitle>
        </div>

        <div className='flex items-center justify-between'>
          <MainTitle>
            <ParallaxReveal paragraph='together' />
          </MainTitle>
          <div>
            <ArrowDownLeft size={28} strokeWidth={1.25} />
          </div>
        </div>
      </Row>

      <Row>
        <div className='relative w-full'>
          <div className='h-px bg-muted-foreground' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='/contact'>
                <MagneticButton variant='primary' size='lg'>
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>{/* Intentionally kept clean: message form only */}</Row>
    </Container>
  );
}
