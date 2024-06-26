"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import EducationDetails from "./EducationDetails";

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
    layoutEffect: false,
  });

  return (
    <div className="w-full">
      <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <EducationDetails
            type="Bachelor Of Software Engineering"
            time="2016-2020"
            place="University of Gujrat"
            info="Acquired in-depth knowledge of computer science concepts, including programming, algorithms, data structures, and software engineering. Developed strong problem-solving and analytical skills through rigorous coursework and hands-on projects"
          />
          <EducationDetails
            type="Board of Intermediate Education"
            time="2014-2016"
            place="SIIT College"
            info="Science-focused program emphasizing physics, chemistry, and mathematics. Developed strong analytical skills through problem-solving and practical experiments."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
