"use client";
import { useRouter } from "next/navigation";
import React from "react";

export type FoodType = {
  title: string;
  src: string;
  description: string;
  price: number;
  slug: string;
  extras: string[];
  noInCart: number;
};
const FoodCard = ({ title, src, description, price, slug }: FoodType) => {
  const router = useRouter();
  return (
    <div
      className="w-full sm:w-1/2 p-4 lg:w-1/3 xl:w-1/4
     flex flex-col items-center justify-center cursor-pointer hover:bg-stone-100
    "
      onClick={() => {
        router.push(`/projects/food-odering-app/${slug}`);
      }}
    >
      <div
        className=" w-52 h-52 rounded-full"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {/* <Image
          src={src}
          alt={title}
          fill
          objectFit="contain"
          //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        /> */}

      <h6 className="m-2 font-bold text-xl text-[#7bc229]">{title}</h6>
      <p className="font-semibold text-md ">{`₦${price}`}</p>
      <p className="text-base text-center">{description}</p>
    </div>
  );
};

export default FoodCard;
