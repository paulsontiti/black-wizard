"use client";
import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";
import IntroTextAnimation from "./IntroTextAnimation";
import { useRouter } from "next/navigation";
import { MdDownload, MdExpandLess, MdExpandMore } from "react-icons/md";
import CvSection from "./CvSection";
import { EyeIcon } from "@heroicons/react/24/outline";

const cvUrl = "/assets/cv.pdf";
export const downloadCV = () => {
  // using Java Script method to get PDF file
  fetch(cvUrl).then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = cvUrl;
      alink.click();
    });
  });
};
export const gradient =
  "bg-gradient-to-br from-orange-700 via-pink-500 to-yellow-500";
function HeroSection() {
  const router = useRouter();
  const [expandMore, setExpandMore] = useState(true);
  const [showCv, setShowCv] = useState(false);
  return (
    <section className="container xl:px-40">
      <h1
        className="text-white px-4
                        mb-4 text-3xl md:text-5xl font-extrabold
                        "
      >
        <span className={`${gradient} text-transparent bg-clip-text`}>
          {`Hello,`}
        </span>{" "}
        <br />
        <IntroTextAnimation />
      </h1>
      <div
        className="sm:grid px-4 sm:px-1 gap-4 sm:grid-cols-12 md:px-4 md:gap-8
      lg:mx-8 xl:mx-12 max-w-full mt-10"
      >
        <div className="w-full col-span-5 place-self-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.1,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="w-full h-60 xl:h-80"
            style={{
              backgroundImage: `url(/assets/th.jpeg)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <img
              src="/assets/dp.jpg"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 
              -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
              style={{
                minWidth: "100%",
                minHeight: "auto",
                objectFit: "cover",
              }}
            /> */}
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.1,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 1.5,
          }}
          className="col-span-7 place-self-center text-center lg:text-left h-full"
        >
          <p className="text-white text-base mb-4 mt-4 text-left ">
            <h1 className="text-4xl font-bold">
              Turning Vision into Reality with Software Development
            </h1>
            {`As a skilled and experienced Software Developer, I'm dedicated to turning your ideas into software applications both mobile and web applications. Explore my projects and work experience showcasing my expertise in mobile and web application development`}
          </p>
          <div className="flex gap-5 justify-center mt-7">
            <Button
              label="Hire Me"
              gradient={gradient}
              classNames={` hover:bg-slate-200 text-white w-1/2 rounded-full`}
              onClick={() => {
                router.push("/#contact-me");
              }}
            />

            <div
              className="flex justify-between items-center px-4 text-white border-white
             border-2 w-1/2 relative"
            >
              <span>My CV</span>
              {expandMore ? (
                <MdExpandMore
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setExpandMore(!expandMore)}
                />
              ) : (
                <div>
                  <MdExpandLess
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setExpandMore(!expandMore)}
                  />
                  <div
                    className="absolute top-12 right-0
                  flex flex-col gap-2
                  w-52 bg-black z-40"
                  >
                    <CVButton
                      label="View Cv"
                      gradient={gradient}
                      onClick={() => {
                        setShowCv(true);
                        setExpandMore(!expandMore);
                      }}
                      icon={<EyeIcon className="w-6 h-6" />}
                    />
                    <CVButton
                      label="Download Cv"
                      gradient={gradient}
                      onClick={() => {
                        downloadCV();
                        setExpandMore(!expandMore);
                      }}
                      icon={<MdDownload className="w-6 h-6" />}
                    />
                  </div>
                </div>
              )}
            </div>
            {/* */}
          </div>
        </motion.div>
        {showCv && <CvSection setShowCv={setShowCv} />}
      </div>
    </section>
  );
}

export default HeroSection;

type ButtonParamstype = {
  label: string;
  classNames?: string;
  gradient?: string;
  onClick: () => void;
  icon?: ReactNode;
};
function Button({ label, classNames, gradient, onClick }: ButtonParamstype) {
  return (
    <button
      className={`${gradient} py-3 w-full ${classNames}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
function CVButton({ gradient, label, onClick, icon }: ButtonParamstype) {
  return (
    <button className={`${gradient}  py-1 px-1 w-full`} onClick={onClick}>
      <div
        className="hover:bg-slate-800  bg-black text-white 
      px-5 py-2 w-full flex items-center justify-center"
      >
        {icon}
        <span className="ml-2"> {label}</span>
      </div>
    </button>
  );
}
