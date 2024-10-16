import Link from "next/link";
import { FaHome } from "react-icons/fa";
import NavLink from "./NavLink";
import ToggleButton from "./ui/ToggleButton";

const Navbar = () => {
  return (
    <nav className="top-0 fixed z-10 mx-auto bg-neutral-50 text-gray-800 dark:text-teal-400 dark:bg-gray-900 w-full justify-around gap-5 px-6 py-4 shadow-lg flex flex-row items-center">
      <div className="flex items-center gap-5">
        <Link href="/">
          <FaHome size={30} color="#84cc16" />
          {/* <Image
            alt="logo"
            height={100}
            width={50}
            src={logo}
            className="text-white dark:text-teal-500 h-10 w-auto rounded-lg opacity-50"
          /> */}
        </Link>

        <ToggleButton />
      </div>

      <NavLink />
    </nav>
  );
};

export default Navbar;
