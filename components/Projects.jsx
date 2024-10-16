"use client";

import projects from "@/data/project";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  const tags = [
    "All",
    "TypeScript",
    "Next.js",
    "React",
    "Fullstack",
    "JavaScript",
  ];

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
    <section className="bg-white w-full dark:bg-gray-900 min-h-screen">
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
                ? "bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 text-white shadow-lg scale-100"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm"
            }`}
            onClick={() => handleFilter(tag)}
          >
            <span className="relative z-10">{tag}</span>
            <div
              className={`absolute inset-0 z-0 bg-gradient-to-r from-lime-400 to-lime-600 transition-all duration-500 transform ${
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Link
              href={`/project/${project.title}`}
              key={project.id}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <div className="group">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full border dark:border-lime-400 h-full object-cover transition-opacity duration-300 hover:opacity-75"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={200}
                    className="w-full border dark:border-lime-400 h-full object-cover transition-opacity duration-300 hover:opacity-75"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold text-white">
                    {project.name}
                  </h4>
                </div>
              </div>
            </Link>
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
