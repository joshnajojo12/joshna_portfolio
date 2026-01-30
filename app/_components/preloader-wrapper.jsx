'use client';

import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { Preloader } from '@/app/_layout/transition';

export function PreloaderWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence mode='wait'>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
    </AnimatePresence>
  );
}
