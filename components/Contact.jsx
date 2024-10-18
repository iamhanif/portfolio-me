"use client";
import { motion } from "framer-motion";
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";

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
      className="h-[40vh] w-full md:my-16 md:py-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center"
    >
      <div className="max-w-md mx-auto px-6 bg-transparent">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
          className="text-gray-900 dark:text-gray-100 text-center pt-8"
        >
          Get in Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="text-3xl font-bold  text-gray-800 dark:text-neutral-50 text-center mb-4"
        >
          Contact Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
          className="text-gray-900 dark:text-gray-100 text-center pt-8"
        >
          <div className="text-xl text-gray-900 dark:text-gray-100 flex items-center justify-between gap-8 py-1">
            <SiGmail /> <p>iamhanif101@gmail.com</p>
          </div>
          <div className="text-xl text-gray-900 dark:text-gray-100 flex items-center justify-between gap-8 py-1">
            <SiWhatsapp /> <p>+88 01607 150 462</p>
          </div>
          <div className="text-xl text-gray-900 dark:text-gray-100 flex items-center justify-between gap-8 py-1">
            <SiLinkedin />{" "}
            <a
              href="www.linkedin.com/in/iamhanif"
              target="_blank"
              className="hover:bg-neutral-50 dark:hover:bg-gray-800 px-4 rounded-md"
            >
              www.linkedin.com
            </a>
          </div>
          <div className="text-xl text-gray-900 dark:text-gray-100 flex items-center justify-between gap-8 py-1">
            <IoLocationSharp className="text-2xl" />
            <p>Dhaka, Bangladesh</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
