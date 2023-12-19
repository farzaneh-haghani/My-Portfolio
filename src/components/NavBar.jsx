"client side";
import Logo from "./Logo";
import Link from "next/link";
import HomeLink from "./HomeLink";
import {
  GitHubIcons,
  LinkedinIcons,
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
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <nav>
        <HomeLink title="Home" href="/" className="mr-8" />
        <HomeLink title="Projects" href="/projects" className="mr-8" />
      </nav>

      <div className="absolute left-[50%] translate-x-[-50%] top-2">
        <Logo />
      </div>

      <nav className="flex items-center justify-center flex-wrap">
        <MotionLink
          whileHover={{ y: -5, scale: 1.1 }}
          href="https://www.linkedin.com/in/farzaneh-haghani/"
          target="_blank"
        >
          <LinkedinIcons />
        </MotionLink>

        <MotionLink
          whileHover={{ y: -5, scale: 1.1 }}
          href="https://github.com/farzaneh-haghani"
          target="_blank"
        >
          <GitHubIcons />
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
          className="ml-3 flex items-center justify-center rounded-full p-1"
        >
          {mode === "dark" ? <SunIcon /> : <MoonIcon className={"fill-dark"} />}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
