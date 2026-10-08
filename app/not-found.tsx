import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Accent glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Big 404 */}
        <h1 className="text-[8rem] md:text-[12rem] font-light text-[#f5f5f5] tracking-tighter leading-none">
          4<span className="text-[#10b981]">0</span>4
        </h1>

        {/* Message */}
        <p className="text-xs tracking-[0.3em] text-[#10b981] uppercase mb-4 mt-6">
          Page Not Found
        </p>
        <h2 className="text-2xl md:text-3xl font-light text-[#f5f5f5] tracking-tight mb-4">
          Oops! This page doesn't exist.
        </h2>
        <p className="text-base text-[#a3a3a3] max-w-md mx-auto mb-10">
          The page you're looking for might have been moved, or it never
          existed. Let's get you back on track.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#10b981] text-white text-sm px-6 py-3 rounded-full hover:bg-[#34d399] transition-colors font-medium"
          >
            <FiHome size={16} /> Back to Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm text-[#f5f5f5] border border-[#262626] px-6 py-3 rounded-full hover:border-[#10b981] hover:text-[#10b981] transition-colors"
          >
            <FiArrowLeft size={16} /> Contact Me
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-xs text-[#737373] mt-16 tracking-wide">
          Error 404 — Abdullah Riaz Portfolio
        </p>
      </div>
    </main>
  );
}
