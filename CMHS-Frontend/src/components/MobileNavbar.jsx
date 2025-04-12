import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MobileNavbar = ({ className = "" }) => {
  // State for managing menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Navigation items array
  const navItems = [
    { href: "#top", label: "Home" },
    { href: "#resources", label: "Resources" },
    { href: "#schemes", label: "Government Schemes" },
    { href: "#apply", label: "Wanna Apply" },
  ];

  // Handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Smooth scroll function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false); // Close menu after clicking

    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      // Calculate header height to offset scroll position
      const headerHeight = document.querySelector("nav")?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Animation variants for the menu
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  // Animation variants for menu items
  const menuItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <nav className={`relative ${className} md:hidden`} role='navigation'>
      {/* Hamburger menu button with ARIA labels */}
      <motion.button
        className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label='Toggle navigation menu'
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          initial={false}
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className='h-6 w-6 text-black' />
          ) : (
            <Menu className='h-6 w-6 text-black' />
          )}
        </motion.div>
      </motion.button>

      {/* Mobile menu overlay with semi-transparent background */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/50 dark:bg-black/70 z-40'
              aria-hidden='true'
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding menu panel */}
            <motion.div
              ref={menuRef}
              initial='closed'
              animate='open'
              exit='closed'
              variants={menuVariants}
              className='fixed top-0 right-0 h-screen w-64 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto'
              role='dialog'
              aria-modal='true'
              aria-label='Navigation menu'
            >
              {/* Menu header with close button */}
              <div className='flex justify-end p-4 border-b dark:border-gray-700'>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label='Close navigation menu'
                >
                  <X className='h-6 w-6 text-gray-600 dark:text-gray-300' />
                </motion.button>
              </div>

              {/* Navigation links */}
              <div className='flex flex-col space-y-1 p-4'>
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    custom={i}
                    variants={menuItemVariants}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className='px-4 py-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500'
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>


            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavbar;
