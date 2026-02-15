'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: 'React', icon: '/projects/reactjs.png' },
  { name: 'Next.js', icon: '/projects/nextjs.png' },
  { name: 'JavaScript', icon: '/projects/javascript.png' },
  { name: 'TypeScript', icon: '/projects/Typescript_logo_2020.svg.png' },
  { name: 'CSS3', icon: '/projects/css.png' },
  { name: 'Tailwind CSS', icon: '/projects/tailwind.png' },
  { name: 'Git', icon: '/projects/git.png' },
  { name: 'GitHub', icon: '/projects/github.png', invertOnLight: true },
  { name: 'Figma', icon: '/projects/figma.png' },
  { name: 'Python', icon: '/projects/Python-logo-notext.svg.png' },
  { name: 'Visual Studio Code', icon: '/projects/images.png' },
  { name: 'Design Toolkit', icon: '/projects/Untitled.png' },
];

const skillsRow1 = skills.slice(0, 6);
const skillsRow2 = skills.slice(6, 12);

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
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0],
  );
  const blur = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    ['blur(16px)', 'blur(0px)', 'blur(0px)', 'blur(16px)'],
  );

  return (
    <section
      ref={sectionRef}
      id='skills'
      className='relative z-10 flex flex-col items-center justify-center overflow-hidden bg-white px-4 py-24 sm:px-8 md:py-32'
    >
      {/* Section Header */}
      <motion.div
        style={{ opacity }}
        className='mb-20 w-full max-w-2xl text-center md:mb-28'
      >
        <h2 className='mb-3 text-xs font-normal uppercase tracking-widest text-neutral-400'>
          Technical Expertise
        </h2>
        <p className='text-lg text-neutral-500 md:text-xl'>
          Tools and technologies for building digital experiences
        </p>
      </motion.div>

      {/* Row 1 - Moves Left to Right */}
      <motion.div
        style={{ x: xRow1, filter: blur, opacity }}
        className='mb-16 flex gap-8 md:gap-16 lg:gap-20'
      >
        {skillsRow1.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </motion.div>

      {/* Row 2 - Moves Right to Left */}
      <motion.div
        style={{ x: xRow2, filter: blur, opacity }}
        className='flex gap-8 md:gap-16 lg:gap-20'
      >
        {skillsRow2.map((skill, i) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={i + skillsRow1.length}
          />
        ))}
      </motion.div>
    </section>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};

function SkillCard({ skill, index = 0 }) {
  return (
    <motion.div
      className='group flex flex-col items-center'
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-40px' }}
      custom={index}
      whileHover={{
        y: -6,
        transition: { duration: 0.25, ease: [0.33, 1, 0.68, 1] },
      }}
    >
      {/* Icon Container */}
      <motion.div
        className='relative size-24 rounded-2xl bg-neutral-50 shadow-sm md:size-28 lg:size-32'
        whileHover={{
          boxShadow:
            '0 20px 40px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
          transition: { duration: 0.25 },
        }}
      >
        <div className='absolute inset-0 flex items-center justify-center'>
          <Image
            src={skill.icon}
            alt={skill.name}
            width={80}
            height={80}
            sizes='80px'
            className='object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100'
            style={
              skill.invertOnLight
                ? { filter: 'invert(1) contrast(0.9)' }
                : undefined
            }
            loading='lazy'
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
