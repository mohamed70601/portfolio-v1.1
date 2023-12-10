"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed border-b border-white top-0 left-0 right-0 z-10 backdrop-blur w-full">
      <div className="flex flex-wrap items-center justify-between px-4 py-2 max-auto  bg-black w-full bg-opacity-25">
        {/*  <nav className="fixed top-0 left-0 right-0 backdrop-blur backdrop-filter border-b border-white">
       <div className="flex flex-wrap items-center justify-between mx-auto p-8 "> */}
        <Link
          href={"/"}
          className="lg:text-4xl md:text-2xl sm:text-xl font-bold hover:text-stone-400"
        >
          PORTFOLIO
        </Link>
        <div className="mobile-menu md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)}>
              <CiMenuBurger className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)}>
              <IoCloseOutline className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block">
          <ul className="flex flex-row justify-between text-bold lg:text-xl md:text-base sm:text-sm">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
