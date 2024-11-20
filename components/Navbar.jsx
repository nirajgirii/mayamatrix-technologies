"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed w-full z-50 transition-all duration-300 
      ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <Image
              src="/mayamatrix_technologies_private_limited_logo.png"
              alt="MayaMatrixLogo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <Link
              href="/"
              className={`text-xl font-bold 
              ${isScrolled ? "text-purple-600" : "text-white"}`}
            >
              MayaMatrix
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-6"
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.href} isScrolled={isScrolled}>
                {link.label}
                {link.label === "Contact" && (
                  <ArrowRight className="ml-2 inline-block" size={18} />
                )}
              </NavLink>
            ))}
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md focus:outline-none 
              ${isScrolled ? "text-purple-600" : "text-white"}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-purple-600 z-40 md:hidden"
          >
            <div className="flex flex-col h-full justify-center items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.div key={index} variants={linkVariants}>
                  <MobileNavLink
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                    {link.label === "Contact" && (
                      <ArrowRight className="ml-2 inline-block" size={24} />
                    )}
                  </MobileNavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ href, children, isScrolled }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className={`relative group font-medium transition-colors duration-300
        ${
          isScrolled
            ? "text-purple-600 hover:text-purple-800"
            : "text-white hover:text-purple-200"
        }`}
      >
        {children}
        <span
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 
          transition-all duration-300 group-hover:w-full"
        />
      </Link>
    </motion.div>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-white text-3xl font-bold relative group"
    >
      {children}
      <span
        className="absolute bottom-0 left-0 w-0 h-1 bg-white 
        transition-all duration-300 group-hover:w-full"
      />
    </Link>
  );
}
