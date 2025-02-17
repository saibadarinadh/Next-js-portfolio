import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaTimes } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiReact, SiNextdotjs, SiPython, SiJavascript, SiOpenai, SiFastapi, SiTailwindcss, SiMongodb, SiPrisma } from 'react-icons/si';

const projects = [
  {
    title: "RoadVision - Traffic Safety Analyzer",
    description: "An AI-powered traffic safety system that detects and analyzes road hazards, traffic violations, and accidents in real-time using computer vision. Features include violation detection, accident analysis, and automated reporting.",
    technologies: [<SiPython />, <SiPytorch />, <SiReact />, <SiFastapi />],
    techNames: ["Python", "PyTorch", "React", "FastAPI"],
    github: "https://github.com/saibadarinadh/RoadVision-Intelligent-Traffic-Safety-Analyzer",
    live: "#",
    category: "Computer Vision",
    image: "/api/placeholder/600/400"
  },
  {
    title: "GynoAIHub",
    description: "An AI-powered healthcare platform specifically designed for gynecological diagnosis and consultation. Integrates machine learning for preliminary diagnosis and provides telemedicine capabilities.",
    technologies: [<SiPython />, <SiOpenai />, <SiReact />],
    techNames: ["Python", "OpenAI", "React", "TailwindCSS"],
    github: "https://github.com/saibadarinadh/GynoAIHub",
    live: "",
    category: "Healthcare AI",
    image: "https://github.com/saibadarinadh/GynoAIHub/blob/main/home1.png?raw=true"
  },
  {
    title: "JobHut",
    description: "A modern job search and recruitment platform with AI-powered job matching, resume parsing, and automated application tracking system. Features real-time notifications and analytics dashboard.",
    technologies: [<SiNextdotjs />, <SiReact />, <SiPrisma />, <SiMongodb />],
    techNames: ["Next.js", "React", "Prisma", "MongoDB"],
    github: "https://github.com/saibadarinadh/jobHut",
    live: "https://www.jobhut.in/",
    category: "Full Stack",
    image: "/jobhut.png"
  },
  {
    title: "CrimeSense",
    description: "An advanced crime analysis and prediction system using machine learning. Includes features for pattern recognition, hotspot mapping, and predictive analytics for law enforcement.",
    technologies: [<SiPython />, <SiTensorflow />, <SiReact />, <SiFastapi />],
    techNames: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "https://github.com/saibadarinadh/CrimeSense",
    live: "#",
    category: "AI/ML",
    image: "/api/placeholder/600/400"
  },
  {
    title: "Real Estate Platform",
    description: "A comprehensive real estate platform featuring property listings, virtual tours, price predictions, and mortgage calculators. Includes admin dashboard for property management.",
    technologies: [<SiNextdotjs />, <SiReact />, <SiJavascript />, <SiTailwindcss />],
    techNames: ["Next.js", "React", "JavaScript", "TailwindCSS"],
    github: "https://github.com/saibadarinadh/realestate-website",
    live: "#",
    category: "Full Stack",
    image: "/api/placeholder/600/400"
  }
];

// Rest of the code remains exactly the same...

const Modal = ({ children, isOpen, onClose }: { children: React.ReactNode, isOpen: boolean, onClose: () => void }) => {
  useEffect(() => {
    const handleEsc = (event: { keyCode: number; }) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      <div 
        className="relative w-full max-w-2xl rounded-xl bg-gray-900 p-6 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

interface Project {
  title: string;
  description: string;
  technologies: JSX.Element[];
  techNames: string[];
  github: string;
  live: string;
  category: string;
  image: string;
}

const ProjectModal = ({ project, isOpen, onClose }: { project: Project | null, isOpen: boolean, onClose: () => void }) => {
  if (!project) return null;
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-400 hover:text-white"
      >
        <FaTimes className="h-6 w-6" />
      </button>
      
      <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
        {project.category}
      </span>
      
      <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
      
      <p className="mt-4 text-gray-400">{project.description}</p>
      
      <div className="mt-6">
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 rounded-md bg-gray-800 px-2 py-1 text-sm text-gray-300"
              title={project.techNames[idx]}
            >
              <span className="text-lg">{tech}</span>
              <span>{project.techNames[idx]}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-sm text-white transition-all hover:bg-gray-700"
        >
          <FaGithub />
          Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-all hover:bg-blue-700"
        >
          <FaExternalLinkAlt />
          Live Demo
        </a>
      </div>
    </Modal>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div id="projects" className="min-h-screen w-full bg-black px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-400">
            Showcasing my journey through code and innovation
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-all hover:border-blue-500/50 hover:bg-gray-800/50"
            >
              {/* <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
              </div> */}

              <div className="p-4">
                <div className="mb-2">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
                    {project.category}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mb-4 line-clamp-2 text-sm text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 rounded-md bg-gray-800 px-2 py-1 text-sm text-gray-300"
                    >
                      <span className="text-lg">{tech}</span>
                    </div>
                  ))}
                  {project.technologies.length > 3 && (
                    <div className="rounded-md bg-gray-800 px-2 py-1 text-sm text-gray-300">
                      +{project.technologies.length - 3}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-gray-800 bg-gray-900/50 px-6 py-3 text-white transition-all hover:border-blue-500/50 hover:bg-gray-800/50"
          >
            <FaGithub className="text-xl" />
            <span>See more projects on GitHub</span>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;