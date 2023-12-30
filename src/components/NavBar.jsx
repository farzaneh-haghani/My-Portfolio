"client side";
import Logo from "./Logo";
import Link from "next/link";
import HomeLink from "./HomeLink";
import {
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  const MotionLink = motion(Link);

  return (
    <header className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 font-medium flex justify-between items-start dark:text-light">
      <nav className="flex flex-col sm:flex-row">
        <HomeLink title="Home" href="/" className="mr-8" />
        <HomeLink title="Projects" href="/projects" className="mr-8" />
      </nav>

      <div className="absolute left-[50%] translate-x-[-50%] top-2">
        <Logo />
      </div>

      <nav className="md:flex items-center justify-center flex-wrap">
        <MotionLink
          whileHover={{ y: -5, scale: 1.1 }}
          href="https://www.linkedin.com/in/farzaneh-haghani/"
          target="_blank"
        >
          <LinkedinIcon />
        </MotionLink>

        <MotionLink
          whileHover={{ y: -5, scale: 1.1 }}
          href="https://github.com/farzaneh-haghani"
          target="_blank"
        >
          <GitHubIcon />
        </MotionLink>

        <MotionLink
          whileHover={{ y: -5, scale: 1.1 }}
          href="https://twitter.com/FarzanehHaghani"
          target="_blank"
        >
          <TwitterIcon />
        </MotionLink>
        <button
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          className="flex items-center justify-center rounded-full hover:-translate-y-1 hover:scale-110"
        >
          {mode === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
