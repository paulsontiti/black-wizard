"use client";
import React from "react";

import AnimatedNumbers from "react-animated-numbers";
type Achievement = {
  metric: string;
  value: number;
};
const achievementList: Achievement[] = [
  {
    metric: "Years Of Experience",
    value: 7,
  },
  {
    metric: "Projects",
    value: 10,
  },
  {
    metric: "Programming Languages",
    value: 10,
  },
];
const Achievement = () => {
  return (
    <div
      className=" my-10 sm:my-20 md:my-30 lg:my-40 xl:my-50
     sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32"
    >
      <div
        className="border-orange-500 py-4 border rounded-md
  flex items-center justify-center gap-9"
      >
        {achievementList.map((achivement) => (
          <div
            key={achivement.metric}
            className="flex flex-col items-center justify-center"
          >
            <h2 className="text-xl font-bold text-white flex items-center">
              <AnimatedNumbers
                includeComma
                animateToNumber={achivement.value}
                locale="en-US"
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
              />
              +
            </h2>
            <p className="text-[#ADB7BE] mt-2 text-xs md:text-base text-center ">
              {achivement.metric}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
