import React from 'react';
import Link from 'next/link';
import { IoDocumentTextOutline } from "react-icons/io5";

const About: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col space-y-12 items-center justify-center text-[#161616] relative overflow-hidden">
      <div className='flex flex-row space-x-3 w-2/3'>
        <div className='w-full rounded-xl p-6 border border-[#d1d1d1] flex flex-col items-start justify-center space-y-8 h-[295px]'>
          <h1 className='text-7xl font-extrabold'>{'<'} FullStackEngineer{' />'}</h1>
          <div className='text-xl text-muted-foreground'>
            <p>After teaching myself to code to creating my own companies <span className='font-bold'>from concept to profits.</span> I also went to Queen Mary University of London</p>
            <p>I then earned an internship at <Link href={'/amex'} className='font-bold underline underline-offset-4'>American Express</Link> {' '}
              while also juggling starting my new company {'->'} <Link href={'https://clippie.ai'} className='font-bold underline underline-offset-4'>clippie.ai</Link>
            </p>
          </div>
        </div>
        <div className='border border-[#d1d1d1] rounded-xl overflow-hidden w-fit h-[295px]'>
          <img src='/noah.jpg' alt='Noah' className='w-auto h-full aspect-square object-cover'/>
        </div>
      </div>
      <button className='border border-[#d1d1d1] p-3 rounded-xl text-[#494949] font-semibold space-x-2 items-center flex hover:scale-105 transition-all duration-300'>
        <IoDocumentTextOutline size={24}/> <span>View my resume</span>
      </button>
    </div>
  );
};

export default About;