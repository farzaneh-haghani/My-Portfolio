import Image from "next/image"
import picture from "../../public/profile.jpg"
import AnimatedText from "@/components/AnimatedText"

export default function Home() {
  return (
    <main>
      <div className="flex items-center text-dark min-h-screen w-full">
        <div className="flex items-start justify-between w-full pt-0 h-full z-0 bg-light">
          <div className="w-[50%] px-10">
            <Image src={picture} alt="Farzaneh's image" className="w-full h-auto rounded-t-[50%]" />
          </div>
          <div className="w-[50%] flex flex-col items-center self-center">
            <AnimatedText text="a junior Full Stack Developer" />
            <p className="my-4 text-base font-medium pr-20 text-justify">I possess hands-on experience in developing web pages using a variety of technologies.
              I am passionate about coding and enjoy collaborating with a team to create innovative and user-friendly solutions.
              My self-motivated and driven nature has enabled me to excel in various work fields, and I pride myself on being adaptable, flexible, and possessing excellent interpersonal and problem-solving skills.
              Whether working in a team or individually, I thrive in a fast-paced environment and remain calm under pressure.
              My past experiences have instilled in me a strong work ethic and time management skills, and I am always eager to learn and grow.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
