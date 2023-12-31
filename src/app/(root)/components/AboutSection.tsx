"use client";
import { motion } from "framer-motion";
import React, { ReactNode, useState, useTransition } from "react";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

type TabDataType = {
  id: string;
  content: ReactNode;
};
const TabData: TabDataType[] = [
  {
    id: "Skills",
    content: (
      <div>
        {" "}
        <XSSkills /> <SMSkills />
      </div>
    ),
    // <ul className="list-disc pl-2">
    //   <li>JavaScript</li>
    //   <li>TypeScript</li>
    //   <li>CSS</li>
    //   <li>HTML</li>
    //   <li>Tailwind</li>
    //   <li>Material UI</li>
    //   <li>React.js</li>
    //   <li>NextJs</li>
    //   <li>MongDb</li>
    // </ul>
  },
  {
    id: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Nnamdi Azikiwe University, Awka(PGD Computer Science) - October 2018
        </li>
        <li>Abia State University, Uturu(Bsc Biochemistry) - March 2011</li>
      </ul>
    ),
  },
  {
    id: "Experience",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-4">
          <div>
            <h3 className="text-xl font-bold">
              Front End Developer - React JS, React Native
            </h3>
            <h4 className="text-lg font-medium">
              The Citizen Project, New York
            </h4>
            <h5 className="text-base mb-1">
              (Remote,Volunteer) - November 2023 - Current
            </h5>
            <h6 className="text-xs">
              React JS, Redux,Next JS, React Native, HTML, CSS, Tailwind,
              Jest,Testing Library/React
            </h6>
          </div>
        </li>
        <li className="mb-4">
          <div>
            <h3 className="text-xl font-bold">Front End Developer - Flutter</h3>
            <h4 className="text-lg font-medium">
              Nature Of Sound, Inc., California
            </h4>
            <h5 className="text-base mb-1">
              (Remote,Volunteer) - November 2023 - Current
            </h5>
            <h6 className="text-xs">Flutter - Mobile and web</h6>
          </div>
        </li>
        <li className="mb-4">
          <div>
            <h3 className="text-xl font-bold">Full Stack Software Developer</h3>
            <h4 className="text-lg font-medium">
              Black Wizards Technology, Port Harcourt,Nigeria
            </h4>
            <h5 className="text-base mb-1">January 2019 - Current</h5>
            <h6 className="text-xs">
              React JS, Redux,Next JS, React Native, HTML, CSS, Tailwind,
              Jest,Testing Library/React
            </h6>
          </div>
        </li>
        <li className="mb-4">
          <div>
            <h3 className="text-xl font-bold">Intermediate .NET Developer</h3>
            <h4 className="text-lg font-medium">
              Mofasoft, Awka, Anambra, Nigeria
            </h4>
            <h5 className="text-base mb-1">November 2017 - October 2018</h5>
            <h6 className="text-xs">.NET, C#, MS SQL</h6>
          </div>
        </li>
        <li className="mb-4">
          <div>
            <h3 className="text-xl font-bold">
              Trainer(C#, ASP.NET and MS SQL Server)
            </h3>
            <h4 className="text-lg font-medium">
              Aptech Computer Education,Enugu, Enugu State, Nigeria
            </h4>
            <h5 className="text-base mb-1"> March 2015 - August 2017</h5>
            <h6 className="text-xs">.NET, C#, MS SQL</h6>
          </div>
        </li>
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
    <section className="text-white " id="about-me">
      <div className="sm:grid sm:grid-cols-12 text-center sm:gap-4 gap-8 px-4 py-20">
        <div className="flex justify-center col-span-4">
          <div
            className=" w-[250px] h-[250px] rounded-full"
            style={{
              backgroundImage: `url(/assets/dp.jpg)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        {/* <Image src="/assets/th.jpeg" alt="About me" width={500} height={500} /> */}
        <div className="flex flex-col sm:col-span-8 sm:ml-8 lg:ml-0 h-full mt-4 text-left">
          <h1 className="font-bold text-2xl md:text-4xl mb-4 sm:mt-0">
            About Me
          </h1>
          <p className="text-base">
            {`
 I'm a Full Stack Software Developer, I've gained valuable experience in 
 developing and maintaining front-end and back-end code for web and mobile 
 applications. I have successfully transformed app designs into software using
  ASP.NET Core, MERN Stack, Next JS, React JS, Redux, Flutter, Django, Spring Boot,
   Laravel, Blazor, webassembly, HTML, HTML5, CSS, Bootstrap, Tailwind, Material UI,
    Angular JS, JQuery, Vue Js, RESTful APIs, GraphQL, Microservices, 
    Responsive Design, MS SQL Server, PostgreSQL, MySQL, MongoDB, ensuring that the released content is compatible across different browsers and devices. 

 Throughout my 7 years of experience in this field, I have honed my skills in C#,
  Java, Python, Go, Dart, Typescript, JavaScript, PHP, C++, Kotlin, Swift, Rust, 
  Problem-Solving, Troubleshooting, Requirements Gathering, Code Debugging,
   Unit Testing, Integration Testing, Version Control Systems: Git, Github, Figma, 
   SEO, Wireframing techniques, Object-Oriented Programming, 
   Continuous Integration and Deployment, Data Structures and Algorithms, 
   LINQ Queries, Entity Framework, Dependency Injection.
 I have a strong understanding of user interface and user experience 
 (UI/UX) design principles, allowing me to write high-quality, scalable, 
 and reusable code. Additionally, I stay up to date with emerging technologies
  and industry trends to ensure that I am always at the forefront of best
   practices in web development.
 
 I'm a logical and results-driven Software Developer dedicated to building
  and optimizing user-focused software for customers with various business
   objectives. Judicious and creative when crafting effective websites, apps 
   and platforms to propel competitive advantage and revenue growth. 
   Technically proficient and analytical problem solver with calm and
    focused demeanor.
 
 I hold a Post Graduate Diploma degree in computer science.
  My ability to work effectively in a team and my strong work ethic
   make me a fast learner and a valuable asset to any project.
  `}
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
  child,
}: {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
  child?: boolean;
}) {
  const buttonClass = active
    ? "text-white "
    : `text-${child ? "secondary" : "primary"}-500`;

  const variants = {
    default: { width: 0 },
    active: {
      width: "calc(100% - 0.75rem)",
    },
  };
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-1 hover:text-white rounded-full py-2 px-4 ${buttonClass}`}
      >
        {children}
      </p>
      <motion.div
        variants={variants}
        animate={active ? "active" : "default"}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
}

const programmingLanguages: string[] = [
  "C#",
  "Java",
  "Python",
  "Go",
  "Dart",
  "Typescript",
  "JavaScript",
  "PHP",
  "C++",
  "C",
  "Kotlin",
  "Swift",
];

const web: string[] = [
  "ASP.Net",
  "MERN Stack",
  "Next JS",
  "React JS",
  "Redux",
  "Flutter",
  "Django",
  "Spring Boot",
  "Laravel",
  "Blazor",
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "Material UI",
  "Angular JS",
  "JQuery",
  "Vue Js",
  "RESTful APIs",
  "Microservices",
  "Responsive Design",
];

const database: string[] = ["MS SQl Server", "PostgreSQL", "MySQL", "MongoDB"];

const technical: string[] = [
  "Problem-Solving",
  "Troubleshooting",
  "Requirements Gathering",
  "Code Debugging",
  "Unit Testing",
  "Integration Testing",
  "Version Control Systems: Git,Github",
  "Figma",
  "SEO",
  "Wireframing techniques",
  "Object-Oriented Programming",
  "Continuous Integration and Deployment",
  "Data Structures and Algorithms",
  "LINQ Queries",
  "Entity Framework",
  "Dependency Injection",
];
const mobile: string[] = ["React Native", ".NET MAUI", "Flutter"];
const SkillsTabData: TabDataType[] = [
  {
    id: "Programming",
    content: (
      <ul className="list-disc pl-2">
        {programmingLanguages.map((skill) => (
          <SkillListItem skill={skill} key={skill} />
        ))}
      </ul>
    ),
  },
  {
    id: "Web",
    content: (
      <ul className="list-disc pl-2">
        {web.map((skill) => (
          <SkillListItem skill={skill} key={skill} />
        ))}
      </ul>
    ),
  },
  {
    id: "Mobile",
    content: (
      <ul className="list-disc pl-2">
        {mobile.map((skill) => (
          <SkillListItem skill={skill} key={skill} />
        ))}
      </ul>
    ),
  },
  {
    id: "Database",
    content: (
      <ul className="list-disc pl-2">
        {database.map((skill) => (
          <SkillListItem skill={skill} key={skill} />
        ))}
      </ul>
    ),
  },
  {
    id: "Technical",
    content: (
      <ul className="list-disc pl-2">
        {technical.map((skill) => (
          <SkillListItem skill={skill} key={skill} />
        ))}
      </ul>
    ),
  },
];

function SkillListItem({ skill }: { skill: string }) {
  return <li className=" mb-4">{skill}</li>;
}

const skillsArray = ["Programming", "Web", "Mobile", "Database", "Technical"];
function XSSkills() {
  const [tab, setTab] = useState("Programming");
  const [isPending, startTransition] = useTransition();
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="lg:hidden">
      <div className="flex justify-between items-center ">
        {startIndex > 0 && (
          <MdOutlineArrowBackIos
            className="w-8 h-8"
            onClick={() => {
              setStartIndex((prv) => --prv);
              setEndIndex((prv) => --prv);
            }}
          />
        )}
        <div className="max-w-[300px]  flex items-start overflow-hidden">
          {skillsArray.slice(startIndex, endIndex).map((skill) => (
            <TabButton
              key={skill}
              active={tab === skill}
              selectTab={() => handleTabChange(skill)}
              child={true}
            >
              {skill}
            </TabButton>
          ))}
        </div>
        {endIndex < skillsArray.length && (
          <MdArrowForwardIos
            className="w-8 h-8"
            onClick={() => {
              setStartIndex((prv) => ++prv);
              setEndIndex((prv) => ++prv);
            }}
          />
        )}
      </div>
      <div className="mt-8">
        {SkillsTabData.find((data) => data.id === tab)?.content}
      </div>
    </div>
  );
}

function SMSkills() {
  const [tab, setTab] = useState("Programming");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="lg:block hidden">
      <div className="flex justify-center items-center ">
        {skillsArray.map((skill) => (
          <TabButton
            key={skill}
            active={tab === skill}
            selectTab={() => handleTabChange(skill)}
            child={true}
          >
            {skill}
          </TabButton>
        ))}
      </div>
      <div className="mt-8">
        {SkillsTabData.find((data) => data.id === tab)?.content}
      </div>
    </div>
  );
}
