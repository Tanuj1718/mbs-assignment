import React from "react";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">GameZy</div>

          <div className="hidden md:flex space-x-4 hover:cursor-pointer">
            <Link to="AboutUs" smooth={true} 
             className="text-white hover:text-gray-300">
              About
            </Link>
            <Link to="media" smooth={true} className="text-white hover:text-gray-300">
              Media
            </Link>
            <Link to="news" smooth={true} className="text-white hover:text-gray-300">
              News
            </Link>
            <Link to="purchase" smooth={true} className="text-white hover:text-gray-300">
              Purchase
            </Link>
            <Link to="contact" smooth={true} className="text-white hover:text-gray-300">
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button id="menu-toggle" className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div id="mobile-menu" className="md:hidden bg-gray-800 p-4">
        <Link to="about" smooth={true} className="block text-white mb-2">
          About
        </Link>
        <Link to="media" smooth={true} className="block text-white mb-2">
          Media
        </Link>
        <Link to="news" smooth={true} className="block text-white mb-2">
          News
        </Link>
        <Link to="purchase" smooth={true} className="block text-white mb-2">
          Purchase
        </Link>
        <Link to="contact" smooth={true} className="block text-white">
          Contact Us
        </Link>
      </div>
    </>
  );
}

export default Navbar;
