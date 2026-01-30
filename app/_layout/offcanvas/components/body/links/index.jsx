'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems } from '@/data';

import { scale, slideOut } from './variants';

export function OffcanvasLinks({ onLinkClick }) {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  const handleSmoothScroll = (href) => {
    if (pathname === '/') {
      const sectionId = href.replace('#', '').replace('/', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        onLinkClick?.();
      }
    }
  };

  const items = navItems.map(({ href, title }, index) => {
    const id = index;
    const isHome = pathname === '/';
    const isHash = href.startsWith('#');
    const to = href === '#home' ? '/' : href;

    return (
      <motion.li
        key={id}
        className='relative my-4 flex items-center'
        variants={slideOut}
        custom={id}
        initial='initial'
        animate='enter'
        exit='exit'
        onPointerEnter={() => setActiveLink(href)}
      >
        <motion.div
          className='absolute -left-11'
          variants={scale}
          animate={activeLink === href ? 'open' : 'closed'}
        >
          <Dot size={36} />
        </motion.div>
        {isHome && isHash ? (
          <button
            type="button"
            onClick={() => handleSmoothScroll(href)}
            className='text-6xl capitalize hover:opacity-80 transition-opacity'
          >
            {title}
          </button>
        ) : (
          <Link href={to} className='text-6xl capitalize'>
            {title}
          </Link>
        )}
      </motion.li>
    );
  });

  return (
    <div className='mt-20 flex flex-col gap-3'>
      <div className='mb-10 border-b border-solid'>
        <h5 className='text-xs uppercase text-secondary-foreground'>
          Navigation
        </h5>
      </div>
      <ul onPointerLeave={() => setActiveLink(pathname)}>{items}</ul>
    </div>
  );
}
