import Image from "next/image";
import Link from "next/link";
import { Deploy, GitHubIcon } from "./Icons";

const ProjectCard = ({
  type,
  link,
  title,
  businessProblem,
  summary,
  skills,
  img,
  app,
  github,
}) => {
  return (
    <div className="relative transform-style-3d transition-all ease-out duration-1000 hover:rotate-y-180 w-full moz-backface-hidden">
      <article className="backface-hidden h-full flex flex-col content-between rounded-3xl border dark:border-gray-600  shadow-slate-500 shadow-xl p-10 dark:text-slate-200 bg-neutral-100 dark:bg-neutral-900">
        <div className="mb-5 flex justify-between font-bold">
          <h2 className="text-2xl text-red-600">{title}</h2>
          <span className="mt-1">{type}</span>
        </div>
        <Image src={img} alt={title} className="border h-64" priority />
        <p className="font-bold mt-1 text-center">{app}</p>
      </article>

      <article
        className="absolute top-0 backface-hidden rotate-y-180 rounded-3xl h-full w-full flex flex-col justify-evenly 
      border dark:border-gray-600 shadow-slate-500 shadow-xl p-2 sm:p-4 dark:text-slate-200"
      >
        <p className="text-justify">
          <b>{businessProblem ? "Business Problem: " : "Summary: "}</b>
          {businessProblem ? businessProblem : summary}
        </p>
        <div className="flex flex-wrap">
          {skills.split("-").map((skill, index) => (
            <span
              key={index}
              className="bg-gray-300 dark:text-dark m-1 rounded-xl px-3"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex justify-evenly">
          <Link href={github} target="_blank">
            <GitHubIcon />
          </Link>
          <Link href={link} target="_blank">
            <Deploy />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
