import React from "react";
import { Link } from "react-router-dom";

import HowWeWork from "../Public/HowWeWork.jsx";
import HeroSection from "../Public/HeroSection.jsx";
import Cta from "../About/Cta.jsx";
import Pricing from "../Public/Pricing.jsx";
import Software from "../Public/Software.jsx";
import FAQSection from "../Public/FAQSection.jsx";

export default function Home() {
  return (
    <>
      {/* ================= HOME HERO SECTION ================= */}
      <section className="relative w-full min-h-screen bg-white overflow-hidden">

        {/* ===== BACKGROUND SHAPES (SAME STYLE AS HowWeWork) ===== */}
        <div className="absolute inset-0 pointer-events-none">

          {/* Top Left Blob */}
          <div
            className="
              absolute -top-24 -left-24
              w-[260px] h-[260px]
              sm:w-[320px] sm:h-[320px]
              lg:w-[420px] lg:h-[420px]
              bg-[#8B0D7A]/15
              rounded-full
              blur-3xl
            "
          />

          {/* Bottom Right Blob */}
          <div
            className="
              absolute -bottom-24 -right-24
              w-[260px] h-[260px]
              sm:w-[320px] sm:h-[320px]
              lg:w-[420px] lg:h-[420px]
              bg-[#6F0A60]/15
              rounded-full
              blur-3xl
            "
          />

          {/* Center Glow */}
          <div
            className="
              absolute top-1/2 left-1/2
              w-[200px] h-[200px]
              sm:w-[240px] sm:h-[240px]
              lg:w-[280px] lg:h-[280px]
              bg-[#8B0D7A]/10
              rounded-full
              blur-3xl
              -translate-x-1/2 -translate-y-1/2
            "
          />

          {/* Dotted Pattern Left */}
          <div
            className="
              absolute top-24 left-8
              w-[120px] h-[120px]
              sm:w-[140px] sm:h-[140px]
              lg:w-[160px] lg:h-[160px]
              opacity-25 hidden md:block
            "
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(139,13,122,0.6) 1.5px, transparent 1.5px)",
              backgroundSize: "12px 12px",
            }}
          />

          {/* Dotted Pattern Right */}
          <div
            className="
              absolute bottom-24 right-10
              w-[130px] h-[130px]
              sm:w-[150px] sm:h-[150px]
              lg:w-[180px] lg:h-[180px]
              opacity-20 hidden md:block
            "
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(139,13,122,0.5) 1.5px, transparent 1.5px)",
              backgroundSize: "14px 14px",
            }}
          />

          {/* Diagonal Accent Lines */}
          <div className="absolute top-36 right-32 w-[160px] h-px bg-[#8B0D7A]/30 rotate-45 hidden lg:block" />
          <div className="absolute top-44 right-40 w-[220px] h-px bg-[#8B0D7A]/20 rotate-45 hidden lg:block" />
        </div>

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left text-[#0b2f32] max-w-xl">
            <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[50px] font-bold leading-tight">
              Web Solutions <br />
              Built for Digital Growth
            </h1>

            <p className="mt-5 text-[16px] sm:text-[17px] md:text-[18px] text-gray-700 leading-relaxed">
              We build high-performance websites and IT solutions that help
              businesses grow and scale securely.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/about"
                className="px-10 py-3.5 bg-[#8B0D7A] text-white font-semibold rounded-lg hover:bg-[#6F0A60] transition text-center"
              >
                Get Started
              </Link>

              <a
                href="https://wa.me/9718608520"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-3.5 bg-white text-[#8B0D7A] font-semibold rounded-lg border border-[#8B0D7A] hover:bg-[#8B0D7A] hover:text-white transition text-center"
              >
                Join Now
              </a>
            </div>

            <p className="mt-7 text-sm sm:text-base text-[#8B0D7A] font-medium">
              Trusted • Scalable • Technology-Driven
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/img/image.png"
              alt="Devure Technology Dashboard"
              className="w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <HeroSection />
      <HowWeWork />
      <Cta />
      <Pricing />
      <Software />
      <FAQSection />
    </>
  );
}
