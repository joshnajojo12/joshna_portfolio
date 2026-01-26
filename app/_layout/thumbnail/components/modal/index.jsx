'use client';

import { forwardRef, useEffect, useRef } from 'react';

import { motion } from 'framer-motion';

import { Center } from '@/components';
import { thumbnailOptions } from '@/data';
import { randomId } from '@/utils';

const MotionComponent = motion(Center);

export const ThumbnailModal = forwardRef(function ThumbnailModal(
  { variants, active, index, ...props },
  ref,
) {
  const videoRefs = useRef([]);

  // 🔥 Control video speed (SAFE)
  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.playbackRate = 3.76; // 👉 CHANGE SPEED HERE (1.5 – 2.5 recommended)
      }
    });
  }, [active, index]);

  const items = thumbnailOptions.map(
    ({ title, type, source, githubUrl }, i) => {
      const id = randomId();

      return (
        <Center key={id} className='relative size-full'>
          {/* VIDEO OR IMAGE */}
          {type === 'video' ? (
            <video
              ref={el => (videoRefs.current[i] = el)}
              src={source}
              className='size-full object-cover'
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={source}
              alt={`${title} thumbnail`}
              className='size-full object-cover'
            />
          )}

          {/* GITHUB ICON OVERLAY */}
          {githubUrl && (
            <a
              href={githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='absolute bottom-3 right-3 z-10 rounded-full bg-black/60 p-2 transition hover:bg-black/80'
            >
              <img src='/github.svg' alt='GitHub' className='size-4' />
            </a>
          )}
        </Center>
      );
    },
  );

  return (
    <MotionComponent
      ref={ref}
      className='pointer-events-none fixed left-1/2 top-1/2 size-80 overflow-hidden rounded bg-secondary-foreground'
      variants={variants}
      initial='initial'
      animate={active ? 'enter' : 'closed'}
      {...props}
    >
      <div
        className='relative size-full'
        style={{
          top: `${index * -100}%`,
          transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      >
        {items}
      </div>
    </MotionComponent>
  );
});
