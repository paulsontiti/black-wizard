import {
  CodeBracketIcon,
  EyeIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { ReactNode } from "react";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  youtubeUrl,
}: {
  imgUrl: string;
  title: string;
  description: ReactNode;
  gitUrl: string;
  previewUrl: string;
  youtubeUrl: string;
}) => {
  return (
    <div className="">
      <div
        className="h-72 w-full lg:h-72 rounded-t-xl group relative"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Overlay
          gitUrl={gitUrl}
          previewUrl={previewUrl}
          youtubeUrl={youtubeUrl}
        />
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className=" mb-2">{title}</h5>
        {description}
      </div>
    </div>
  );
};

export default ProjectCard;

function Overlay({
  gitUrl,
  previewUrl,
  youtubeUrl,
}: {
  gitUrl: string;
  previewUrl: string;
  youtubeUrl: string;
}) {
  return (
    <div
      className=" hover:flex gap-2 justify-center items-center absolute top-0 left-0 w-full h-full bg-[#181818]
  opacity-0 hidden group-hover:flex group-hover:opacity-80 transition-all duration-500"
    >
      <Link
        href={gitUrl}
        className="flex justify-center w-14 h-14 border-2 relative rounded-full border-primary-500 hover:border-white group/link"
      >
        <CodeBracketIcon className="cursor-pointer absolute h-10 w-10 m-2 text-primary-500 group-hover/link:text-white" />
      </Link>
      <Link
        href={previewUrl}
        className=" flex justify-center w-14 h-14 border-2 relative rounded-full border-primary-500 hover:border-white group/link"
      >
        <EyeIcon className="cursor-pointer absolute h-10 w-10 m-2 text-primary-500 group-hover/link:text-white" />
      </Link>
      <Link
        href={youtubeUrl}
        className=" flex justify-center w-14 h-14 border-2 relative rounded-full border-primary-500 hover:border-white group/link"
      >
        <VideoCameraIcon className="cursor-pointer absolute h-10 w-10 m-2 text-primary-500 group-hover/link:text-white" />
      </Link>
    </div>
  );
}
