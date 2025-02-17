'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCaretDown } from 'react-icons/fa';
import { HERO_LINKS } from '@/lib/consts';
import { GrFormNextLink } from 'react-icons/gr';

const Hero: React.FC = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight;
      const newScale = 1 + (scrollPosition / maxScroll) * 0.2;
      setScale(newScale > 1.2 ? 1.2 : newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden text-[#f0f0f0]">
      <div
        className="relative flex flex-col items-center text-center transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        <p className="mb-4 text-4xl sm:text-5xl md:text-6xl">
          Hey, I&apos;m <span className="underline">Badarinadh</span>
        </p>
        <p className="mb-8 text-5xl font-bold sm:text-7xl md:text-9xl">Software Engineer</p>
        <p className="mx-auto mb-8 max-w-2xl text-xl opacity-80 sm:text-2xl">
        I craft AI, and it shapes the future :{')'}
        </p>

        <div className="flex space-x-4">
          {HERO_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.src}
              target={link.src === '/resume' ? undefined : '_blank'}
              className="rounded-xl border border-[#d1d1d1] bg-[#EEECEC] p-3 text-[#494949] transition-all duration-300 hover:scale-110 hover:bg-opacity-80"
            >
              {link.icon}
            </Link>
          ))}
        </div>

        {/* <div className="mt-8">
          <Link href="https://github.com/NoahGdev/Next-Portfolio" className="text-2xl font-bold hover:underline">
            Source Code <GrFormNextLink className="inline" />
          </Link>
        </div> */}
      </div>

      <div className="absolute bottom-8 flex flex-col items-center">
        <FaCaretDown className="duration-2000 animate-bounce text-4xl text-[#f0f0f0]" />
      </div>
    </div>
  );
};

export default Hero;
