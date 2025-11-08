"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Users,
  Heart,
  Calendar,
  Phone,
  User,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

const chapters = [
  { name: "Salem", href: "/chapters/salem" },
  { name: "Velur", href: "/chapters/velur" },
  { name: "Elampillai", href: "/chapters/elampillai" },
];

const navItems = [
  { name: "எங்களைப் பற்றி", href: "/about", icon: Users },
  { name: "நிகழ்வுகள்", href: "/events", icon: Calendar },
  { name: "சமூக ஊடகம்", href: "/social", icon: Heart },
  { name: "உறுப்பினர்கள்", href: "/members", icon: Heart },
  { name: "தொடர்பு", href: "/contact", icon: Phone },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  // const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-[80px] h-16"
            >
              <Image
                src={"/assets/imaam-logo.png"}
                alt="imaam-logo"
                loading="lazy"
                fill
                quality={100}
                className="object-cover"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-[#90000a] ${pathname === item.href
                  ? "text-[#90000a]"
                  : "text-gray-700 dark:text-gray-300"
                  }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#90000a]"
                  />
                )}
              </Link>
            ))}

            {/* Chapters Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsChaptersOpen(!isChaptersOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#90000a] transition-colors"
              >
                <span>ஜோன்ஸ்</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isChaptersOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {isChaptersOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2"
                  >
                    {chapters.map((chapter) => (
                      <Link
                        key={chapter.name}
                        href={chapter.href}
                        onClick={() => setIsChaptersOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#90000a] transition-colors"
                      >
                        {chapter.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            {/* <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 p-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button> */}

            {/* Login Button */}
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 p-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-[#90000a] transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 mt-2 py-2"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${pathname === item.href
                    ? "text-[#90000a] bg-emerald-50 dark:bg-[#90000a]/20"
                    : "text-gray-700 dark:text-gray-300"
                    }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}

              <div className="px-4 py-2">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  ஜோன்ஸ்
                </div>
                {chapters.map((chapter) => (
                  <Link
                    key={chapter.name}
                    href={chapter.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    {chapter.name}
                  </Link>
                ))}
              </div>

              <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span>Login</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
