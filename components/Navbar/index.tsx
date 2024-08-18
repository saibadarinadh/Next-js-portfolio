import React from 'react';
import { Item } from './Item';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-center text-[#e6e6e6] pt-8 -mb-14">
      <div className="w-fit rounded-full border border-[#161616] shadow-lg backdrop-blur-xl bg-opacity-50 bg-[#3b3b3b]">
        <div className='flex flex-row space-x-12 items-center px-5 py-4'>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Previous Work</Item>
          <Item>Contact</Item>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;