"use client";

import { Project } from "@/types";

import FlagShip from "../flagship";

interface ProjectPanelProps {
  project: Project;
}

const ProjectPanel = ({ project }: ProjectPanelProps) => {
  return (
    <a href={project.id} target="_blank">
      <div
        className={`group hover:cursor-pointer transition hover:duration-100 duration-300 hover:scale-[1.03] shadow-light dark:shadow-neon w-full h-75 flex flex-col rounded-xl bg-secondary ${
          project.id === "cheezbaich.com" && "border-2 border-foreground/75"
        }`}
      >
        {/* <div className="relative flex h-2/3 sm:h-1/2 bg-primary text-rose-500 rounded-t-xl items-center justify-center">
          <div className="absolute z-40 rounded-xl w-full h-full shadow-[0_0_80px_rgba(0,0,0,0.3)_inset] left-0 top-0"></div>
          <div className="absolute z-0">LOADING VIDEO...</div>
          <img
            className="relative z-30 w-full h-full object-cover rounded-t-xl pointer-events-none"
            src={project.thumbnail}
            alt="image"
          />
        </div> */}
        <div className="flex flex-col text-left gap-2 h-1/3 sm:h-1/2 rounded-b-xl p-2 sm:p-4">
          <div className="flex w-full justify-between flex-row sm:justify-start sm:flex-col gap-2">
            <h3 className="text-xl sm:text-2xl font-bold group-hover:underline">
              {project.title}
            </h3>
            {project.id === "cheezbaich.com" && <FlagShip text="FLAGSHIP" />}
          </div>
          <p className="text-neutral-500 font-light text-sm sm:text-base">
            {project.description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProjectPanel;
