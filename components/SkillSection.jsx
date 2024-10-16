"use client";
import { motion } from "framer-motion";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiTailwindcss,
} from "react-icons/si";

const SkillsSection = () => {
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const skills = {
    skilled: [
      { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-600" /> },
      {
        name: "JavaScript",
        icon: <FaJs size={40} className="text-yellow-500" />,
      },
      { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },

      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={40} className="text-sky-500" />,
      },
    ],
    good: [
      {
        name: "Next.js",
        icon: <SiNextdotjs size={40} className="text-black dark:text-white" />,
      },
      {
        name: "Github",
        icon: <FaGithub size={40} className="text-info" />,
      },
      {
        name: "Express",
        icon: <SiExpress size={40} className="text-green-600" />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap size={40} className="text-info" />,
      },
      {
        name: "ChatGPT",
        icon: <SiOpenai size={40} className="text-info" />,
      },
    ],
    familiar: [
      {
        name: "Node.js",
        icon: <FaNodeJs size={40} className="text-green-600" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase size={40} className="text-orange-500" />,
      },
      {
        name: "Figma",
        icon: <SiFigma size={40} className="text-black dark:text-white" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={40} className="text-green-700" />,
      },
      {
        name: "Framer-motion",
        icon: <SiFramer size={40} className="text-black dark:text-white" />,
      },
    ],
  };

  return (
    <section
      id="skills"
      className="bg-white h-fit lg:h-[60vh] w-full my-24 dark:bg-gray-900 text-gray-800 dark:text-white flex items-center justify-center"
    >
      <div className="h-full w-full flex flex-col items-center justify-center mx-auto px-6">
        <h2 className="text-4xl text-gray-800 dark:text-teal-400 font-bold text-center mb-8">
          Skills
        </h2>

        {/* Skilled Section */}
        <div className="mb-8">
          <h3 className="text-2xl text-gray-700 dark:text-gray-300 font-semibold mb-4 text-center">
            Skilled
          </h3>
          <div className="flex flex-wrap justify-center">
            {skills.skilled.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="text-gray-700 dark:text-gray-300 border dark:border-teal-400 rounded-md flex items-center px-4 py-2 m-2"
                variants={skillVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <span className="sm:hidden">{skill.icon}</span>
                <span className="hidden sm:block text-lg font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Good Section */}
        <div className="mb-8">
          <h3 className="text-2xl text-gray-700 dark:text-gray-300 font-semibold mb-4 text-center">
            Good
          </h3>
          <div className="flex flex-wrap justify-center">
            {skills.good.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="text-gray-700 dark:text-gray-300 border dark:border-teal-400 rounded-md flex items-center px-4 py-2 m-2"
                variants={skillVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <span className="sm:hidden">{skill.icon}</span>
                <span className="hidden sm:block text-lg font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Familiar Section */}
        <div>
          <h3 className="text-2xl text-gray-700 dark:text-gray-300 font-semibold mb-4 text-center">
            Familiar
          </h3>
          <div className="flex flex-wrap justify-center">
            {skills.familiar.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="text-gray-700 dark:text-gray-300 border dark:border-teal-400 rounded-md flex items-center px-4 py-2 m-2"
                variants={skillVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <span className="sm:hidden">{skill.icon}</span>
                <span className="hidden sm:block text-lg font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
