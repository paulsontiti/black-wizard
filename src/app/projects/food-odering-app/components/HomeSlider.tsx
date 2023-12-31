"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles.module.css";
const images = [
  {
    id: 1,
    src: "/assets/food-ordering-app/slider-opening-promo.png",
    title: "Opening Promo",
  },
  {
    id: 2,
    src: "/assets/food-ordering-app/slider-soup-discount.png",
    title: "Soup Discount",
  },
  {
    id: 3,
    src: "/assets/food-ordering-app/slider-soups.png",
    title: "Soup",
  },
  {
    id: 4,
    src: "/assets/food-ordering-app/slider-swallows.png",
    title: "Swallows",
  },
  {
    id: 5,
    src: "/assets/food-ordering-app/slider-pastries.png",
    title: "Pastries",
  },
];
const HomeSlider = () => {
  const [index, setIndex] = useState(0);
  const len = images.length - 1;
  const handleArrowClick = (direction: string) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : len);
    } else {
      setIndex(index < len ? index + 1 : 0);
    }
  };

  return (
    <div className="slider sm:h-72 md:h-96 xl:h-full">
      {index > 0 && (
        <ChevronLeftIcon
          onClick={() => handleArrowClick("l")}
          className="w-10 absolute top-1/4 left-5 z-20
          text-green-500 cursor-pointer
          bg-black rounded-full"
        />
      )}
      <div
        className="absolute flex w-[500vw] transition ease-in-out delay-150 duration-1000"
        style={{
          transform: `translateX(${-100 * index}vw)`,
        }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="w-full h-40 sm:h-72 md:h-88 lg:h-96 xl:h-[400px] relative"
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
      {index < len && (
        <ChevronRightIcon
          onClick={() => handleArrowClick("r")}
          className="w-10 absolute top-1/4 right-5 z-20
           text-green-500 cursor-pointer
           bg-black rounded-full"
        />
      )}
    </div>
  );
};

export default HomeSlider;
