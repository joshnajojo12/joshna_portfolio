'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { CldImage } from 'next-cloudinary';

import { projectOptions } from '@/data';

const skillsRow1 = [
  { name: 'React', icon: '/projects/reactjs.png' },
  { name: 'Next.js', icon: '/projects/nextjs.png' },
  { name: 'JavaScript', icon: '/projects/javascript.png' },
  { name: 'TypeScript', icon: '/projects/typescript.png' },
  { name: 'Git', icon: '/projects/git.png' },
  {
    name: 'Gemini AI 1',
    icon: '/projects/Gemini_Generated_Image_o2s0i6o2s0i6o2s0.png',
  },
];

const skillsRow2 = [
  { name: 'Tailwind', icon: '/projects/tailwind.png' },
  { name: 'Figma', icon: '/projects/figma.png' },
  { name: 'GitHub', icon: '/projects/github.png' },
  { name: 'CSS', icon: '/projects/css.png' },
  {
    name: 'Gemini AI 2',
    icon: '/projects/Gemini_Generated_Image_q0t2t8q0t2t8q0t2.png',
  },
  {
    name: 'Gemini AI 3',
    icon: '/projects/Gemini_Generated_Image_qmvelmqmvelmqmve(1).png',
  },
];

const allProjects = [...projectOptions.first, ...projectOptions.second];

export default function Skills() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Joshna–style opposite motion
  const xRow1 = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const xRow2 = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const blur = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ['blur(20px)', 'blur(0px)', 'blur(0px)', 'blur(20px)'],
  );

  return (
    <section
      ref={sectionRef}
      className='relative z-10 flex flex-col items-center justify-center overflow-hidden bg-white px-8 py-20'
    >
      {/* Title */}
      <motion.div style={{ opacity }} className='mb-24 text-center'>
        <h2 className='text-sm uppercase tracking-widest text-neutral-500'>
          Technical Stack
        </h2>
        <p className='mt-4 text-neutral-400'>
          Tools and technologies for building experiences
        </p>
      </motion.div>

      {/* Row 1 */}
      <motion.div
        style={{ x: xRow1, filter: blur }}
        className='mb-20 flex gap-20'
      >
        {skillsRow1.map(skill => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div style={{ x: xRow2, filter: blur }} className='flex gap-20'>
        {skillsRow2.map(skill => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </section>
  );
}

function SkillItem({ skill }) {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='relative size-32 rounded-3xl bg-neutral-100 shadow-sm'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <Image
            src={skill.icon}
            alt={skill.name}
            width={80}
            height={80}
            className='opacity-70'
          />
        </div>
      </div>
      <span className='text-sm text-neutral-500'>{skill.name}</span>
    </div>
  );
}
