"use client";

import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RxGithubLogo } from "react-icons/rx";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";

interface contactButtonProps {
  btnTxt?: string;
}

const ContactButton = ({ btnTxt }: contactButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="bg-purple-500 text-white hover:bg-purple-500/75 hover:text-white/75"
        >
          <p>{btnTxt ?? "Contact me"}</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact me</DialogTitle>
          <DialogDescription>
            Get in contact through your preferred social channel!
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="flex flex-row gap-2 w-full">
            <a
              className="w-full"
              href="https://github.com/abdullahzia1"
              target="_blank"
            >
              <Button className="px-3 py-0 w-full">
                <RxGithubLogo className="w-5 h-5" />
              </Button>
            </a>
            <a
              className="w-full"
              href="https://www.linkedin.com/in/abdullahzia55/"
              target="_blank"
            >
              <Button className="px-3 py-0 w-full">
                <FaLinkedin className="w-5 h-5" />
              </Button>
            </a>
            <a
              className="w-full"
              href="https://t.me/abdullahzia1"
              target="_blank"
            >
              <Button className="px-3 py-0 w-full">
                <FaTelegramPlane className="w-5 h-5" />
              </Button>
            </a>
          </div>
          <a
            className="w-full"
            href="mailto:abdullah.maildrop@gmail.com"
            target="_blank"
          >
            <Button
              variant="secondary"
              className="px-3 py-0 w-full items-center gap-2"
            >
              <IoMail className="w-5 h-5" />
              <p>abdullah.maildrop@gmail.com</p>
            </Button>
          </a>
        </div>
        <DialogFooter className="w-full">
          <DialogClose asChild>
            <Button className="w-full" type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContactButton;
