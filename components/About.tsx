import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoDocumentTextOutline } from "react-icons/io5";

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen px-4 py-8 sm:py-12 md:py-16 flex flex-col space-y-8 sm:space-y-12 items-center justify-center text-[#f0f0f0] relative overflow-hidden">
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3 w-full max-w-6xl'>
        <div className='w-full rounded-xl p-4 sm:p-6 border border-[#292929] flex flex-col items-start justify-center space-y-4 sm:space-y-6 md:space-y-8'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold'>FullStack Engineer</h1>
          <div className='text-sm sm:text-base md:text-lg lg:text-xl text-[#8b8b8b] space-y-2'>
            <p>After teaching myself to code to creating my own companies <span className='font-bold'>from concept to profits.</span> I also went to Queen Mary University of London</p>
            <p>I then earned an internship at <Link href={'/amex'} className='font-bold underline underline-offset-4'>American Express</Link> {' '}
              while also juggling starting my new company {'->'} <Link href={'https://clippie.ai'} className='font-bold underline underline-offset-4'>clippie.ai</Link>
            </p>
          </div>
        </div>
        <div className='border border-[#292929] rounded-xl overflow-hidden w-full md:w-fit h-full aspect-video md:aspect-square'>
          <Image src='/noah.jpg' alt='Noah' width={295} height={295} className='w-full h-full object-cover'/>
        </div>
      </div>
      <button className='border border-[#292929] p-2 sm:p-3 rounded-xl text-[#f0f0f0] font-semibold space-x-2 items-center flex hover:scale-105 transition-all duration-300'>
        <IoDocumentTextOutline size={20} className="sm:text-2xl"/> <span className="text-sm sm:text-base">View my resume</span>
      </button>
    </div>
  );
};

export default About;