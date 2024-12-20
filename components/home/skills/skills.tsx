/* eslint-disable react/no-unescaped-entities */
"use client";

import SKILLS_LEARNING from "@/constants/learning";

import Subtitle from "../../subtitle";
import SkillElement from "./skillelement";
import SkillList from "./skilllist";

const Skills = () => {
  SKILLS_LEARNING.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  return (
    <div
      id="skills"
      className="items-center justify-center w-full flex flex-col gap-12"
    >
      <Subtitle text="SKILLS" />
      <div className="flex flex-col gap-12">
        <h2 className="font-bold text-3xl">
          Technologies and tools I am good with
        </h2>
        <SkillList />
        <p className="font-bold text-xl">Additionally I'm currently learning</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILLS_LEARNING.map((skill, i) => (
            <div key={i} className="relative group">
              <div className="absolute opacity-0 -inset-0.5 bg-gradient-to-r from-purple-800 to-pink-500 rounded-xl blur-md group-hover:opacity-75 transition group-hover:duration-200 duration-1000"></div>
              <div className="relative bg-black rounded-xl p-1 items-center justify-center flex h-14">
                <SkillElement skill={skill} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
