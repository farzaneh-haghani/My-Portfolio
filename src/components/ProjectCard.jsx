import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GitHubIcons } from "./Icons";

const ProjectCard = ({ link, title, summary, img, github }) => {
  return (
    <article
      className="h-full flex-col items-center justify-between rounded-3xl 
      border-gray-200 shadow-slate-500 shadow-2xl p-10 hover:scale-95 duration-300"
    >
      <div>
        <Image src={img} alt={title} className="h-52" />
      </div>
      <h2 className=" my-3 text-red-600 font-bold text-3xl">{title}</h2>
      <p className="text-base text-justify h-56">{summary}</p>
      <div className="mt-3 flex justify-between">
        <Link href={github} target="_blank">
          <GitHubIcons />
        </Link>
        <Link
          href={link}
          target="_blank"
          className="rounded-lg bg-dark text-light py-2 px-6 text-lg font-semibold"
        >
          Visit Project
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
