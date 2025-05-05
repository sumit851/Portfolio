"use client";
import Link from "next/link";

import "./navbar.module.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link
          className="nav-link"
          href="/pages/project"
        >
          Project
        </Link>
        <Link className="nav-link" href="/pages/about">
          About
        </Link>
        <Link className="nav-link" href="/">
          Home
        </Link>
        <Link className="nav-link" href="/pages/ml-research">
         Research
        </Link>
        <Link className="nav-link" href="/pages/blog">
          Blog
        </Link>
        <Link className="nav-link" href="/pages/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
