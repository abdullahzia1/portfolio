"use client";

import Subtitle from "../../subtitle";
import ProfPic from "./profpic";

const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="items-center justify-center w-full flex flex-col gap-12"
    >
      <Subtitle text="ABOUT ME" />
      <div className="flex flex-row gap-12 justify-between w-full items-center">
        <div className="hidden lg:flex min-w-[256px] min-h-[256px]">
          <ProfPic />
        </div>
        <div className="text-left flex flex-col gap-3">
          <h2 className="font-bold text-3xl">
            Enthusiastic problem-solver dedicated to web development
          </h2>
          <p>
            Over the past year, I&apos;ve delved deep into web development,
            crafting full-stack applications with React and TypeScript for
            Express.js servers. I&apos;ve also familiarized myself with GitHub
            Actions.
          </p>
          <p>
            While I find front-end development particularly captivating, I
            understand the importance of a robust back-end. I&apos;ve dedicated
            time to building user authentication protocols, RESTful APIs, and
            database management.
          </p>
          <p>
            As a computer science enthusiast, I&apos;m continuously expanding my
            skills and knowledge, eager to contribute to innovative projects and
            collaborate with diverse teams. I&apos;m committed to my journey in
            web development and excited about the opportunities ahead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
