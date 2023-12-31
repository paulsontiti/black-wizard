import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-auto w-full sm:flex bg-[#222] pt-5">
      <div className="w-full sm-w-1/2 h-52 relative">
        <Image
          src={"/assets/food-ordering-app/slider-opening-promo.png"}
          alt={"Footer Image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className=" w-full sm:1/2 px-8">
        <div className="p-4">
          <h2 className="text-white text-3xl">
            OH YES WE DID IT!!! HEALING THROUGH HOMEMADE MEAL
          </h2>
        </div>
        <div className=" text-white p-4">
          <h1 className="font-bold text-xl text-[#7bc229]">
            FIND OUR RESTURANT
          </h1>
          <div>Address 1</div>
          <div>Address 2</div>
          <div>Address 3</div>
        </div>
        <div className=" text-white p-4">
          <h1 className="font-bold text-xl text-[#7bc229]">WORKING HOURS</h1>
          <p className="my-4 text-xs">
            MONDAY UNTIL FRIDAY
            <br />
            12PM - 8PM
          </p>
          <p className="my-4 text-xs">
            SATURDAY AND SUNDAY
            <br />
            2PM - 6PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
