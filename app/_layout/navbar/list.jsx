'use client';

import { Dot } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Center, MagneticButton } from '@/components';
import { navItems } from '@/data';
import { randomId } from '@/utils';

export function NavbarList() {
  const pathname = usePathname();

  const handleSmoothScroll = (e, href) => {
    if (pathname === '/' && href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.replace('#', '');
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const items = navItems.slice(1).map(({ href, title }) => {
    const id = randomId();
    const to = href === '#home' ? '/' : href;
    return (
      <li key={id} className='group p-4'>
        <a
          href={to}
          onClick={(e) => handleSmoothScroll(e, href)}
          className='flex items-center gap-2'
        >
          <MagneticButton className='flex items-center gap-2'>
            <span className='text-base capitalize'>{title}</span>
            <Center>
              <Dot className='scale-0 transition-transform duration-200 ease-in-expo group-hover:scale-100' />
            </Center>
          </MagneticButton>
        </a>
      </li>
    );
  });

  return <ul className='flex items-center max-lg:hidden'>{items}</ul>;
}
