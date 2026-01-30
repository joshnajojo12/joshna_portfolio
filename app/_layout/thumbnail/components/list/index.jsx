'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { thumbnailOptions } from '@/data';

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};

/**
 * @param {Object} props
 * @param {(index: number) => void} props.handlePointerEnter
 * @param {(index: number) => void} props.handlePointerLeave
 * @param {(x: number, y: number) => void} props.moveItems
 */
export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
}) {
  const items = thumbnailOptions.map(({ href, title }, index) => {
    const id = index;
    return (
      <motion.li
        key={`thumbnail-list-${id}`}
        className='border-t border-solid transition-all last-of-type:border-b group-hover:opacity-90'
        style={{
          paddingInline: 'calc(clamp(1em,3vw,4em) * 2)',
          paddingBlock: 'clamp(1em,3vw,4em)',
        }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        custom={index}
        onPointerEnter={({ clientX, clientY }) => {
          handlePointerEnter(id);
          moveItems(clientX, clientY);
        }}
        onPointerLeave={({ clientX, clientY }) => {
          handlePointerLeave(id);
          moveItems(clientX, clientY);
        }}
      >
        <Link
          href={href}
          className='flex items-center justify-between max-lg:flex-wrap'
          passHref
        >
          <h4
            style={{
              fontSize: 'calc(clamp(3.25em, 7vw, 8em) * 0.75)',
            }}
          >
            {title}
          </h4>
          <p className='text-lg font-medium'>Design & Development</p>
        </Link>
      </motion.li>
    );
  });

  return <ul className='group'>{items}</ul>;
}
