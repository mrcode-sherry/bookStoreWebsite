import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';

function Navbar() {

  const [authUser, setAuthUser] = useAuth()
        console.log(authUser)

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="bg-base-100 z-50 bg-gray-100 sticky l-0 top-0 shadow-lg md:mb-20 mb-8 max-w-screen-2xl container mx-auto">
      {/* Navbar Container */}
      <div className="px-20 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold text-primary cursor-pointer">
          bookStore
        </Link>

        {/* Mobile Menu Toggle (Mobile View) */}
        <div className="lg:hidden flex items-center space-x-2">
          {/* Logo and Menu Toggle in Mobile View */}
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navbar Links, Search Bar, and Mode Toggle (Desktop View) */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="/" className="hover:text-white hover:bg-gray-800 p-1 rounded-lg duration-300">Home</a>
          <a href="/course" className="hover:text-white hover:bg-gray-800 p-1 rounded-lg duration-300">Course</a>
          <a href="/contact" className="hover:text-white hover:bg-gray-800 p-1 rounded-lg duration-300">Contact</a>
          <a href="/about" className="hover:text-white hover:bg-gray-800 p-1 rounded-lg duration-300">About</a>

          {/* Search Bar (Only on Desktop) */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-2 rounded-lg border focus:outline-none"
            />
            <svg
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 cursor-pointer dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4a7 7 0 11-7 7 7 7 0 017-7zM21 21l-6-6"
              />
            </svg>
          </div>

          {/* Login Button */}
          {authUser ?(<Logout/>):(
            <Link to="/login" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600 duration-200 focus:outline-none">
            Login
          </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} px-5 bg-base-100`}>
        <div className="flex flex-col p-4 space-y-3">
          <a href="/" className="hover:text-white hover:bg-gray-800 p-1 rounded-lg duration-300">Home</a>
          <a href="/course" className="hover:text-white hover:bg-gray-800 p-1 rounded-lg duration-300">Course</a>
          <a href="/contact" className="hover:text-white hover:bg-gray-800 p-1 rounded-lg duration-300">Contact</a>
          <a href="/about" className="hover:text-white hover:bg-gray-800 p-1 rounded-lg duration-300">About</a>

          {/* Login Button for Mobile */}
          {authUser ?(<Logout/>):(
            <Link to="/login" className="bg-black text-center text-white px-4 py-2 rounded-lg hover:bg-gray-600 duration-200 focus:outline-none">
            Login
          </Link>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
