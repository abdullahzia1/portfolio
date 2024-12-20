"use client";

import DROPBOX_CONTENT from "@/constants/dropboxcontent";

import VideoText from "./videotext";

const TitleVideo = () => {


  return (
    <div className="flex-col h-full hidden lg:flex w-2/5 items-center justify-center">
      <div className="relative bg-gradient-to-t from-black to-purple-500 w-full h-full shadow-light dark:shadow-neon rounded-xl">
        <div className="absolute z-40 rounded-xl w-full h-full shadow-[0_0_80px_rgba(0,0,0,0.8)_inset] left-0 top-0"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="relative w-full h-full object-cover rounded-xl z-30 pointer-events-none"
          src={DROPBOX_CONTENT.titleVideo}
        />
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <VideoText text="loading video..." />
        </div>
        <div className="absolute z-40 top-60 left-20">
          <VideoText text="RESPONSIVE" />
        </div>
        <div className="absolute z-40 bottom-60 right-20">
          <VideoText text="MODERN" />
        </div>
      </div>
    </div>
  );
};

export default TitleVideo;
