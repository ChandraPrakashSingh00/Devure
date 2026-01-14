import React from "react";
import { Link } from "react-router-dom";
import DigitalMarketingOurApproach from "../../Others/DigitalMarketingOurApproach";

export default function DigitalMarketingHeader() {
  return (
    <>
      <header className="relative w-full overflow-hidden bg-white">

        {/* ================= BASE GRADIENT BACKGROUND ================= */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #8B0D7A 0%, #9C1A86 50%, #6F0B61 100%)",
          }}
        />

        {/* ================= LEFT SOFT BLOB ================= */}
        <div className="absolute top-1/4 left-[-10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />

        {/* ================= RIGHT SOFT BLOB ================= */}
        <div className="absolute bottom-[-12%] right-[-12%] w-[500px] h-[500px] bg-white/15 rounded-full blur-3xl" />

        {/* ================= GRID LINES ================= */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        {/* ================= FLOW LINES ================= */}
        <svg
          className="absolute inset-0 w-full h-full opacity-25"
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
        <div className="absolute inset-0 bg-black/20" />

        {/* ================= CONTENT ================= */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16 text-center flex flex-col items-center gap-5"
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Digital Marketing
          </h1>

          <p className="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            We drive measurable growth through data-driven digital marketing
            strategies including SEO, social media marketing, paid advertising,
            content marketing, and conversion optimization.
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
            <span className="text-white">Digital Marketing</span>
          </span>
        </div>
      </header>

      {/* ================= OUR APPROACH ================= */}
      <DigitalMarketingOurApproach />
    </>
  );
}
