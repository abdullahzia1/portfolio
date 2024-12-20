/* eslint-disable react/no-unescaped-entities */
"use client";

import { RxGithubLogo } from "react-icons/rx";
import { VscGlobe } from "react-icons/vsc";

import { Button } from "@/components/ui/button";
import { Project } from "@/types";

import ContactButton from "../navbar/contact";

interface ProjectLearnMoreProps {
  project: Project;
}

const ProjectLearnMore = ({ project }: ProjectLearnMoreProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between min-h-48 items-center gradient-background animate-gradientBackground rounded-xl px-16 w-full backdrop-blur-lg gap-4">
      <div className="text-white text-center lg:text-left">
        {project.id === "cheezbaich.com" ? (
          <>
            <h3 className="text-base sm:text-xl font-normal sm:font-bold">
              Unfortunately the source code is private.
            </h3>
            <p className="hidden sm:block">
              I'll still be happy to answer any questions you might have!
            </p>
          </>
        ) : (
          <>
            <h3 className="text-base sm:text-xl font-normal sm:font-bold">
              Want to learn more about this project?
            </h3>
            <p className="hidden sm:block">
              Check the source code and read the full documentation on GitHub!
            </p>
          </>
        )}
      </div>
      <div>
        {project.id === "cheezbaich.com" ? (
          <ContactButton btnTxt="Contact me fore more info" />
        ) : (
          <a
            href={`https://github.com/abdullahzia1/${project.id}`}
            target="_blank"
          >
            <Button className="items-center gap-2 text-md w-full text-black bg-white hover:bg-white/80">
              <RxGithubLogo className="w-5 h-5" />
              <p>Check the GitHub repo</p>
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectLearnMore;
