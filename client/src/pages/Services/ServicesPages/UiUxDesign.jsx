import React from "react";
import { Link } from "react-router-dom";
import UIUXOurApproach from "../../Others/UIUXOurApproach";

export default function UiUxDesignHeader() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="relative w-full overflow-hidden bg-[#8B0D7A]">

        {/* ================= BASE BACKGROUND ================= */}
        <div className="absolute inset-0 bg-[#8B0D7A]" />

        {/* ================= CODE GRID ================= */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        {/* ================= LEFT SOFT BLOB ================= */}
        <div className="absolute top-1/4 left-[-12%] w-[420px] h-[420px] bg-[#8B0D7A] opacity-60 rounded-full blur-3xl" />

        {/* ================= RIGHT SOFT BLOB ================= */}
        <div className="absolute bottom-[-12%] right-[-12%] w-[480px] h-[480px] bg-[#8B0D7A] opacity-70 rounded-full blur-3xl" />

        {/* ================= CODE FLOW LINES ================= */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0 150 H300 V100 H600 V200 H900 V120 H1200"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
          />
          <path
            d="M0 360 H250 V420 H550 V320 H850 V380 H1200"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
          />
          <circle cx="300" cy="150" r="4" fill="white" />
          <circle cx="600" cy="100" r="4" fill="white" />
          <circle cx="900" cy="200" r="4" fill="white" />
          <circle cx="250" cy="360" r="4" fill="white" />
          <circle cx="550" cy="420" r="4" fill="white" />
          <circle cx="850" cy="320" r="4" fill="white" />
        </svg>

        {/* ================= DARK DEPTH OVERLAY ================= */}
        <div className="absolute inset-0 bg-black/25" />

        {/* ================= CONTENT ================= */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16 text-center flex flex-col items-center gap-5"
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            UI / UX Design
          </h1>

          <p className="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            We design intuitive interfaces and seamless user experiences using
            research-driven UX, clean UI systems, and modern design frameworks
            tailored for scalable software products.
          </p>

          {/* ================= BREADCRUMB ================= */}
          <span className="mt-2 text-sm font-medium text-white/80 tracking-wide flex flex-wrap gap-1 justify-center">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <span>•</span>
            <Link to="/services" className="hover:text-white transition">
              Services
            </Link>
            <span>•</span>
            <span className="text-white">UI / UX Design</span>
          </span>
        </div>
      </header>

      {/* ================= OUR APPROACH ================= */}
      <UIUXOurApproach />
    </>
  );
}
