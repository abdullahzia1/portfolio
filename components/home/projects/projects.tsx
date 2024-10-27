/* eslint-disable react/no-unescaped-entities */
"use client";

import ProjectPanel from "@/components/project/projectpanel/projectpanel";
import Subtitle from "@/components/subtitle";
import { Button } from "@/components/ui/button";
import PROJECTS from "@/constants/projects/projects";

const Projects = () => {
  const modifiedProjects = PROJECTS.map((project) => ({
    ...project,
    description: project.about,
  }));
  const firstFour = modifiedProjects.slice(0, 4);

  return (
    <div
      id="projects"
      className="items-center justify-center w-full flex flex-col gap-12"
    >
      <Subtitle text="PROJECTS" />
      <div className="flex flex-col gap-12 w-full items-center justify-center">
        <h2 className="font-bold text-3xl">Things I've made so far</h2>
        <div className="gap-8 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {firstFour.map((project, i) => (
            <ProjectPanel key={i} project={project} />
          ))}
        </div>
        <a href="/projects">
          <Button
            variant="ghost"
            className="gradient-text w-fit text-transparent animate-gradient text-2xl"
          >
            and more...
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
