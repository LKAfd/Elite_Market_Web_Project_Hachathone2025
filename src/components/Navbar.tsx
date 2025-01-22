"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faSearch,
  faShoppingCart,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#252b42] text-white py-2 sm:py-3 md:py-4 lg:py-5">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center space-x-4 text-sm sm:text-base md:text-lg lg:text-xl">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              (225) 555-0118
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              michelle.rivera@example.com
            </span>
          </div>
          {/* Promo and Social Links */}
          <div className="flex flex-wrap items-center justify-center space-x-6">
            <span>Follow Us and get a chance to win 80% off</span>
          </div>
          <div className="flex space-x-2">
            <span>Follow Us: </span>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Brand Logo */}
          <div className="text-2xl font-bold text-blue-900">
            <Link href="/">Bandage</Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link href="/shop" className="text-gray-600 hover:text-blue-600">
                Shop
              </Link>
              {/* Dropdown */}
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded">
                <li>
                  <Link
                    href="/shop/men"
                    className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/women"
                    className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                  >
                    Women
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/kids"
                    className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                  >
                    Kids
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Utility Icons */}
          <div className="hidden lg:flex items-center space-x-4 text-blue-600">
            <FontAwesomeIcon icon={faUser} />
            <Link href="/login" className="hover:text-blue-800">
              Login / Register
            </Link>
            <Link href="/search" className="hover:text-blue-800">
              <FontAwesomeIcon icon={faSearch} />
            </Link>
            <Link href="/cart" className="hover:text-blue-800">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="ml-1">(1)</span>
            </Link>
            <Link href="/wishlist" className="hover:text-blue-800">
              <FontAwesomeIcon icon={faHeart} />
              <span className="ml-1">(1)</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className="space-y-4 px-4 py-6">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
