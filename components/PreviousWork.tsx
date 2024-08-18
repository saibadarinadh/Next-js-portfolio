'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface WorkItem {
  title: string;
  tags: string[];
  image: string;
  backgroundColor: string;
}

const workItems: WorkItem[] = [
  {
    title: "Clippie AI",
    tags: ["My Second SaaS - Age 21"],
    image: "/previous-work/clippie.png",
    backgroundColor: "rgb(177 61 255)"
  },
  {
    title: "American Express",
    tags: ["Internship"],
    image: "/previous-work/amex.png",
    backgroundColor: "rgb(50 108 233)"
  },
  {
    title: "Crayo AI",
    tags: ["My first time working at a start-up!"],
    image: "/previous-work/crayo.png",
    backgroundColor: "rgb(82 183 250)"
  },
  {
    title: "Liquid Tools",
    tags: ["My first ever SaaS!"],
    image: "/previous-work/liquid.png",
    backgroundColor: "rgb(62 49 236)"
  },
];

const PreviousWork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  return (
    <div className="hidden md:block relative bg-black text-white overflow-hidden">
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center py-6 md:py-10">Previous Work</h2>
      <div ref={containerRef} className="relative min-h-[400dvh] mx-4 sm:mx-8 md:mx-16 lg:mx-36 rounded-xl md:rounded-3xl">
        {workItems.map((item, index) => {
          const marginTop = index > 0 && useTransform(
            scrollYProgress,
            [Math.max(0, (index - 1) * 0.25), index * 0.25, (index + 1) * 0.25],
            ['-1%', '-3%', '-6%']
          );

          return (
            <motion.div
              key={index}
              className={`sticky top-0 h-fit flex items-center justify-center overflow-hidden rounded-xl md:rounded-3xl z-[${index+2}]`}
              style={{
                backgroundColor: item.backgroundColor,
                marginTop: marginTop ? marginTop : '0%',
              }}
            >
              <motion.div
                className="w-full max-w-7xl mx-auto p-4 sm:p-8 md:p-12"
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [index * 0.25, (index + 1) * 0.25],
                    [1, 0.5]
                  ),
                  scale: useTransform(
                    scrollYProgress,
                    [index * 0.25, (index + 1) * 0.25],
                    [1, 1.2]
                  ),
                }}
              >
                <div className="flex flex-col space-y-4 md:space-y-8 items-center">
                  <div className='text-center flex flex-col items-center justify-center'>
                    <div className="flex flex-wrap justify-center gap-2 mb-2 md:mb-4">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-transparent text-gray-200 rounded-full text-xs sm:text-sm border border-dashed"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl sm:text-5xl md:text-7xl lg:text-[120px] font-bold uppercase">{item.title}</h3>
                  </div>
                  <div className="w-full aspect-video relative rounded-lg md:rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className='h-full w-full object-cover'
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PreviousWork;