"use client";
import Link from "next/link";

import "./navbar.module.css";
const Navbar = () => {
  return (
    <nav className="bg-gray-500 rounded-lg mx-auto mt-4 w-11/12 max-w-4xl">
      <div className="flex justify-around items-center h-16">
        <Link
          className="text-white text-xl"
          href="https://github.com/sumit851/"
        >
          Project
        </Link>
        <Link className="text-white text-xl" href="/pages/about">
          About
        </Link>
        <Link className="text-white text-xl" href="/">
          Home
        </Link>
        <Link className="text-white text-xl" href="/pages/contact">
          contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
