"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const IntroTextAnimation = () => {
  const intro = [
    `I'm AL-amin Muhammad.`,
    1000,
    `I'm a Computer Scientist,`,
    1000,
    `a Computer Programmer,`,
    1000,
    `a Software Developer,`,
    1000,
    `a Full Stack Web and Mobile developer,`,
    1000,
    `I speak C#,`,
    1000,
    `JavaScript,`,
    1000,
    `TypeScript,`,
    1000,
    `HTML,`,
    1000,
    `CSS,`,
    1000,
    `Python,`,
    1000,
    `Java,`,
    1000,
    `Dart,`,
    1000,
    `PHP,`,
    1000,
    `Kotlin,`,
    1000,
    `Swift,`,
    1000,
    `Golang`,
    1000,
    `C++,`,

    1000,
    `C,`,
    1000,
    `SQL and NoSQL fluently.`,
    2000,
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
