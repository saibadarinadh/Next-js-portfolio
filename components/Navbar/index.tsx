import React from 'react';
import { Item } from './Item';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-3 left-1/2 z-10 m-5 flex h-12 translate-x-[-52%] items-center justify-center text-[#161616]">
      <div className="w-full rounded-full border border-[#d1d1d1] shadow-lg backdrop-blur-xl bg-opacity-50 bg-[#ebe8e8]">
        <div className='flex flex-row space-x-12 items-center px-5 py-4'>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Previos Work</Item>
          <Item>Contact</Item>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;