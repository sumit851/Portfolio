"use client";

import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";

const Responsive = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleMenu}
          className="bg-gray-800 p-3 rounded-full shadow-lg text-white focus:outline-none"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <AlignJustify className="h-6 w-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-4 bg-gray-800 rounded-lg shadow-lg w-48 z-40">
          <div className="flex flex-col space-y-2 p-4">
            <Link href="https://github.com/sumit851/">
              <span className="text-white hover:text-yellow-300 transition-colors cursor-pointer block">
                Project
              </span>
            </Link>
            <Link href="/pages/about">
              <span className="text-white hover:text-yellow-300 transition-colors cursor-pointer block">
                About
              </span>
            </Link>
            <Link href="/">
              <span className="text-white hover:text-yellow-300 transition-colors cursor-pointer block">
                Home
              </span>
            </Link>
            <Link href="/pages/contact">
              <span className="text-white hover:text-yellow-300 transition-colors cursor-pointer block">
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Responsive;
