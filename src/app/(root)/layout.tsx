import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paulson Nwoha",
  description: `
  My name is Paulson Nwoha.I'm a Full Stack Web Developer,
   I've gained valuable experience in developing
    and maintaining front-end code for web applications.
     I have successfully transformed app designs into front-end code using ReactJs,
      NextJs.tailwind/Material UI, ensuring that the released content is compatible across 
      different browsers and devices. I have also developed a web application
       from Requirement Analysis to Deployment.
      Visit the projects at  https://www.smnklimited.com/
       and https://www.blackwizardstechnology.com/.
       Throughout my 7 years of experience in this field,
        I have honed my skills in debugging errors, 
        troubleshooting issues, and performing routine performance optimizations.
         I have a strong understanding of user interface and user experience (UI/UX)
          design principles, allowing me to write high-quality, scalable, and reusable code.
           Additionally, I stay up to date with emerging technologies and industry trends to
            ensure that I am always at the forefront of best practices in web development.
 I hold a Post Graduate Diploma degree in computer science and have a solid foundation
  in ReactJs, NextJs, Material UI, REST, and GitHub. I am also very good with TypeScript,
   JavaScript, CSS, HTML and MongoDB and have experience testing and debugging work on
    multiple browsers and screen sizes.
     My ability to work effectively in a team and my strong work ethic make me
      a fast learner and a valuable asset to any project.
  `,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
