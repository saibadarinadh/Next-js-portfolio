// import React from "react";
// import {
//   FaJava, FaPython, FaDatabase, FaHtml5, FaCss3, FaReact, 
//   FaNodeJs, FaAngular, FaGithub, FaDocker, FaAws, FaLinux, FaGitAlt,
//   FaRobot, FaBrain
// } from "react-icons/fa";
// import {
//   SiMongodb, SiExpress, SiSpringboot, SiTensorflow, SiScikitlearn, 
//   SiPandas, SiNumpy, SiVercel, SiRender, SiGithubactions, SiKubernetes, 
//   SiFlask, SiDjango, SiPostgresql, SiFastapi, SiGraphql, SiOpencv, SiPytorch, 
//   SiKeras, SiJupyter, SiCplusplus
// } from "react-icons/si";
// import { TbBrain, TbRobot } from "react-icons/tb";

// const skills = [
//   // Development Skills
//   { icon: <FaJava />, name: "Java" },
//   { icon: <FaPython />, name: "Python" },
//   { icon: <FaDatabase />, name: "SQL" },
//   { icon: <FaHtml5 />, name: "HTML" },
//   { icon: <FaCss3 />, name: "CSS" },
//   { icon: <SiMongodb />, name: "MongoDB" },
//   { icon: <SiExpress />, name: "Express.js" },
//   { icon: <FaReact />, name: "React" },
//   { icon: <FaNodeJs />, name: "Node.js" },
//   { icon: <FaAngular />, name: "Angular" },
//   { icon: <SiSpringboot />, name: "Spring Boot" },
//   { icon: <FaGithub />, name: "GitHub" },
//   { icon: <SiTensorflow />, name: "TensorFlow" },
//   { icon: <SiScikitlearn />, name: "Scikit-learn" },
//   { icon: <SiPandas />, name: "Pandas" },
//   { icon: <SiNumpy />, name: "NumPy" },
//   { icon: <TbBrain />, name: "Deep Learning" },
//   { icon: <TbRobot />, name: "Machine Learning" },
//   { icon: <SiPytorch />, name: "PyTorch" },
//   { icon: <SiKeras />, name: "Keras" },
//   { icon: <SiVercel />, name: "Vercel" },
//   { icon: <SiRender />, name: "Render" },
//   { icon: <SiGithubactions />, name: "GitHub Actions" },
//   { icon: <FaDocker />, name: "Docker" },
//   { icon: <FaAws />, name: "AWS" },
//   { icon: <FaLinux />, name: "Linux" },
//   { icon: <FaGitAlt />, name: "Git" },
//   { icon: <SiKubernetes />, name: "Kubernetes" },
//   { icon: <SiFlask />, name: "Flask" },
//   { icon: <SiDjango />, name: "Django" },
//   { icon: <SiPostgresql />, name: "PostgreSQL" },
//   { icon: <SiFastapi />, name: "FastAPI" },
//   { icon: <SiGraphql />, name: "GraphQL" },
//   { icon: <SiOpencv />, name: "OpenCV" },
//   { icon: <SiJupyter />, name: "Jupyter Notebook" },
//   { icon: <SiCplusplus />, name: "C++" }
// ];

// const AllSkills: React.FC = () => {
//   return (
//     <div id="AllSkills" className="text-white py-12 px-6 overflow-hidden">
//       <h1 className="text-center text-4xl font-bold mb-8 text-white">Skills</h1>
//       <div className="relative w-full overflow-hidden">
//         <div className="flex whitespace-nowrap animate-scroll">
//           {/* First set of skills */}
//           <div className="flex">
//             {skills.map((skill, index) => (
//               <div key={index} className="flex flex-col items-center mx-8">
//                 <div className="text-white text-6xl">{skill.icon}</div>
//                 <p className="mt-2 text-white text-sm font-semibold">{skill.name}</p>
//               </div>
//             ))}
//           </div>
//           {/* Duplicate set of skills for seamless scrolling */}
//           <div className="flex">
//             {skills.map((skill, index) => (
//               <div key={`duplicate-${index}`} className="flex flex-col items-center mx-8">
//                 <div className="text-white text-6xl">{skill.icon}</div>
//                 <p className="mt-2 text-white text-sm font-semibold">{skill.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Add this to your global CSS or Tailwind CSS
// const style = `
//   @keyframes scroll {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-50%);
//     }
//   }

//   .animate-scroll {
//     animation: scroll 40s linear infinite;
//   }
// `;

// // Add the styles to the document
// if (typeof document !== 'undefined') {
//   const styleSheet = document.createElement('style');
//   styleSheet.textContent = style;
//   document.head.appendChild(styleSheet);
// }

// export default AllSkills;
import React from "react";
import {
  FaJava, FaPython, FaDatabase, FaHtml5, FaCss3, FaReact, 
  FaNodeJs, FaAngular, FaGithub, FaDocker, FaAws, FaLinux, FaGitAlt
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiSpringboot, SiTensorflow, SiScikitlearn, 
  SiPandas, SiNumpy, SiVercel, SiRender, SiGithubactions, SiKubernetes, 
  SiFlask, SiDjango, SiPostgresql, SiFastapi, SiGraphql, SiOpencv, SiPytorch, 
  SiKeras, SiJupyter, SiCplusplus
} from "react-icons/si";
import { TbBrain, TbRobot } from "react-icons/tb";

const skills = [
  { icon: <FaJava />, name: "Java" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaDatabase />, name: "SQL" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3 />, name: "CSS" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaAngular />, name: "Angular" },
  { icon: <SiSpringboot />, name: "Spring Boot" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiTensorflow />, name: "TensorFlow" },
  { icon: <SiScikitlearn />, name: "Scikit-learn" },
  { icon: <SiPandas />, name: "Pandas" },
  { icon: <SiNumpy />, name: "NumPy" },
  { icon: <TbBrain />, name: "Deep Learning" },
  { icon: <TbRobot />, name: "Machine Learning" },
  { icon: <SiPytorch />, name: "PyTorch" },
  { icon: <SiKeras />, name: "Keras" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiRender />, name: "Render" },
  { icon: <SiGithubactions />, name: "GitHub Actions" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <FaLinux />, name: "Linux" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <SiFlask />, name: "Flask" },
  { icon: <SiDjango />, name: "Django" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiFastapi />, name: "FastAPI" },
  { icon: <SiGraphql />, name: "GraphQL" },
  { icon: <SiOpencv />, name: "OpenCV" },
  { icon: <SiJupyter />, name: "Jupyter Notebook" },
  { icon: <SiCplusplus />, name: "C++" }
];

const AllSkills: React.FC = () => {
  return (
    <div id="AllSkills" className="text-white py-12 px-6">
      <h1 className="text-center text-6xl font-bold mb-8 text-white">Skills</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-1 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm font-semibold text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;