import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/logo.png";

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
        <Image
          href="/"
          whileHover={{
            animate: { x: 500 },
            scale: 1.2,
            transition: { ease: "easeOut", duration: 1, repeat: Infinity },
          }}
          className="w-16 h-16 bg-dark text-light flex items-center justify-center  text-2xl font-bold rounded-full"
          src={logo}
          alt="my logo"
        ></Image>
      </MotionLink>
    </div>
  );
};

export default Logo;
