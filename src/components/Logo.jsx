import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "public/images/logo.png";

const Logo = () => {
  const MotionLink = motion(Link);
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        whileHover={{
          animate: { x: 500 },
          scale: 1.2,
          transition: { ease: "easeOut", duration: 1, repeat: Infinity },
        }}
      >
        <motion.div
          whileHover={{
            animate: { x: 500 },
            scale: 1.2,
            transition: { ease: "easeOut", duration: 1, repeat: Infinity },
          }}
          className="w-16 h-16 bg-dark text-light flex items-center justify-center text-2xl font-bold rounded-full dark:border dark:border-light"
        >
          <Image
            href="/"
            className="w-16 h-16 bg-dark text-light flex items-center justify-center  text-2xl font-bold rounded-full dark:border dark:border-light"
            src={logo}
            alt="my logo"
          ></Image>
        </motion.div>
      </MotionLink>
    </div>
  );
};

export default Logo;
