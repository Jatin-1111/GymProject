'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Home, User, Briefcase, Users, Mail, Bot, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Updated function for smooth scrolling
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-60">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Section - Logo and Brand */}
            <div className="flex items-center space-x-3">
              <Image 
                src="/gymlogo.png" 
                alt="Gym Logo" 
                width={56} 
                height={56} 
                className="h-14 w-auto" 
              />
              <div className="text-2xl font-[Almendra] font-bold text-red-600">
                Armour Zone
              </div>
            </div>

            {/* Desktop Navigation - Center Section */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
              <ul className="flex items-center space-x-6">
                <li className="relative group">
                  <a 
                    className=" text-gray-300 font-[Poppins] transition duration-200 cursor-pointer flex items-center space-x-2 relative"
                    onClick={() => handleNavClick('home')}
                  >
                    <span>Home</span>
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
                <li className="relative group">
                  <a 
                    className=" text-gray-300 font-[Poppins] transition duration-200 cursor-pointer flex items-center space-x-2 relative"
                    onClick={() => handleNavClick('about')}
                  >
                    <span>About</span>
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
                <li className="relative group">
                  <a 
                    className=" text-gray-300 font-[Poppins] transition duration-200 cursor-pointer flex items-center space-x-2 relative"
                    onClick={() => handleNavClick('services')}
                  >
                    <span>Services</span>
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
                <li className="relative group">
                  <a 
                    className=" text-gray-300 font-[Poppins] transition duration-200 cursor-pointer flex items-center space-x-2 relative"
                    onClick={() => handleNavClick('trainers')}
                  >
                    <span>Our Trainers</span>
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
                <li className="relative group">
                  <a 
                    className=" text-gray-300 font-[Poppins] transition duration-200 cursor-pointer flex items-center space-x-2 relative"
                    onClick={() => handleNavClick('contact')}
                  >
                    <span>Contact Us</span>
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
                
              </ul>
            </div>

            {/* Right Section - Desktop Login Button */}
            <a 
              href="https://gym-frontend-taupe.vercel.app/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center font-[Poppins] space-x-2 bg-red-700 hover:bg-red-800 text-white hover:text-white px-7 py-2 rounded-lg font-semibold transition-all duration-300 border border-red-700 hover:border-red-800"
            >
              <span>USE AI</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 z-70"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span 
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-black text-white shadow-xl z-60 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <Image 
              src="/gymlogo.png" 
              alt="Gym Logo" 
              width={40} 
              height={40} 
              className="h-10 w-auto" 
            />
            <div className="text-xl font-bold text-red-600">
              Armour Zone
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-0.5"></span>
            <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-0.5"></span>
          </button>
        </div>

        {/* Menu Content */}
        <div className="p-6">
          <ul className="flex flex-col space-y-2">
            <li>
              <a 
                className="block flex items-center space-x-3 text-white hover:text-red-500 transition duration-200 cursor-pointer py-3 px-4 rounded-lg hover:bg-gray-800"
                onClick={() => handleNavClick('home')}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a 
                className="block flex items-center space-x-3 text-white hover:text-red-500 transition duration-200 cursor-pointer py-3 px-4 rounded-lg hover:bg-gray-800"
                onClick={() => handleNavClick('about')}
              >
                <User className="w-5 h-5" />
                <span>About</span>
              </a>
            </li>
            <li>
              <a 
                className="block flex items-center space-x-3 text-white hover:text-red-500 transition duration-200 cursor-pointer py-3 px-4 rounded-lg hover:bg-gray-800"
                onClick={() => handleNavClick('services')}
              >
                <Briefcase className="w-5 h-5" />
                <span>Services</span>
              </a>
            </li>
            <li>
              <a 
                className="block flex items-center space-x-3 text-white hover:text-red-500 transition duration-200 cursor-pointer py-3 px-4 rounded-lg hover:bg-gray-800"
                onClick={() => handleNavClick('trainers')}
              >
                <Users className="w-5 h-5" />
                <span>Our Trainers</span>
              </a>
            </li>
            <li>
              <a 
                className="block flex items-center space-x-3 text-white hover:text-red-500 transition duration-200 cursor-pointer py-3 px-4 rounded-lg hover:bg-gray-800"
                onClick={() => handleNavClick('contact')}
              >
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
            </li>
            
          </ul>

          {/* Login Button */}
          <div className="mt-8 pt-6 border-t mr-20 border-gray-700">
            <a 
              href="https://gym-delta-wine.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex mr-20 items-center justify-center space-x-2 bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-red-700 hover:border-red-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="w-5 h-5" />
              <span>USE AI</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;