"use client";

import { Button } from "../ui/button";

const Shortcuts = () => {
  return (
    <div className="flex flex-row gap-1 justify-center items-center">
      <Button
        onClick={() => {
          const element = document.getElementById("title");
          element?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        variant="link"
      >
        Home
      </Button>
      <Button
        onClick={() => {
          const element = document.getElementById("aboutMe");
          element?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        variant="link"
      >
        About
      </Button>
      <Button
        onClick={() => {
          const element = document.getElementById("skills");
          element?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        variant="link"
      >
        Skills
      </Button>
      <Button
        onClick={() => {
          const element = document.getElementById("projects");
          element?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        variant="link"
      >
        Projects
      </Button>
      <Button
        onClick={() => {
          const element = document.getElementById("experience");
          element?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        variant="link"
      >
        Experience
      </Button>
      <Button
        onClick={() => window.open("https://drive.google.com/file/d/13hnhiZsQVcffXUrsQJrL6UABpMZ2DOnF/view?usp=drive_link", "_blank")}
        
        variant="link">
          View CV
      </Button>
    </div>
  );
};

export default Shortcuts;
