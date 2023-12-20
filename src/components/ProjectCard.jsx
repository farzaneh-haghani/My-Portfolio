import Image from "next/image";
import Link from "next/link";
import { GitHubIcon } from "./Icons";

const ProjectCard = ({ link, title, summary, img, github }) => {
  return (
    <article
      className="h-full flex-col items-center justify-between rounded-3xl 
      border dark:border-gray-600 border-gray-200  shadow-slate-500 shadow-xl p-10 hover:scale-95 duration-300"
    >
      <div>
        <Image src={img} alt={title} className="h-52 border" />
      </div>
      <h2 className=" my-3 text-red-600 font-bold text-3xl">{title}</h2>
      <p className="text-base text-justify h-56 dark:text-slate-200">
        {summary}
      </p>
      <div className="mt-3 flex justify-between">
        <Link href={github} target="_blank">
          <GitHubIcon />
        </Link>
        <Link
          href={link}
          target="_blank"
          className="rounded-lg bg-dark text-light py-2 px-6 text-lg font-semibold  border border-gray-400"
        >
          Visit Project
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
