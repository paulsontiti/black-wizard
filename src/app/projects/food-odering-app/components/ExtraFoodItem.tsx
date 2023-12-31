"use client";
import React from "react";
import { getFoodBySlug } from "./FoodList";
import { FoodType } from "./FoodCard";
import Price from "./Price";

export default function ExtraFoodItem({
  extra,
  setFoodItems,
}: {
  extra: string;
  setFoodItems: (extraFood: FoodType) => void;
}) {
  const extraFood = getFoodBySlug(extra) as FoodType;
  return (
    <div className="mb-4 flex items-center">
      <input
        className="mr-2 w-6 h-6 text-green-500"
        type="checkbox"
        id={extra}
        name={extra}
        value={extra}
        onChange={() => setFoodItems(extraFood)}
        style={{ backgroundColor: "green" }}
      />
      <div className="ml-2 flex items-start justify-start">
        <div
          className=" w-10 h-10 rounded-full mr-2"
          style={{
            backgroundImage: `url(${extraFood?.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="flex flex-col">
          <label htmlFor={extra}>{extraFood?.title}</label>
          <Price price={extraFood?.price.toString()} />
        </div>
      </div>
    </div>
  );
}
