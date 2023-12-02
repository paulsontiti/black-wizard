"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const IntroTextAnimation = () => {
  const intro = [
    `I'm Paulson Nwoha.`,
    1000,
    `I'm a Computer Scientist,`,
    1000,
    `a Software Engineer,`,
    1000,
    `a Web Developer(Full Stack),`,
    1000,
    `a Mobile Developer,`,
    1000,
    `a UI/UX Designer,`,
    1000,
    `I speak JavaScript,`,
    1000,
    `TypeScript,`,
    1000,
    `Python,`,
    1000,
    `Java,`,
    1000,
    `Golang,`,
    1000,
    `and C++ fluently.`,
    1000,
    `I give Computers commands`,
    1000,
    `and they obey me.`,
    1000,
    `I'm a Black Computer Wizard.`,
    1000,
  ];
  return (
    <div className="mt-2">
      <TypeAnimation
        sequence={intro}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default IntroTextAnimation;
