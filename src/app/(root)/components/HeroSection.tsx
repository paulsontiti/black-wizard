import Image from "next/image";
import React from "react";
import IntroTextAnimation from "./IntroTextAnimation";
export const gradient =
  "bg-gradient-to-br from-orange-700 via-pink-500 to-yellow-500";
function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
        <div className="col-span-7 place-self-center text-center lg:text-left">
          <h1
            className="text-white
                        mb-4 text-3xl md:text-5xl font-extrabold
                        "
          >
            <span className={`${gradient} text-transparent bg-clip-text`}>
              {`Hello,`}
            </span>{" "}
            <br />
            <IntroTextAnimation />
          </h1>
          <p className="text-white text-base lg:text-xl sm:text-lg mb-4 ">
            In publishing and graphic design, Lorem ipsum (/ ˌlɔː.rəm ˈɪp.səm /)
            is a placeholder text commonly used to demonstrate the visual form
            of a document or a typeface without relying on meaningful content.
            Lorem ipsum may be used as a placeholder before final copy is
            available.
          </p>
          <div className="flex sm:flex-row flex-col gap-5 justify-center mt-7">
            <Button
              label="Hire Me"
              gradient={gradient}
              classNames={` hover:bg-slate-200 text-white`}
            />
            <ViewCVButton
              gradient={gradient}
              // classNames="bg-transparent hover:bg-slate-800 text-white border border-white"
            />
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-5 sm:mt-0">
          <div
            className="rounded-full w-[200px] h-[200px]
          "
            style={{
              backgroundImage: `url(/assets/dp.jpg)`,
              backgroundSize: "contain",
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

function Button({
  label,
  classNames,
  gradient,
}: {
  label: string;
  classNames?: string;
  gradient: string;
}) {
  return (
    <button className={`${gradient} rounded-full py-3 w-full ${classNames}`}>
      {label}
    </button>
  );
}
function ViewCVButton({ gradient }: { gradient: string }) {
  return (
    <button className={`${gradient} rounded-full py-1 px-1 w-full`}>
      <span className="hover:bg-slate-800 block bg-black text-white px-5 py-2 w-full rounded-full">
        View My CV
      </span>
    </button>
  );
}
