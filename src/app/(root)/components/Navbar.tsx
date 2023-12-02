"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    label: "About me",
    href: "#about-me",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact me",
    href: "#contact-me",
  },
];
const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-opacity-100 bg-[#121212] px-4">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="mobile-menu block md:hidden">
          {navBarOpen ? (
            <CloseNavbarOverLayButton setNavBarOpen={setNavBarOpen} />
          ) : (
            <OpenNavbarOverLayButton setNavBarOpen={setNavBarOpen} />
          )}
        </div>
        <MdNavBar />
        {navBarOpen && <NavBarOverLay setNavBarOpen={setNavBarOpen} />}
      </div>
    </nav>
  );
};

export default Navbar;

function OpenNavbarOverLayButton({
  setNavBarOpen,
}: {
  setNavBarOpen: (open: boolean) => void;
}) {
  return (
    <button
      onClick={() => setNavBarOpen(true)}
      className="flex items-center py-1 px-1 rounded
hover:text-white hover:border-orange-500 border-[2px]
border-pink-500 text-orange-500"
    >
      <Bars3Icon className="w-7 h-7 font-bold" />
    </button>
  );
}
function CloseNavbarOverLayButton({
  setNavBarOpen,
}: {
  setNavBarOpen: (open: boolean) => void;
}) {
  return (
    <button
      onClick={() => setNavBarOpen(false)}
      className="flex items-center py-1 px-1 rounded border-[2px] border-white text-orange-500"
    >
      <XMarkIcon className="w-7 h-7" />
    </button>
  );
}

function MdNavBar() {
  return (
    <div className="menu hidden md:block md:w-auto" id="navbar">
      <ul className="flex gap-3">
        {navLinks.map((link) => (
          <li key={link.label}>
            <NavLink href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavBarOverLay({
  setNavBarOpen,
}: {
  setNavBarOpen: (open: boolean) => void;
}) {
  return (
    <div className="block md:hidden w-[300px]">
      <ul className="flex gap-1 justify-center items-center">
        {navLinks.map((link) => (
          <li key={link.label}>
            <NavLink
              href={link.href}
              label={link.label}
              setNavBarOpen={setNavBarOpen}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
function NavLink({
  href,
  label,
  setNavBarOpen,
}: {
  href: string;
  label: string;
  setNavBarOpen?: (open: boolean) => void;
}) {
  return (
    <Link
      onClick={() => setNavBarOpen && setNavBarOpen(false)}
      className="
     rounded md:p-0 hover:text-orange-500
    block py-2 pl-3 pr-4 text-yellow-500"
      href={href}
    >
      {label}
    </Link>
  );
}
function Logo() {
  return (
    <span
      className={`text-transparent bg-clip-text font-semibold text-2xl sm:text-4xl 
      bg-gradient-to-br from-orange-500 via-orange-500 to-orange-500
      `}
    >
      Black Wizard
    </span>
  );
}
