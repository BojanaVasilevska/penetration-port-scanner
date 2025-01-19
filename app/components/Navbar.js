"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome, AiOutlineLock, AiOutlineScan } from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand Name */}
        <h1 className="text-xl font-extrabold tracking-wide">
          <Link href="/" className="hover:text-indigo-400">
            Penetration Test Tool
          </Link>
        </h1>

        {/* Hamburger Button for Mobile */}
        <button
          className="xl:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`xl:flex ${
            isOpen ? "block" : "hidden"
          } absolute xl:static top-16 left-0 w-full xl:w-auto bg-gray-900 xl:bg-transparent shadow-lg xl:shadow-none`}
        >
          <ul className="flex flex-col xl:flex-row xl:space-x-4 xl:space-y-0 px-6 xl:px-0 py-4 xl:py-0">
            <li>
              <Link
                href="/"
                className="flex items-center text-lg font-medium hover:text-indigo-400 transition duration-200 xl:mx-2"
              >
                <AiOutlineHome className="mr-2 text-2xl" />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/port-scanner"
                className="flex items-center text-lg font-medium hover:text-indigo-400 transition duration-200 xl:mx-2"
              >
                <AiOutlineScan className="mr-2 text-2xl" />
                Port Scanner
              </Link>
            </li>
            <li>
              <Link
                href="/vulnerability-scanner"
                className="flex items-center text-lg font-medium hover:text-indigo-400 transition duration-200 xl:mx-2"
              >
                <AiOutlineLock className="mr-2 text-2xl" />
                Vulnerability Scanner
              </Link>
            </li>
            <li>
              <Link
                href="/password-cracker"
                className="flex items-center text-lg font-medium hover:text-indigo-400 transition duration-200 xl:mx-2"
              >
                <AiOutlineLock className="mr-2 text-2xl" />
                Password Cracker
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
