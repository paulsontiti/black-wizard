"use client";
import Image from "next/image";
import React, { ReactNode, useState, useTransition } from "react";

type TabDataType = {
  id: string;
  content: ReactNode;
};
const TabData: TabDataType[] = [
  {
    id: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Tailwind</li>
        <li>Material UI</li>
        <li>React.js</li>
        <li>NextJs</li>
        <li>MongDb</li>
      </ul>
    ),
  },
  {
    id: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>Abia State University, Uturu(Bsc Biochemistry)</li>
        <li>Nnamdi Azikiwe University, Awka(PGD Computer Science)</li>
      </ul>
    ),
  },
  {
    id: "Experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Developer(Full Stack), Black Wizards Technology</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white mt-15" id="about-me">
      <div className="md:grid md:grid-cols-2 text-center gap-8 py-8 px-4 sm:py-16">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(/assets/th.jpeg)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {/* <Image src="/assets/th.jpeg" alt="About me" width={500} height={500} /> */}
        <div className="flex flex-col h-full mt-4 text-left">
          <h1 className="font-bold text-2xl md:text-4xl mb-4 sm:mt-0 mt-4">
            About Me
          </h1>
          <p className="text-base ">
            In publishing and graphic design, Lorem ipsum (/ ˌlɔː.rəm ˈɪp.səm /)
            is a placeholder text commonly used to demonstrate the visual form
            of a document or a typeface without relying on meaningful content.
            Lorem ipsum may be used as a placeholder before final copy is
            available.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              active={tab === "Skills"}
              selectTab={() => handleTabChange("Skills")}
            >
              Skills
            </TabButton>
            <TabButton
              active={tab === "Education"}
              selectTab={() => handleTabChange("Education")}
            >
              Education
            </TabButton>
            <TabButton
              active={tab === "Experience"}
              selectTab={() => handleTabChange("Experience")}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TabData.find((data) => data.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;

function TabButton({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}) {
  const buttonClass = active
    ? "text-white border border-pink-500"
    : "text-orange-500";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-1 hover:text-white rounded-full py-2 px-4 ${buttonClass}`}
      >
        {children}
      </p>
    </button>
  );
}
