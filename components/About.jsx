"use client";
import { motion } from "framer-motion";
import { MdCastForEducation } from "react-icons/md";

function About() {
  const aboutVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
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
    <section
      id="about"
      className="bg-white h-[60vh] lg:h-[40vh] max-w-7xl mx-auto w-full  dark:bg-gray-900 text-gray-800 dark:text-white flex items-center justify-center"
    >
      <motion.div
        className="text-gray-700 dark:text-gray-300 border dark:border-teal-400 rounded-xl flex flex-col items-center px-12 sm:px-16 md:px-24 py-8 my-8 pb-10 gap-y-4"
        variants={aboutVariants}
        initial="hidden"
        animate="visible"
      >
        <MdCastForEducation className="text-4xl" />
        <h1 className="text-xl font-semibold">Education</h1>
        <h2 className="text-lg font-medium">Masters in EEE (AIUB)</h2>
        <h2 className="text-lg font-medium">B.Sc. in EEE (UAP)</h2>
      </motion.div>
    </section>
  );
}

export default About;
