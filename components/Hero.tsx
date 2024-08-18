'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCaretDown } from "react-icons/fa";
import { HERO_LINKS } from "@/lib/consts";

const Hero: React.FC = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight;
      const newScale = 1 + (scrollPosition / maxScroll) * 0.2; // Adjust 0.2 to control the maximum scale
      setScale(newScale > 1.2 ? 1.2 : newScale); // Cap the maximum scale at 1.2
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center text-[#f0f0f0] relative overflow-hidden">
      <div 
        className="relative flex flex-col items-center text-center transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        <p className="text-6xl mb-4">Hey, I&apos;m <span className="underline">Noah</span></p>
        <p className="text-9xl font-bold mb-8">Software Engineer</p>
        <p className="text-2xl max-w-2xl mx-auto opacity-80 mb-8">Crafting elegant solutions to complex problems, one line of code at a time.</p>
        
        <div className="flex space-x-4">
          {HERO_LINKS.map((link, index) => (
            <Link 
              key={index}
              href={link.src}
              target='_blank'
              className="bg-[#EEECEC] text-[#494949] border border-[#d1d1d1] p-3 rounded-xl hover:bg-opacity-80 hover:scale-110 transition-all duration-300"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 flex items-center flex-col">
        <FaCaretDown className="animate-bounce text-4xl duration-2000 text-[#f0f0f0]"/>
      </div>
    </div>
  );
};

export default Hero;