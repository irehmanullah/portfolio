import Link from "next/link";
import Image from "next/image";

import { LinkArrow } from "./(components)/Icons";
import AnimatedText from "./(components)/AnimatedText";
import profilePic from "../../public/profile_pic.png";

export const metadata = {
  title: "Rehman Ullah - Home",
  description:
    "Explore Rehman Ullah's Next.js developer portfolio and discover the latest webapp projects and software engineering articles. Showcase your skills as a frontend developer and software engineer.",
};

export default function Home() {
  return (
    <>
      <div className="flex items-center text-dark justify-between w-full pt-0 md:pt-16 sm:pt-8 lg:flex-col dark:text-light">
        <div className="w-1/3 md:w-full">
          <Image
            src={profilePic}
            alt="Rehman Ullah"
            className="w-full h-auto lg:hidden md:inline-block md:w-full"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
        <div className="w-3/5 flex flex-col items-center self-center lg:w-full lg:text-center ">
          <AnimatedText
            text="Elevating Ideas Through Code Mastery"
            className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />
          <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
            As a seasoned Full Stack Developer, I specialize in creating
            cutting-edge web applications. Explore my portfolio and articles to
            see my expertise in React.js, Node.js and web development. Stay
            informed about the latest trends.
          </p>
          <div className="flex items-center self-start mt-2 lg:self-center">
            <Link
              href="/rehmanullah_ullah_resume.pdf"
              target="_blank"
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
            >
              Resume
              <LinkArrow className="!w-6 ml-1 md:!w-4" />
            </Link>
            <Link
              href="https://calendly.com/irehmanullah/30min"
              target="_blank"
              className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
