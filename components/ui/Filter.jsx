"use client";
import { motion } from "framer-motion";

const Filter = ({ selectedTag, setSelectedTag, tags }) => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      {/* Create a filter item for each tag */}
      {tags.map((tag) => (
        <motion.div
          key={tag}
          className={`px-4 py-2 rounded-lg cursor-pointer ${
            selectedTag === tag
              ? "bg-lime-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-800"
          } transition-colors duration-300 hover:bg-lime-400 hover:text-white`}
          onClick={() => setSelectedTag(tag)}
          whileHover={{ scale: 1.05 }} // Scale effect on hover
          whileTap={{ scale: 0.95 }} // Scale effect on tap
          transition={{ duration: 0.2 }} // Transition duration
        >
          {tag}
        </motion.div>
      ))}
      {/* Add a 'Show All' filter item */}
      <motion.div
        className={`px-4 py-2 rounded-lg cursor-pointer ${
          selectedTag === "All"
            ? "bg-lime-500 text-white"
            : "bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-800"
        } transition-colors duration-300 hover:bg-lime-400 hover:text-white`}
        onClick={() => setSelectedTag("All")}
        whileHover={{ scale: 1.05 }} // Scale effect on hover
        whileTap={{ scale: 0.95 }} // Scale effect on tap
        transition={{ duration: 0.2 }} // Transition duration
      >
        Show All
      </motion.div>
    </div>
  );
};

export default Filter;
