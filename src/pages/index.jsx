import Image from "next/image";
import picture from "../../public/images/profile.jpg";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to My Portfolio!</title>
      </Head>
      <main className="flex justify-start items-center min-h-full  pt-[7rem] dark:bg-dark dark:text-white">
        <div className="flex justify-center w-[40%]">
          <Image
            src={picture}
            alt="Farzaneh's image"
            className="w-80 rounded-[50%] border border-black"
          />
        </div>
        <div className="w-[50%] flex flex-col items-center self-center text-base font-medium text-justify">
          <AnimatedText text="Full Stack Software Developer" />
          <p className="mt-10">
            I am Farzaneh, a lifelong learner with a passion for coding and
            strong problem-solving with a solid background in computer
            engineering. I bring hands-on experience in developing web pages
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
            impactful solutions!
          </p>
        </div>
      </main>
    </>
  );
}
