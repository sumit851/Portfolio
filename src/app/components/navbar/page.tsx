"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import "./navbar.module.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-gray-500 rounded-lg mx-auto mt-4 w-11/12 max-w-4xl">
      <div className="flex justify-around items-center h-16">
        <Link className="text-white text-xl" href="/pages/project">
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
      {/* Mobile Menu Button */}
      <div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <AlignJustify className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 rounded-lg mt-2 fixed bottom-4 right-4 w-40 shadow-lg">
          <Link className="text-white text-xl" href="/pages/project">
            Project
          </Link>
          <Link className="text-white text-xl" href="/pages/about">
            About
          </Link>
          <Link className="text-white text-xl" href="/">
            Home
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
