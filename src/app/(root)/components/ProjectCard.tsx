import React, { ReactNode } from "react";

const ProjectCard = ({
  imgUrl,
  title,
  description,
}: {
  imgUrl: string;
  title: string;
  description: ReactNode;
}) => {
  return (
    <div className="w-full  md:w-[360px] lg:w-[460px] xl:w-[400px]">
      <div
        className="h-60 w-full lg:h-72"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="text-white">
        <h5>{title}</h5>
        {description}
      </div>
    </div>
  );
};

export default ProjectCard;
