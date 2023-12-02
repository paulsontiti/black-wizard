import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-50">
      <div className="flex justify-around py-4">
        <div className="hidden md:block ">
          <input className="searchBox" placeholder="search..." />
        </div>
        <div>Design</div>
        <div className="flex gap-6">
          <a>f</a>
          <a>X</a>
          <a>Y</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
