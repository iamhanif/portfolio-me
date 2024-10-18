"use client";
import { motion } from "framer-motion";
import { MdCastForEducation } from "react-icons/md";

const page = () => {
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
      className="bg-white h-fit md:h-dvh mx-auto w-full md:py-36 dark:bg-gray-900 text-gray-800 dark:text-white flex items-center justify-center"
    >
      <div className="h-fit w-full flex flex-col items-center justify-center mx-auto md:px-6 px-1 pt-12">
        <h2 className="text-4xl text-gray-800 dark:text-teal-400 font-bold text-center my-8 pt-8">
          About Me
        </h2>

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

        <motion.p
          className="text-gray-700 dark:text-gray-300 w-full text-base md:text-lg leading-normal text-justify flex items-center px-4 pb-8 md:m-2"
          variants={aboutVariants}
          initial="hidden"
          animate="visible"
        >
          I am a passionate web developer with a background in Electrical and
          Electronic Engineering (EEE), holding a Master's from American
          International University - Bangladesh (AIUB) and a Bachelor's from
          University of Asia Pacific UAP. I specialize in building dynamic,
          user-centric web applications using React.js, JavaScript, HTML, and
          CSS. While I am still exploring Next.js with beginner-level projects,
          I am eager to expand my skills and deepen my expertise in full-stack
          development. My transition from EEE to web development showcases my
          adaptability, problem-solving mindset, and continuous drive for
          learning. I am committed to delivering high-quality solutions and
          thriving in fast-paced tech environments, always bringing a fresh
          perspective to each new challenge.
        </motion.p>
      </div>
    </section>
  );
};

export default page;
