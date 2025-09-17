import { useState } from "react";
import Logo from "/favicon.png";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-xl md:text-2xl font-bold tracking-wide bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
            Dharm Yatra
          </h1>
        </a>

        <div className="hidden md:flex gap-8 text-lg font-medium">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative group transition-colors"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none text-gray-800 dark:text-gray-100"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden flex flex-col items-center gap-6 py-8 px-6 
                       backdrop-blur-md bg-white/80 dark:bg-gray-900/80 
                       border-t border-gray-200 dark:border-gray-700 shadow-lg"
          >
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium relative group"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-6 py-2 rounded-xl bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 
                         text-white font-semibold shadow-md hover:scale-105 transition-transform"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
