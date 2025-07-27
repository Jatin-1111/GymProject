'use client';

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        <img src="/gymlogo.png" alt="Gym Logo" className="h-14 w-auto" />
        <div className="ml-18 text-2xl font-bold text-red-600 absolute left-4">
          Armour Zone
        </div>

        {/* Centered Nav Links */}
        <ul className="flex space-x-10 mx-auto">
          <li>
            <a href="/" className="hover:text-red-500 text-gray-300 transition duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="/About" className="hover:text-red-500 text-gray-300 transition duration-200">
              About
            </a>
          </li>
          <li>
            <a href="/Services" className="hover:text-red-500 text-gray-300 transition duration-200">
              Services
            </a>
          </li>
          <li>
            <a href="/Trainers" className="hover:text-red-500 text-gray-300 transition duration-200">
              Our Trainers
            </a>
          </li>
          <li>
            <a href="/Contact" className="hover:text-red-500 text-gray-300 transition duration-200">
              Contact Us
            </a>
          </li>
        </ul>

        <button className="bg-red-700 hover:bg-red-800 text-black hover:text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 border border-black hover:border-black">
          Login/Sign-in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

