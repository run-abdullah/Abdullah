"use client";

import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { navLinks, personalInfo } from "@/lib/data";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/85 backdrop-blur-md border-b border-[#262626]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Logo size={36} />
        </a>


        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm text-[#a3a3a3] hover:text-[#10b981] transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="hidden md:flex items-center gap-1.5 text-sm text-white bg-[#10b981] rounded-full px-5 py-2 hover:bg-[#34d399] transition-all font-medium"
        >
          Book A Call <FiArrowUpRight />
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#f5f5f5]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-[#262626] bg-[#0a0a0a] px-6 py-5">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-[#a3a3a3] hover:text-[#10b981]"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-[#10b981] font-medium"
              >
                Book A Call ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
