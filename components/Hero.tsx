import React from 'react';
import Link from 'next/link';
import { FaCaretDown } from "react-icons/fa";
import { HERO_LINKS } from "@/lib/consts";

const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center text-[#161616] relative overflow-hidden">
      <div className="relative flex flex-col items-center text-center">
        <p className="text-6xl mb-4">Hey, I&apos;m <span className="underline">Noah</span></p>
        <p className="text-9xl font-bold mb-8">Software Engineer</p>
        <p className="text-2xl max-w-2xl mx-auto opacity-80 mb-8">Crafting elegant solutions to complex problems, one line of code at a time.</p>
        
        <div className="flex space-x-4">
          {HERO_LINKS.map((link, index) => (
              <Link 
                key={index}
                href={link.src}
                target='_blank'
                className="bg-[#EEECEC] text-[#494949] border border-[#d1d1d1] p-3 rounded-xl hover:bg-opacity-80 transition-colors"
              >
                {link.icon}
              </Link>
            ))
          }
        </div>
      </div>

      <div className="absolute bottom-8 flex items-center flex-col">
        <FaCaretDown className="animate-bounce text-4xl duration-2000 text-[#161616]"/>
      </div>
    </div>
  );
};

export default Hero;