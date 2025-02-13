"use client";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    //toggle dark mode
    
    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-32">

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 md:p-8">
            {["Home", "Data", "Methodology", "Results", "Discussion"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 dark:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-4">
          {["Home", "Data", "Methodology", "Results", "Discussion"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
    )
};