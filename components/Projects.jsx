"use client";

import projects from "@/data/project";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  const tags = ["All", "JavaScript", "React", "Next.js", "MERN", "Fullstack"];

  const handleFilter = (tag) => {
    setSelectedTag(tag);
    if (tag === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) => project.tags.includes(tag));
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="bg-white w-full dark:bg-gray-900 min-h-screen m-10 p-24">
      {/* Page Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-teal-400 mb-12">
        Project Showcase
      </h2>

      {/* Filter Options */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`relative px-6 py-2 rounded-md text-sm md:text-base font-medium transition-all duration-500 transform overflow-hidden ${
              selectedTag === tag
                ? "bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-white shadow-lg scale-100"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm"
            }`}
            onClick={() => handleFilter(tag)}
          >
            <span className="relative z-10">{tag}</span>
            <div
              className={`absolute inset-0 z-0 bg-gradient-to-r from-sky-400 to-sky-600 transition-all duration-500 transform ${
                selectedTag === tag
                  ? "left-0 right-0"
                  : "left-full -translate-x-full"
              }`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                transition: "transform 0.5s ease-in-out",
              }}
            />
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 rounded-lg">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="h-[66vh]  rounded-lg pb-4 ">
              <Link
                href={`/project/${project.title}`}
                className="relative group overflow-hidden shadow-lg cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={200}
                  height={200}
                  className="w-full sm:w-4/5 md:w-full mx-auto rounded-lg dark:border-sky-400 h-4/5 object-cover transition-opacity duration-300 hover:opacity-75"
                />

                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold text-white">
                    {project.name}
                  </h4>
                </div>
              </Link>
              <h1 className="font-bold text-3xl text-center mt-2 lg:mt-5 ">
                {project.title}
              </h1>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex justify-center gap-8 space-x-4 mt-5 "
              >
                {project.github && (
                  <Link
                    href={project.github}
                    className="text-black hover:text-black transition w-auto dark:text-white flex items-center"
                    target="_blank"
                  >
                    <FaGithub className="h-8 w-8" />
                  </Link>
                )}
                {/* Live Project Link */}
                {project.link && (
                  <Link
                    href={project.link}
                    className="text-lime-700 hover:text-lime-800 w-auto flex items-center"
                    target="_blank"
                  >
                    <FaExternalLinkAlt className=" h-8 w-8" />
                  </Link>
                )}
              </motion.div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300 col-span-2">
            No projects found for {selectedTag} tag.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
