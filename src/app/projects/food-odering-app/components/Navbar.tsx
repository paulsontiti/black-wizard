"use client";
import { RootState } from "@/app/store";
import {
  Bars3Icon,
  PhoneArrowUpRightIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.carts.cart);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav
      className="container py-2 px-2 sm:px-4
     bg-black  sticky top-0 right-0 min-w-full text-[#7bc229]
      z-40"
    >
      <div className="flex items-center justify-between">
        <div className="w-5/12 sm:w-2/12 grow relative">
          <Image
            src={"/assets/food-odering-app/4.png"}
            alt="logo"
            width={100}
            height={50}
          />
        </div>
        <div className="contact flex  w-4/12 ml-4 sm:w-3/12 grow text-[#7bc229]">
          <div className="">
            <h5 className="sm:mr-4 text-sm font-medium text-white text-center">
              Order Now!
            </h5>
            <div className="flex items-center">
              <PhoneArrowUpRightIcon className="h-6 w-6" />
              <h6 className="text-xs sm:text-md font-bold text-white">
                +2349017172856
              </h6>
            </div>
          </div>
        </div>
        <div className="menu grow w-6/12">
          <ul className="hidden sm:flex items-center justify-around px-0 text-sm">
            <li className="list">Home</li>

            <li>Menu</li>
            <li>Events</li>
            <li>Reviews</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className=" w-2/12 sm:1/12 flex sm:justify-end grow mr-4">
          <div className="relative">
            <ShoppingCartIcon className=" w-10 h-10" />
            {cart.foodItems && cart.foodItems.length > 0 && (
              <div className="bg-white rounded-full absolute top-0 right-0 w-4 h-4 text-center text-xs font-bold text-black">
                {cart.foodItems.length}
              </div>
            )}
          </div>
        </div>
        <div className="w-1/12 grow flex justify-end sm:hidden">
          <Bars3Icon
            className="w-10 h-10"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
        </div>
      </div>
      <MobileMenu showMobileMenu={showMobileMenu} />
    </nav>
  );
};

export default Navbar;

function MobileMenu({ showMobileMenu }: { showMobileMenu: boolean }) {
  if (!showMobileMenu) return null;
  return (
    <ul className="flex items-center justify-between px-4 mt-2 pb-10 text-sm text-white">
      <li className="list">Home</li>

      <li>Menu</li>
      <li>Events</li>
      <li>Reviews</li>
      <li>Blog</li>
      <li>Contact</li>
    </ul>
  );
}
