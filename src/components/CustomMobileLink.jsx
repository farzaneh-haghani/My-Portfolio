import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const CustomLink = ({ href, title, handleClick }) => {
  const router = useRouter();

  const handleRouter = () => {
    handleClick();
    router.push(href);
  };

  return (
    <button
      href={href}
      className="my-2 relative text-light dark:text-dark"
      onClick={handleRouter}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light dark:bg-dark
        absolute left-0 -bottom-1 group-hover:w-full 
        transition-[width] ease duration-300 
        ${router.asPath === href ? `w-full` : `w-0`}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default CustomLink;
