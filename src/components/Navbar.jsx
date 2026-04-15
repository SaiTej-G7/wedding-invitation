import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "../styles/navbar.css";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#countdown", label: "Save the Date" },
  { href: "#details", label: "Details" },
  { href: "#story", label: "Our Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#rsvp", label: "RSVP" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`custom-navbar fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container d-flex justify-content-between align-items-center">

        {/* Logo */}
        <a href="#home" className="logo serif">
          V <span>&</span> J
        </a>

        {/* Desktop Nav */}
        <div className="d-none d-md-flex gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link-custom">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="menu-btn d-md-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}