import React from "react";
import { Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTAStatsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#8B0D7A]">

      {/* ===== GEOMETRIC SHAPE BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[55%] h-[65%]"
          style={{
            background: "linear-gradient(135deg, #D66ACF, #A61E8E)",
            clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 80%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[60%] h-[60%]"
          style={{
            background: "linear-gradient(135deg, #E589DA, #B33AA2)",
            clipPath: "polygon(30% 0, 100% 0, 100% 70%, 55% 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[60%] h-[70%]"
          style={{
            background: "linear-gradient(135deg, #B31997, #7A0E6A)",
            clipPath: "polygon(0 30%, 70% 0, 100% 100%, 0 100%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[55%] h-[65%]"
          style={{
            background: "linear-gradient(135deg, #CF4CB9, #8B0D7A)",
            clipPath: "polygon(30% 0, 100% 40%, 70% 100%, 0 100%)",
          }}
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-16 sm:py-20 text-center text-white">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Let’s Build Your Next <br />
          <span className="text-white/90">Big Idea Together</span>
          <Rocket className="inline-block ml-2 mb-1" size={28} />
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl mx-auto text-white/80 text-sm sm:text-base leading-relaxed">
          We help businesses turn ideas into scalable, secure and
          high-performance software solutions.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3 bg-white text-[#8B0D7A] font-semibold rounded-full hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Start Your Project
          </Link>

          <Link
            to="/services"
            className="px-8 py-3 border border-white text-white rounded-full font-semibold hover:bg-white
              hover:text-[#8B0D7A] transition inline-flex items-center gap-2 text-sm sm:text-base"
          >
            Explore Services <ArrowRight size={16} />
          </Link>
        </div>

        {/* Divider */}
        <div className="my-10 sm:my-12 h-px w-full bg-white/20" />

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6">
          <Stat number="10+" label="Projects Completed" />
          <Stat number="6+" label="Happy Clients" />
          <Stat number="7★" label="Delivery Project" />
          <Stat number="24/7" label="Support Available" />
        </div>
      </div>
    </section>
  );
}

/* ===== STAT ITEM ===== */
function Stat({ number, label }) {
  return (
    <div className="text-center">
      <h3 className="text-3xl sm:text-4xl font-bold text-white">
        {number}
      </h3>
      <p className="mt-1 text-white/80 text-xs sm:text-sm">
        {label}
      </p>
    </div>
  );
}
