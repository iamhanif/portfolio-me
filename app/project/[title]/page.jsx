"use client";

import projects from "@/data/project";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { FaArrowCircleLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const CaseStudy = () => {
  const { title } = useParams();
  const project = projects.find((proj) => proj.title === title);
  const controls = useAnimation();
  const { scrollY } = useViewportScroll();

  const otherProjects = projects.filter((proj) => proj.title !== title);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      const grayscaleValue = Math.min(100, (latest / 500) * 100);
      controls.start({
        filter: `grayscale(${grayscaleValue}%)`,
        transition: { duration: 0.3 },
      });
    });

    return () => {
      unsubscribe();
    };
  }, [scrollY, controls]);

  if (!project) {
    return (
      <div className="text-center py-24">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          Project Not Found
        </h1>
        <Link
          href="/project"
          className="text-sky-500 hover:text-sky-600 underline"
        >
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-white scroll-smooth mt-[-32px] dark:bg-gray-900 min-h-screen">
      <div className="flex max-w-7xl scroll-smooth mx-auto flex-col md:flex-row bg-white px-8 py-16 mt-20 gap-5 dark:bg-gray-900">
        {/* Main Content: Project Details */}
        <div className="w-full md:w-4/6 px-4">
          <Link
            href="/project"
            className="text-gray-800 dark:text-sky-400 mb-4 inline-block"
          >
            <FaArrowCircleLeft className="inline mr-2" />
            Back to Projects
          </Link>
          <h2 className="text-lg md:text-4xl font-semibold text-center text-gray-800 dark:text-sky-400 mb-8">
            Details about {project.name}
          </h2>

          <motion.div
            animate={controls}
            className="mx-auto mb-8 hover:opacity-100 cursor-pointer transition-opacity duration-300 border dark:border-sky-400 rounded-lg p-2 md:p-16 shadow-lg opacity-95"
            initial={{ filter: "grayscale(100%)" }}
            whileHover={{ filter: "grayscale(0%)" }}
          >
            <Image
              src={project.image}
              alt={project.name}
              width={900}
              height={600}
              className="w-full h-fit  md:h-[500px]  rounded-lg object-cover"
            />
          </motion.div>

          {/* Project Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-4"
            >
              {project.description}
            </motion.p>

            {/* Technologies Used */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-sky-400 mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-sky-400 mb-4">
                Features
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </motion.div>

            {/* External Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center h-14 space-x-4 mt-8"
            >
              {/* GitHub Link */}
              {project.github && (
                <Link
                  href={project.github}
                  className="text-black hover:text-black transition h-14 w-auto dark:text-white flex items-center"
                  target="_blank"
                >
                  <FaGithub className="mr-2 h-8 w-8" />
                </Link>
              )}
              {/* Live Project Link */}
              {project.link && (
                <Link
                  href={project.link}
                  className="text-sky-700 hover:text-sky-800 h-14 w-auto flex items-center"
                  target="_blank"
                >
                  <FaExternalLinkAlt className="mr-2 h-8 w-8" />
                </Link>
              )}
            </motion.div>
          </div>
        </div>

        {/* Sidebar with Other Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-2/6 mt-16 md:mt-0 px-4 py-8 md:py-24 sticky top-16 md:top-24 h-screen overflow-auto"
        >
          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-sky-400 mb-8">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {otherProjects.map((proj) => (
              <div
                key={proj.id}
                className="block group relative cursor-pointer overflow-hidden border dark:border-sky-400 h-48 rounded-lg shadow-lg"
              >
                <Link href={`/project/${proj.title}`} passHref>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={proj.image}
                      alt={proj.name}
                      width={300}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 rounded-lg bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <h4 className="text-lg font-semibold text-white">
                      {proj.name}
                    </h4>
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
