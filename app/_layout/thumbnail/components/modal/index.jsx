'use client';

import { forwardRef, useEffect, useRef } from 'react';

import { motion } from 'framer-motion';

import { Center } from '@/app/_components/stack/center.styled';
import { thumbnailOptions } from '@/data';

const MotionComponent = motion(Center);

export const ThumbnailModal = forwardRef(function ThumbnailModal(
  { variants, active, index, ...props },
  ref,
) {
  const videoRefs = useRef([]);

  // Preload & sync all preview videos so hover swaps stay seamless.
  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (!video) return;
      video.playbackRate = 3.76;
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {
          /* Autoplay can be blocked temporarily; ignore */
        });
      }
    });
  }, []);

  const items = thumbnailOptions.map(
    ({ title, type, source, poster, githubUrl }, index) => {
      const stableKey = `${title}-${source}`;

      return (
        <Center key={stableKey} className='relative size-full'>
          {/* VIDEO OR IMAGE */}
          {type === 'video' ? (
            <video
              ref={el => (videoRefs.current[index] = el)}
              src={source}
              poster={poster}
              preload='auto'
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
              <img src='/projects/github.png' alt='GitHub' className='size-4' />
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
