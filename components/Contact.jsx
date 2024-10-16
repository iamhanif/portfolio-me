"use client";
import { motion } from "framer-motion";

const Contact = () => {
  const fields = [
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "subject", label: "Subject" },
    { id: "message", label: "Message", isTextarea: true },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="contact"
      className="h-[70vh] w-full my-16 py-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100  flex items-center justify-center"
    >
      <div className="max-w-md mx-auto px-6 bg-transparent">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="text-3xl font-bold  text-gray-800 dark:text-teal-400 text-center pt-8 mb-4"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
          className="text-gray-900 dark:text-gray-100 text-center mb-6"
        >
          We’d love to hear from you! Please fill out the form below.
        </motion.p>
        <motion.form
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
        >
          {fields.map((field) => (
            <motion.div key={field.id} variants={itemVariants} className="mb-4">
              <label
                htmlFor={field.id}
                className="block text-gray-500 dark:text-gray-200 mb-1"
              >
                {field.label}
              </label>
              {field.isTextarea ? (
                <textarea
                  id={field.id}
                  name={field.id}
                  required
                  rows="4"
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition duration-300 focus:outline-none"
                ></textarea>
              ) : (
                <input
                  type={
                    field.id === "email"
                      ? "email"
                      : field.id === "phone"
                      ? "tel"
                      : "text"
                  }
                  id={field.id}
                  name={field.id}
                  required
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition duration-300 focus:outline-none "
                />
              )}
            </motion.div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#2c7a7f" }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-500 transition duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
