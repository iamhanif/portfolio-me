"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // To get the current path
import { FaEnvelope, FaProjectDiagram, FaTools } from "react-icons/fa"; // Importing icons
import { SiAboutdotme } from "react-icons/si";

const NavLink = () => {
  const pathname = usePathname(); // Get the current route

  const navLinks = [
    { href: "/about", label: "About", icon: SiAboutdotme, id: "about" },
    { href: "/skills", label: "Skills", icon: FaTools, id: "skills" },
    {
      href: "/project",
      label: "Projects",
      icon: FaProjectDiagram,
      id: "projects",
    },
    { href: "/contact", label: "Contact", icon: FaEnvelope, id: "contact" },
  ];

  return (
    <div className="flex items-center gap-4">
      {navLinks.map((link) => {
        const Label = link.label;
        const Icon = link.icon;
        const isActive = pathname === link.href; // Check if the link is active
        return (
          <Link
            key={link.href}
            href={link.href}
            id={link.id} // Assigning a unique id to each link
            className={`flex gap-2 text-2xl font-medium transition-colors duration-300 ${
              isActive
                ? "text-lime-500 dark:text-lime-400"
                : "text-gray-700 hover:text-lime-400 hover:underline  dark:text-white dark:hover:text-lime-400"
            }`}
          >
            <h2 className="text-2xl py-2 hidden sm:block">{Label}</h2>

            <Icon className="sm:hidden text-2xl" />
            {/* Display the icon */}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLink;
