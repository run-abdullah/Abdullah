"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 lg:px-10 bg-[#0a0a0a] border-t border-[#262626]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.3em] text-[#10b981] uppercase mb-4">
            02 — Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#f5f5f5] tracking-tight">
            What I Do
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#10b981]/50 hover:bg-[#1f1f1f] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center text-[#10b981] group-hover:bg-[#10b981] group-hover:text-white transition-all">
                  <Icon size={20} />
                </div>
                <span className="text-sm text-[#f5f5f5] font-medium">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
