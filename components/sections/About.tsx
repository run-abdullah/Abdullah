"use client";

import { motion } from "framer-motion";
import { aboutText, personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 lg:px-10 bg-[#0a0a0a] border-t border-[#262626]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] text-[#10b981] uppercase mb-4">
            01 — About
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#f5f5f5] tracking-tight mb-8">
            About Me
          </h2>
          <p className="text-base md:text-lg text-[#a3a3a3] leading-relaxed max-w-3xl">
            {aboutText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
