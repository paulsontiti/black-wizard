import React from "react";
import FoodCard, { FoodType } from "./FoodCard";

export const foods: FoodType[] = [
  {
    title: "Akara and Bread",
    src: "/assets/food-ordering-app/akara-bread.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 2000,
    slug: "akaranadbread",
    noInCart: 1,
    extras: [
      "goatmeatpeppersoup",
      "fufu",
      "jollofrice",
      "eba",
      "donuts",
      "chinchin",
    ],
  },
  {
    title: "Amala",
    src: "/assets/food-ordering-app/amala.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 2000,
    slug: "amala",
    noInCart: 1,
    extras: [
      "goatmeatpeppersoup",
      "fufu",
      "jollofrice",
      "eba",
      "donuts",
      "chinchin",
    ],
  },
  {
    title: "Chin chin",
    src: "/assets/food-ordering-app/chin-chin.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 2000,
    slug: "chinchin",
    noInCart: 1,
    extras: ["goatmeatpeppersoup", "fufu", "jollofrice", "eba", "donuts"],
  },
  {
    title: "Donuts",
    src: "/assets/food-ordering-app/dounuts.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 2000,
    slug: "donuts",
    noInCart: 1,
    extras: ["goatmeatpeppersoup", "fufu", "jollofrice", "eba", "chinchin"],
  },
  {
    title: "Eba ",
    src: "/assets/food-ordering-app/eba.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 2000,
    slug: "eba",
    noInCart: 1,
    extras: ["goatmeatpeppersoup", "fufu", "jollofrice", "donuts", "chinchin"],
  },
  {
    title: "Edikaiko",
    src: "/assets/food-ordering-app/edikiako.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 2000,
    slug: "edikaiko",
    noInCart: 1,
    extras: [
      "goatmeatpeppersoup",
      "fufu",
      "jollofrice",
      "eba",
      "donuts",
      "chinchin",
    ],
  },
  {
    title: "Egusi",
    src: "/assets/food-ordering-app/egusi.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 2000,
    slug: "egusi",
    noInCart: 1,
    extras: [
      "goatmeatpeppersoup",
      "fufu",
      "jollofrice",
      "eba",
      "donuts",
      "chinchin",
    ],
  },
  {
    title: "Fufu",
    src: "/assets/food-ordering-app/fufu.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 2000,
    slug: "fufu",
    noInCart: 1,
    extras: ["goatmeatpeppersoup", "jollofrice", "eba", "donuts", "chinchin"],
  },
  {
    title: "Goat Meat Pepper Soup",
    src: "/assets/food-ordering-app/goat-meat-peppersoup.webp",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 2000,
    slug: "goatmeatpeppersoup",
    noInCart: 1,
    extras: ["fufu", "jollofrice", "eba", "donuts", "chinchin"],
  },
  {
    title: "Jollof Rice",
    src: "/assets/food-ordering-app/Jollof-rice-16.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 2000,
    slug: "jollofrice",
    noInCart: 1,
    extras: ["goatmeatpeppersoup", "fufu", "eba", "donuts", "chinchin"],
  },
];
export const getFoodBySlug = (slug: string) => {
  return foods.find((food) => food.slug === slug);
};
const FoodList = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8 sm:my-8 w-full px-4">
      <h1 className="text-xl font-extrabold sm:text-3xl text-center">
        Healing Through Homemade Meals
      </h1>
      <p className="text-base py-4 text-[#444] md:w-9/12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure
        cum neque fugit cumque nesciunt omnis quas doloribus optio? Est atque
        ipsa iusto natus quidem magni ipsum ex voluptatum reprehenderit.
      </p>
      <div className="flex items-center justify-center w-full flex-wrap">
        {foods.map((food) => (
          <FoodCard
            key={food.title}
            title={food.title}
            description={food.description}
            src={food.src}
            slug={food.slug}
            price={food.price}
            extras={food.extras}
            noInCart={food.noInCart}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
