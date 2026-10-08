"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 px-6 lg:px-10 bg-[#0a0a0a] border-t border-[#262626]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.3em] text-[#10b981] uppercase mb-4">
            04 — Education
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#f5f5f5] tracking-tight">
            Education
          </h2>
        </motion.div>

        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-[#141414] border border-[#262626]"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-medium text-[#f5f5f5]">
                  {edu.degree}
                </h3>
                <p className="text-sm text-[#10b981] mt-1">{edu.institute}</p>
              </div>
              <span className="text-xs text-[#737373] tracking-wide">
                {edu.period}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
