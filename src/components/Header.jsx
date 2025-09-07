import { useState } from "react";
import Logo from "/favicon.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <a href="#home" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-10 w-10 rounded-full shadow-md" />
          <h1 className="text-xl md:text-2xl font-bold tracking-wide bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Dharm Yatra
          </h1>
        </a>
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <a href="#hero" className="hover:text-yellow-400 transition-colors duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">
            About Us
          </a>
          <a href="#services" className="hover:text-yellow-400 transition-colors duration-300">
            Services
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">
            Contact
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <span className="text-2xl">&times;</span>
          ) : (
            <span className="text-2xl">&#9776;</span>
          )}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-blue-800 text-lg font-medium">
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
            Home
          </a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
            About Us
          </a>
          <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
            Services
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
