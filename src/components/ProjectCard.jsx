import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GitHubIcons } from "./Icons";

const ProjectCard = ({ link, title, summary, img, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark shadow-2xl">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-red-600 font-bold text-xl">{title}</span>
        <Link href={link} target="_blank">
          <p className="text-xs">{summary}</p>
        </Link>
        <Link href={github} target="_blank">
          <h2>
            <GitHubIcons />
          </h2>
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
