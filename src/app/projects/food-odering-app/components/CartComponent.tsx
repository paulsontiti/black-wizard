"use client";
import { RootState } from "@/app/store";
import React from "react";
import { useSelector } from "react-redux";
import Price from "./Price";
import CartSummary from "./CartSummary";

const CartComponent = () => {
  const foodItems = useSelector(
    (state: RootState) => state.carts.cart.foodItems
  );
  return (
    <div className="w-full lg:flex lg:items-start lg:justify-center">
      <table className="w-full lg:w-2/3 grow text-center">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        {foodItems.map((food) => (
          <tr key={food.slug}>
            <td className="flex justify-center">
              {" "}
              <div
                className=" w-10 h-10 rounded-full"
                style={{
                  backgroundImage: `url(${food.src})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </td>
            <td>{food.title}</td>
            <td>
              <Price price={food.price.toString()} />
            </td>
            <td>{food.noInCart}</td>
            <td>
              <Price price={(food.price * food.noInCart).toString()} />
            </td>
          </tr>
        ))}
      </table>
      <div className="w-full lg:w-1/3 grow mt-10 lg:mt-0">
        <CartSummary buttonLabel="Checkout" foodItems={foodItems} />
      </div>
    </div>
  );
};

export default CartComponent;
