import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/services">Services</NavLink>
      </li>
      <li>
        <NavLink href="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink href="/about">About</NavLink>
      </li>
      <li>
        <Link
          href="/login"
          className="btn btn-sm btn-primary btn-outline shadow-none text-lg md:hidden mb-3 w-2/3"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          href="/register"
          className="btn btn-sm btn-primary btn-outline shadow-none text-lg md:hidden w-2/3"
        >
          Register
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-280 mx-auto w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menu}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src="/logo.png" alt="Camera" width={40} height={40} />
          <span className="text-amber-800 dark:text-primary font-sans antialiased">
            CameraCrew
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end gap-2">
        <Link
          href="/login"
          className="btn btn-sm btn-primary btn-outline shadow-none text-lg hidden md:flex"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="btn btn-sm btn-primary btn-outline shadow-none text-lg hidden md:flex"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
