"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
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
            03 — Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#f5f5f5] tracking-tight">
            Where I've Worked
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-8 border-l border-[#262626]"
            >
              {/* Dot */}
              <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-[#10b981] ring-4 ring-[#10b981]/20" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-[#f5f5f5]">
                    {job.role}
                  </h3>
                  <p className="text-sm text-[#10b981] mt-1">{job.company}</p>
                </div>
                <span className="text-xs text-[#737373] tracking-wide">
                  {job.period}
                </span>
              </div>

              <ul className="space-y-2">
                {job.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-[#a3a3a3] leading-relaxed flex gap-3"
                  >
                    <span className="text-[#10b981] mt-1.5">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
