import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
          backgroundColor: [
            "#000",
            "#f9d5e5",
            "#ff6f69",
            "#ffeead",
            "#e06377",
            "#e06377",
            "#c83349",
          ],
        }}
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
      >
        FH
      </MotionLink>
    </div>
  );
};

export default Logo;
