import Image from "next/image";
import picture from "public/images/profile.jpg";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Link from "next/link";
import { DownloadIcon, MailIcon } from "../components/Icons";
import { useState } from "react";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <main className="flex justify-start items-center pt-[5rem] dark:bg-dark dark:text-slate-200">
        <div className="flex justify-center w-[40%]">
          <Image
            src={picture}
            alt="Farzaneh's image"
            className="w-80 rounded-[50%] border border-black"
            priority
          />
        </div>
        <div className="w-[50%] flex flex-col items-center self-center text-base font-medium text-justify">
          <AnimatedText text="Full Stack Software Developer" />
          <p className="mt-10">
            I am Farzaneh, a lifelong learner with a passion for coding and
            strong problem-solving with a solid background in Computer Hardware
            Engineering. I bring hands-on experience in developing web pages
            using an adaptable stack, including Node, Express, Drizzle,
            Sequelize, PostgreSQL, React, and JavaScript.
          </p>
          <p className="mt-4">
            In my journey, I&apos;ve actively contributed to collaborative
            teams, creating innovative and user-friendly solutions. I thrive in
            dynamic environments, eagerly seeking opportunities to tackle
            challenging projects and enhance my software development skills. My
            self-motivated and excellent interpersonal skills, allows me to
            excel in both team-based and individual work settings.
          </p>
          <p className="mt-4">
            I am adaptable and flexible, always eager to learn and contribute
            effectively to the success of any project. Please explore my
            portfolio to discover specific projects that showcase my
            capabilities. I am excited to bring my skills and collaborative
            mindset to new opportunities.
          </p>
          <p className="mt-4 font-bold">
            Let&apos;s connect and explore how we can work together to create
            impactful solutions!<span className="text-2xl"> 🚀</span>
          </p>
          <div className="flex items-center justify-between mt-10 w-1/3">
            <Link
              onClick={() => setIsClicked(true)}
              href="/FarzanehCV.pdf"
              target="_blank"
              download={true}
              className="flex items-center bg-dark pt-4 pb-2 px-8 rounded-xl text-xl font-extrabold dark:border dark:border-light"
            >
              <span className="text-red-600">C</span>
              <span className="text-gray-200">V</span>
              <span className={!isClicked ? "animate-bounce" : ""}>
                <DownloadIcon />
              </span>
            </Link>
            <Link
              href="mailto:farzaneh.haghani@gmail.com"
              target="_blank"
              className="flex items-center pt-4 pb-2 px-10 bg-dark text-light rounded-xl text-xl font-extrabold dark:border dark:border-light"
            >
              <MailIcon />
            </Link>
          </div>
          {isClicked && (
            <p className="text-green-600 mt-5">
              Thank you for downloading my CV! You can find it in your download
              directory.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
