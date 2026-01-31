'use client';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image'|'local-image'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  return (
    <Center
      className='relative w-1/4 overflow-hidden rounded'
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
      {(type === 'image' || type === 'local-image') && (
        <img
          src={source}
          alt=''
          aria-hidden="true"
          className='absolute inset-0 size-full object-cover'
        />
      )}
    </Center>
  );
}
