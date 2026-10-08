"use client";

import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "@/lib/data";
import Logo from "../ui/Logo";

export default function Footer() {
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-[#262626] bg-[#0a0a0a] px-6 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <span className="text-sm text-[#a3a3a3]">
            © {year} {personalInfo.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-9 h-9 rounded-full border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:text-[#10b981] hover:border-[#10b981] transition-all"
            aria-label="Email"
          >
            <FiMail size={16} />
          </a>
          <a
            href="https://github.com/run-abdullah"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:text-[#10b981] hover:border-[#10b981] transition-all"
            aria-label="GitHub"
          >
            <FiGithub size={16} />
          </a>

        </div>
      </div>
    </footer>
  );
}
