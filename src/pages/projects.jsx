import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import bookMe from "public/images/bookMe.png";
import star from "public/images/star.png";
import cafeMenu from "public/images/cafeMenu.png";
import video from "public/images/video.png";
import candyCrush from "public/images/candyCrush.png";
import eShop from "public/images/eShop.png";

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
      </Head>
      <main className="flex flex-col justify-start items-center min-h-full p-[7rem]">
        <div>
          <AnimatedText text="My Projects Gallery" />
        </div>
        <div className="grid grid-cols-12 grid-24 gap-20 mt-10">
          <div className="col-span-4">
            <ProjectCard
              link="https://star-cyf-client.onrender.com/"
              github="https://github.com/fazbazjaz/star"
              title="Star"
              img={star}
              summary="This is a Full Stack App for CodeYourfuture Trainee, collaboratively developed by a team."
            />
          </div>
          <div className="col-span-4">
            <ProjectCard
              link="https://starter-kit-all6.onrender.com"
              github="https://github.com/karleenmsrichards/final-project-gp2"
              title="BookMe"
              img={bookMe}
              summary="This is a Full Stack App for business bookings, collaboratively developed by a team. Discover experts, arrange appointments with Google Calendar integration and Google Authentication (OAuth), manage data using Sequelize. The user-friendly interface, built on React and Express, is enhanced by the sleek design of Material UI, ensuring a smooth and visually pleasing booking experience."
            />
          </div>
          <div className="col-span-4">
            <ProjectCard
              link="https://teamwork-cafe-menu.netlify.app"
              github="https://github.com/farzaneh-haghani/Teamwork-Cafe-Menu"
              title="CafeMenu"
              img={cafeMenu}
              summary="This is a full stack app with an admin panel for menu management, including additions, edits, deletions, and efficient search. Developed collaboratively by a team using React, Express, PostgreSQL, and Tailwind CSS, it ensures straightforward cafe offering management."
            />
          </div>
          <div className="col-span-4">
            <ProjectCard
              link="https://farzaneh-haghani-video-recommendation.netlify.app"
              github="https://github.com/farzaneh-haghani/Full-Stack-Project-Assessment"
              title="Video Recommendation"
              img={video}
              summary="A full stack app built with React, Express, PostgreSQL, and Material UI. Easily share YouTube video links, rate them with likes or dislikes, and sort by ascending or descending order. The app also offers efficient video search functionality for a comprehensive user experience."
            />
          </div>
          <div className="col-span-4">
            <ProjectCard
              link="https://teamwork-candycrush.netlify.app"
              github="https://github.com/Farnooshmo/teamwork-candy-crush-react"
              title="Candy Crush"
              img={candyCrush}
              summary="A delightful game, crafted for desktop play by a collaborative team. Developed using React and basic CSS, it provides an enjoyable gaming experience on your desktop, invoking memories of the classic Candy Crush and ensuring hours of entertainment and challenge."
            />
          </div>
          <div className="col-span-4">
            <ProjectCard
              link="https://london9-amazon-clone-50-react-project.netlify.app"
              github="https://github.com/farzaneh-haghani/Teamwork-eShop"
              title="eShop"
              img={eShop}
              summary="A collaborative effort brings you a responsive React app integrated with Firebase for authentication. Easily add and remove items from your basket, enhancing your shopping experience."
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default projects;
