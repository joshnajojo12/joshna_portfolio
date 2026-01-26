'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const skillsRow1 = [
  { name: 'React', icon: '/projects/reactjs.png' },
  { name: 'Next.js', icon: '/projects/nextjs.png' },
  { name: 'JavaScript', icon: '/projects/javascript.png' },
  { name: 'TypeScript', icon: '/projects/typescript.png' },
  { name: 'Git', icon: '/projects/git.png' },
  {
    name: 'Gemini AI',
    icon: '/projects/Gemini_Generated_Image_o2s0i6o2s0i6o2s0.png',
  },
];

const skillsRow2 = [
  { name: 'Tailwind', icon: '/projects/tailwind.png' },
  { name: 'Figma', icon: '/projects/figma.png' },
  { name: 'GitHub', icon: '/projects/github.png' },
  { name: 'CSS', icon: '/projects/css.png' },
  {
    name: 'Design',
    icon: '/projects/Gemini_Generated_Image_q0t2t8q0t2t8q0t2.png',
  },
  {
    name: 'Development',
    icon: '/projects/Gemini_Generated_Image_qmvelmqmvelmqmve(1).png',
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 20%'],
  });

  // Subtle scroll-linked horizontal movement
  const xRow1 = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const xRow2 = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  // Gentle fade and blur on section entrance/exit
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const blur = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    ['blur(16px)', 'blur(0px)', 'blur(0px)', 'blur(16px)']
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-10 flex flex-col items-center justify-center overflow-hidden bg-white px-4 py-24 sm:px-8 md:py-32"
    >
      {/* Section Header */}
      <motion.div
        style={{ opacity }}
        className="mb-20 w-full max-w-2xl text-center md:mb-28"
      >
        <h2 className="mb-3 text-xs font-normal uppercase tracking-widest text-neutral-400">
          Technical Expertise
        </h2>
        <p className="text-lg text-neutral-500 md:text-xl">
          Tools and technologies for building digital experiences
        </p>
      </motion.div>

      {/* Row 1 - Moves Left to Right */}
      <motion.div
        style={{ x: xRow1, filter: blur, opacity }}
        className="mb-16 flex gap-8 md:gap-16 lg:gap-20"
      >
        {skillsRow1.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.div>

      {/* Row 2 - Moves Right to Left */}
      <motion.div
        style={{ x: xRow2, filter: blur, opacity }}
        className="flex gap-8 md:gap-16 lg:gap-20"
      >
        {skillsRow2.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div className="group flex flex-col items-center gap-3 md:gap-4">
      {/* Icon Container */}
      <div className="relative h-24 w-24 rounded-2xl bg-neutral-50 shadow-sm transition-shadow duration-300 md:h-28 md:w-28 lg:h-32 lg:w-32">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={skill.icon}
            alt={skill.name}
            width={80}
            height={80}
            className="opacity-65 transition-opacity duration-300 group-hover:opacity-80"
            loading="lazy"
          />
        </div>
      </div>

      {/* Label */}
      <span className="text-xs font-normal text-neutral-500 md:text-sm">
        {skill.name}
      </span>
    </div>
  );
}
