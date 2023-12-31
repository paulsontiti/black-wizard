"use client";
import React from "react";
import Price from "./Price";
import { FoodType } from "./FoodCard";
import { calculateTotal } from "../lib/func/price";
import Button from "./Button";

const CartSummary = ({
  foodItems,
  buttonLabel,
  disableButton,
}: {
  foodItems: FoodType[];
  buttonLabel: string;
  disableButton?: boolean;
}) => {
  return (
    <div className="flex flex-col justify-center px-10 py-4 bg-stone-200">
      <h1 className="text-2xl font-bold">CART TOTAL</h1>
      <div className="flex items-center my-2 justify-between">
        <h5>Subtotal:</h5>
        <Price price={calculateTotal(foodItems).toString()} />
      </div>
      <div className="flex items-center mt-2 mb-4 justify-between">
        <h5>Discount:</h5>
        <Price price={(0).toString()} />
      </div>
      <Button
        label={buttonLabel}
        onClick={() => {}}
        disableButton={disableButton}
      />
    </div>
  );
};

export default CartSummary;
