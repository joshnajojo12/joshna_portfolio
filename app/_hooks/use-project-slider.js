'use client';

import { useScroll, useTransform } from 'framer-motion';

/** @param {import('react').MutableRefObject<HTMLElement>} element */
export function useProjectSlider(element) {
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'end start'],
  });

  const transformX1 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const transformX2 = useTransform(scrollYProgress, [0, 1], [-250, 0]);
  // Keep the bottom curve stable and avoid large dead-space near section boundaries
  const transformY = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return { transformX1, transformX2, transformY };
}
