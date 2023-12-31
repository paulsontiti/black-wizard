"use client";
import React, { useRef, useState } from "react";
import { getFoodBySlug } from "../components/FoodList";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import Button from "../components/Button";
import ExtraFoodItem from "../components/ExtraFoodItem";
import { FoodType } from "../components/FoodCard";
import Price from "../components/Price";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { addFoodItemsToCart } from "@/app/store/cart-slice";
import SnackBar from "@/app/components/Snackbar";
import { useRouter } from "next/navigation";
import {
  addExtraFoodToOrder,
  calculateTotal,
  formatFoodTitle,
  updateNumberOfItemInList,
} from "../lib/func/price";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const food = getFoodBySlug(slug) as FoodType;

  const [foodItems, setFoodItems] = useState<FoodType[]>([food]);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  //ref
  const snackBarRef = useRef();

  //handle checkbox onChange
  const addRemoveFoodItem = (extraFood: FoodType) => {
    const items = addExtraFoodToOrder(foodItems, extraFood);
    setFoodItems(items);
  };

  return (
    <div className=" my-10 container px-8 lg:flex lg:justify-between lg:items-start">
      <SnackBar
        message="Successfully added to cart. You will be redirected to Cart Page"
        ref={snackBarRef}
      />
      <div className="w-full lg:w-4/12 grow flex justify-center items-center">
        <div
          className="w-72 h-72 rounded-full"
          style={{
            backgroundImage: `url(${food?.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="w-full lg:w-4/12 grow flex flex-col lg:px-16 my-10">
        <h1 className="font-bold mb-5 text-2xl xl:text-4xl">{food?.title}</h1>
        <small
          className="font-semibold mb-2 w-12  border-4 border-b-[#7bc229] border-r-transparent
        border-l-transparent border-t-transparent"
        >{`₦${food?.price}`}</small>
        <p className="text-base mb-5">{food?.description}</p>

        <fieldset>
          <legend className="text-2xl font-bold mb-2">Add extra food</legend>
          {food?.extras.map((extra) => (
            <ExtraFoodItem
              key={extra}
              extra={extra}
              setFoodItems={addRemoveFoodItem}
            />
          ))}
        </fieldset>
      </div>
      <div className=" w-full lg:w-4/12 grow bg-stone-300 py-4 px-8">
        <h1 className="text-2xl font-bold mb-8">Summary</h1>
        {foodItems.map((food) => (
          <div
            key={food.slug}
            className="flex items-center justify-between my-4 border-b-2 border-b-green-500 pb-4"
          >
            <h5 className=" w-1/3 grow">{formatFoodTitle(food)}</h5>
            <div className="flex justify-center items-center w-1/3 grow">
              {food.noInCart > 1 && (
                <MinusIcon
                  className="w-6 h-6 cursor-pointer mr-2"
                  onClick={() =>
                    setFoodItems(
                      updateNumberOfItemInList(
                        "minus",
                        food.slug,
                        foodItems,
                        food.slug === slug
                      )
                    )
                  }
                />
              )}
              <PlusIcon
                className="w-6 h-6 cursor-pointer"
                onClick={() =>
                  setFoodItems(
                    updateNumberOfItemInList("plus", food.slug, foodItems)
                  )
                }
              />
            </div>
            <div className="w-1/3 grow flex items-center justify-end">
              <Price price={(food.price * food.noInCart).toString()} />
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between mt-12">
          <h5 className="font-bold">Total</h5>
          <Price price={calculateTotal(foodItems).toString()} />
        </div>
        <div className="my-10 flex items-center justify-center ">
          <Button
            label="Add To Cart"
            onClick={() => {
              dispatch(addFoodItemsToCart(foodItems));
              setFoodItems([]);
              const snackBar = snackBarRef.current as any;
              snackBar.showSnackBar();
              setTimeout(() => {
                router.push("/projects/food-odering-app/cart");
              }, 3000);
            }}
          />
        </div>
      </div>
    </div>
  );
}
