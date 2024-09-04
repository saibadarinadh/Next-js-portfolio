import React from 'react';
import { Item } from './Item';

const Navbar: React.FC = () => {
  return (
    <nav className="-mb-14 flex items-center justify-center pt-8 text-[#e6e6e6]">
      <div className="w-fit rounded-full border border-[#161616] bg-[#3b3b3b] bg-opacity-50 shadow-lg backdrop-blur-xl">
        <div className="flex flex-row items-center space-x-12 px-5 py-4">
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
