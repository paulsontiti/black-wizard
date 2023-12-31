"use client";
import React from "react";
type ButtonType = {
  label: string;
  onClick: () => void;
  disableButton?: boolean;
};
const Button = ({ label, onClick, disableButton }: ButtonType) => {
  return (
    <button
      disabled={disableButton}
      onClick={onClick}
      className={`px-4 p-2 
    text-white w-full ${
      disableButton
        ? "cursor-not-allowed bg-green-700"
        : "rounded-full bg-gradient-to-br from-green-500 via-red-500 to-black"
    }`}
    >
      {label}
    </button>
  );
};

export default Button;
