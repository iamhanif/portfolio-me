"use client";
import proPic from "@/public/images/hanif.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeroSection = () => {
  const headingVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0, transition: { duration: 0.7 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.3, staggerChildren: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.5 },
    },
  };

  return (
    <div
      id="about"
      className="relative h-[80vh] w-full p-6 md:p-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-500"
    >
      <div className="flex max-w-7xl h-full mx-auto flex-col md:flex-row items-center justify-center p-6 md:p-12">
        <div className="w-full md:w-1/2 text-center space-y-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="text-5xl md:text-6xl font-bold uppercase text-gray-800 dark:text-teal-400"
          >
            Md Hanif
          </motion.h1>

          <motion.h3
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="text-xl md:text-2xl font-medium uppercase text-gray-800 dark:text-teal-400"
          >
            Frontend Developer
          </motion.h3>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
            className="text-2xl md:text-3xl leading-relaxed text-gray-700 dark:text-gray-300 flex gap-4 items-center justify-center"
          >
            <a
              href="https://github.com/iamhanif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/iamhanif/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/iamhanif/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode />
            </a>
          </motion.p>

          {/* <a href="/assets/resume.pdf" download="resume.pdf">
            Download Resume
          </a> */}

          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
            className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
          >
            ...a passionate developer with a love for creating beautiful,
            functional web applications. Let's build something amazing together.
          </motion.p>

          <button className="border border-black rounded-3xl px-4 py-2 font-bold text-xl">
            Download Resume
          </button>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <Image
            src={proPic}
            alt="Hero Image"
            width={300}
            height={300}
            className="bg-transparent shadow-lg bg-none rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
