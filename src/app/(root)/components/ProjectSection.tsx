import React, { ReactNode } from "react";
import ProjectCard from "./ProjectCard";
import { gradient } from "./HeroSection";
type ProjectDataType = {
  imgUrl: string;
  title: string;
  description: ReactNode;
  id: number;
  tag: string[];
};

const projectData: ProjectDataType[] = [
  {
    imgUrl: "/assets/project-image/bwt.png",
    title: "Online Training Platform",
    description: <div></div>,
    id: 1,
    tag: ["All", "Web"],
  },
  {
    imgUrl: "/assets/project-image/bwt.png",
    title: "Online Training Platform",
    description: <div></div>,
    id: 2,
    tag: ["All", "Web"],
  },
  {
    imgUrl: "/assets/project-image/bwt.png",
    title: "Online Training Platform",
    description: <div></div>,
    id: 3,
    tag: ["All", "Web"],
  },
  {
    imgUrl: "/assets/project-image/bwt.png",
    title: "Online Training Platform",
    description: <div></div>,
    id: 4,
    tag: ["All", "Web"],
  },
  {
    imgUrl: "/assets/project-image/bwt.png",
    title: "Online Training Platform",
    description: <div></div>,
    id: 5,
    tag: ["All", "Web"],
  },
  {
    imgUrl: "/assets/project-image/bwt.png",
    title: "Online Training Platform",
    description: <div></div>,
    id: 6,
    tag: ["All", "Web"],
  },
];
const ProjectSection = () => {
  return (
    <section className="text-white" id="projects">
      <h2
        className={`${gradient} text-transparent bg-clip-text font-bold text-2xl md:text-4xl mb-4 sm:mt-0 mt-4`}
      >
        My Projects
      </h2>
      <div className="flex flex-wrap gap-4  justify-center">
        {projectData.map((project) => (
          <ProjectCard
            imgUrl={project.imgUrl}
            title={project.title}
            description={project.description}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
