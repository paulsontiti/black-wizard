"use client";
import React, { ReactNode, useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
type ProjectDataType = {
  imgUrl: string;
  title: string;
  description: ReactNode;
  id: number;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
  youtubeUrl: string;
};

const projectData: ProjectDataType[] = [
  {
    imgUrl: "/assets/project-image/bwt.png",
    title: "Online Training Platform",
    description: <div></div>,
    id: 1,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    youtubeUrl: "/",
  },
  {
    imgUrl: "/assets/project-image/bwt.png",
    title: "Online Training Platform",
    description: <div></div>,
    id: 2,
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    youtubeUrl: "/",
  },
  {
    imgUrl: "/assets/project-image/bwt.png",
    title: "Online Training Platform",
    description: <div></div>,
    id: 3,
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    youtubeUrl: "/",
  },
  {
    imgUrl: "/assets/project-image/bwt.png",
    title: "Online Training Platform",
    description: <div></div>,
    id: 4,
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    youtubeUrl: "/",
  },
  {
    imgUrl: "/assets/project-image/bwt.png",
    title: "Online Training Platform",
    description: <div></div>,
    id: 5,
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    youtubeUrl: "/",
  },
  {
    imgUrl: "/assets/project-image/bwt.png",
    title: "Online Training Platform",
    description: <div></div>,
    id: 6,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    youtubeUrl: "/",
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };
  return (
    <section className="text-white mt-10 px-4" id="projects">
      <h2
        className={`flex justify-center  font-bold text-2xl md:text-4xl mb-8 sm:mt-0 mt-8`}
      >
        My Projects
      </h2>
      <div
        className="flex justify-center items-center text-white
      gap-3 py-6"
      >
        <FilterButton
          label="All"
          active={tag === "All"}
          onClick={handleTagChange}
        />
        <FilterButton
          label="Web"
          active={tag === "Web"}
          onClick={handleTagChange}
        />
        <FilterButton
          label="Mobile"
          active={tag === "Mobile"}
          onClick={handleTagChange}
        />
      </div>
      <h1 className="text-2xl">Work in progress......</h1>
      {/* <ul ref={ref} className="w-full flex flex-wrap  justify-center">
        {projectData
          .filter((data) => data.tag.includes(tag))
          .map((project) => (
            <motion.li
              variants={{
                initial: {
                  opacity: 0,
                  y: 50,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{
                duration: 0.2,
                delay: project.id * 0.5,
              }}
              key={project.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2"
            >
              <ProjectCard
                imgUrl={project.imgUrl}
                title={project.title}
                description={project.description}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                youtubeUrl={project.youtubeUrl}
              />
            </motion.li>
          ))}
      </ul> */}
    </section>
  );
};

export default ProjectSection;

function FilterButton({
  label,
  active,
  onClick,
}: {
  onClick: (tag: string) => void;
  active: boolean;
  label: string;
}) {
  return (
    <button
      onClick={() => onClick(label)}
      className={`${
        active ? "border-primary-500" : "border-slate-500 hover:border-white"
      } rounded-full
   border-2  px-6 py-3 text-xl cursor-pointer"
    `}
    >
      {label}
    </button>
  );
}
