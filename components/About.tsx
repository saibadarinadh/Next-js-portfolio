import React from 'react';

const About: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div
      id="about"
      className="relative min-h-screen w-full  px-4 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="">
          {/* Main Content Section */}
          <div className="space-y-8 rounded-2xl bg-black/40 p-8 backdrop-blur-lg">
            {/* Title Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-blue-400">Hello, I'm Badarinadh</h2>
              <h1 className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                FullStack Developer & AI Researcher
              </h1>
            </div>

            {/* Description Section */}
            <div className="space-y-6 text-lg text-gray-300">
              <p className="leading-relaxed">
                Passionate about crafting innovative solutions at the intersection of AI and Full Stack Development. 
                With expertise in building efficient, scalable applications and implementing cutting-edge AI solutions.
              </p>
              <p className="leading-relaxed">
                My journey encompasses deep learning, machine learning, and modern web technologies. 
                I focus on creating impactful solutions that bridge the gap between complex AI systems and user-friendly applications.
              </p>
            </div>

            {/* Highlights Section */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-blue-900/20 p-4">
                <h3 className="font-bold text-blue-400">Full Stack</h3>
                <p className="text-sm text-gray-300">Modern web applications</p>
              </div>
              <div className="rounded-lg bg-blue-900/20 p-4">
                <h3 className="font-bold text-blue-400">AI Research</h3>
                <p className="text-sm text-gray-300">Deep learning & ML</p>
              </div>
              {/* <div className="rounded-lg bg-blue-900/20 p-4">
                <h3 className="font-bold text-blue-400">Cloud Native</h3>
                <p className="text-sm text-gray-300">Scalable solutions</p>
              </div> */}
            </div>

            
          </div>

          {/* Image Section - Uncomment and update image path when ready */}
          {/* <div className="relative hidden md:block">
            <div className="sticky top-20 overflow-hidden rounded-2xl border-2 border-blue-400/20">
              <Image 
                src="/badari.jpg" 
                alt="Vecha Sai Badarinadh" 
                width={400} 
                height={500} 
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div> */}
        </div>

        
      </div>
    </div>
  );
};

export default About;