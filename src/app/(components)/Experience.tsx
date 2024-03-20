"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import ExperienceDetails from "./ExperienceDetails";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
    layoutEffect: false,
  });

  return (
    <div className="my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <ExperienceDetails
            position="Full Stack Developer"
            company="Iyrix Tech"
            companyLink="https://iyrix.com/"
            time="Nov 2020-Present"
            address="Remote"
            work="Designed and implemented scalable and efficient application architectures, leveraging best practices and
            design patterns to ensure maintainability and performance"
          />
          <ExperienceDetails
            position="Full Stack Developer Intership"
            company="Iyrix Tech"
            companyLink="https://iyrix.com/"
            time="July 2020-Oct 2020"
            address="Remote"
            work="Developed practical skills in building web applications using the MERN (MongoDB, Express.js, React.js,
              Node.js) stack, gaining proficiency in front-end and back-end development."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
