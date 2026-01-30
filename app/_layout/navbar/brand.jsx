'use client';

import { useEffect, useState } from 'react';

import { Copyright } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export function NavbarBrand() {
  const router = useRouter();
  const pathname = usePathname();
  const [showFullName, setShowFullName] = useState(false);

  useEffect(() => {
    if (!showFullName) return;
    const t = setTimeout(() => setShowFullName(false), 1400);
    return () => clearTimeout(t);
  }, [showFullName]);

  const handleClick = () => {
    setShowFullName(true);

    // Smooth scroll to top on home; otherwise navigate home.
    if (pathname === '/') {
      const home = document.getElementById('home');
      if (home) home.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    router.push('/');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className='group flex cursor-pointer pb-5'
      aria-label="Go to top"
    >
      <div className='transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]'>
        <Copyright />
      </div>

      <div className='relative ms-2 flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-expo group-hover:pe-8'>
        <h5
          className={[
            'transition-all duration-500 ease-in-expo',
            showFullName ? 'opacity-0 -translate-x-3' : 'opacity-100 translate-x-0',
            'group-hover:-translate-x-full',
          ].join(' ')}
        >
          Code by
        </h5>
        <h5
          className={[
            'ps-1 transition-all duration-500 ease-in-expo',
            showFullName ? 'opacity-0 -translate-x-3' : 'opacity-100 translate-x-0',
            'group-hover:-translate-x-14',
          ].join(' ')}
        >
          Joshna
        </h5>
        <h5
          className={[
            'absolute left-28 ps-1 transition-transform duration-500 ease-in-expo',
            showFullName ? '-translate-x-14' : '',
            'group-hover:-translate-x-14',
          ].join(' ')}
        >
          Jojo
        </h5>

        {/* Click state: briefly swap to full name */}
        <h5
          aria-hidden={!showFullName}
          className={[
            'pointer-events-none absolute left-0 top-0 flex items-center gap-1',
            'transition-all duration-500 ease-in-expo',
            showFullName ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3',
          ].join(' ')}
        >
          Joshna <span className="ps-1">Jojo</span>
        </h5>
      </div>
    </button>
  );
}
