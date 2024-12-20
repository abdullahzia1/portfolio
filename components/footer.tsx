"use client";

import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

import Logo from "./navbar/logo";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="border drop-shadow-md rounded-t-xl px-14 py-10 min-w-[200px] w-[100vw] max-w-[2440px] flex justify-between items-center transition group-hover:duration-200 duration-1000 flex-col sm:flex-row bg-background gap-2">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
        <Logo />
        <p className="text-sm text-neutral-500 font-light text-center">
          updated lastly 2024-10-27
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <div className="flex flex-row items-center gap-0">
          <a href="mailto:abdullah.maildrop@gmail.com" target="_blank">
            <Button variant="link">
              <p>abdullah.maildrop@gmail.com</p>
            </Button>
          </a>
          <a href="https://github.com/abdullahzia1" target="_blank">
            <Button variant="ghost">
              <RxGithubLogo className="w-4 h-4" />
            </Button>
          </a>
          <a href="https://linkedin.com/in/abdullahzia55" target="_blank">
            <Button variant="ghost">
              <RxLinkedinLogo className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
