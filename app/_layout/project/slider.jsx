'use client';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image'|'local-image'|'video'} props.type
 * @param {string} props.source
 * @param {string} [props.poster]
 */
export function ProjectSlider({ type, source, poster }) {
  return (
    <Center
      className='relative w-1/4 overflow-hidden rounded'
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
      {type === 'video' ? (
        <video
          src={source}
          poster={poster}
          className='absolute inset-0 size-full object-cover'
          autoPlay
          muted
          loop
          playsInline
          preload='metadata'
        />
      ) : (
        <img
          src={source}
          alt=''
          aria-hidden='true'
          className='absolute inset-0 size-full object-cover'
        />
      )}
    </Center>
  );
}
