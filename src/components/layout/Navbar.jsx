import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { profile } from "../../config/data";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between py-4">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#hero");
          }}
          className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white"
        >
          {profile.name.split(" ")[0]}
          <span className="text-amber-500">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? <FaSun size={15} /> : <FaMoon size={15} />}
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
            className="px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Brand Deal
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-200"
          >
            {theme === "dark" ? <FaSun size={13} /> : <FaMoon size={13} />}
          </button>
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-200"
          >
            <FaBars size={14} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-neutral-950 lg:hidden"
          >
            <div className="flex justify-between items-center px-6 h-18 py-4 border-b border-black/5 dark:border-white/5">
              <span className="text-xl font-semibold text-neutral-900 dark:text-white">
                {profile.name.split(" ")[0]}
                <span className="text-amber-500">.</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-200"
              >
                <FaTimes size={14} />
              </button>
            </div>
            <motion.ul
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                closed: {},
              }}
              className="flex flex-col items-center justify-center gap-6 py-16"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 15 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-2xl font-medium text-neutral-800 dark:text-neutral-100"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 15 },
                }}
                className="mt-4"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#contact");
                  }}
                  className="px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-base font-medium"
                >
                  Brand Deal
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}