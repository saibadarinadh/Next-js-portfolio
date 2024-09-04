import React from 'react';
import { motion } from 'framer-motion';

interface WorkItem {
  title: string;
  tags: string[];
  image: string;
}

const workItems: WorkItem[] = [
  {
    title: "Clippie AI",
    tags: ["My Second SaaS - Age 21"],
    image: "/previous-work/clippie.png",
  },
  {
    title: "American Express",
    tags: ["Internship"],
    image: "/previous-work/amex.png",
  },
  {
    title: "Crayo AI",
    tags: ["My first time working at a start-up!"],
    image: "/previous-work/crayo.png",
  },
  {
    title: "Liquid Tools",
    tags: ["My first ever SaaS!"],
    image: "/previous-work/liquid.png",
  },
];

const PreviousWork: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Previous Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="h-full flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-grow p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PreviousWork;