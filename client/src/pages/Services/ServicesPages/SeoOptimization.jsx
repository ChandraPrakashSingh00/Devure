import React from "react";
import { Link } from "react-router-dom";
import SEOOurApproach from "../../Others/SEOOurApproach";

export default function SeoOptimizationHeader() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="relative w-full overflow-hidden bg-[#8B0D7A]">

        {/* ================= BASE GRADIENT BACKGROUND ================= */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0D7A] via-[#9C1A86] to-[#5A084F]" />

        {/* ================= SUBTLE GRID ================= */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        {/* ================= FLOW / RANKING LINES ================= */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <polyline
            points="0,420 200,360 420,380 640,300 860,260 1200,200"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="2"
          />
          <circle cx="200" cy="360" r="4" fill="white" />
          <circle cx="420" cy="380" r="4" fill="white" />
          <circle cx="640" cy="300" r="4" fill="white" />
          <circle cx="860" cy="260" r="4" fill="white" />
          <circle cx="1200" cy="200" r="4" fill="white" />
        </svg>

        {/* ================= DARK DEPTH OVERLAY ================= */}
        <div className="absolute inset-0 bg-black/20" />

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16 text-center flex flex-col items-center gap-5">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            SEO Optimization
          </h1>

          <p className="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            We deliver data-driven SEO strategies that improve search engine
            rankings, increase organic visibility, and drive qualified traffic
            through technical SEO, content optimization, and performance analytics.
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
            <span className="text-white">SEO Optimization</span>
          </span>
        </div>
      </header>

      {/* ================= OUR APPROACH ================= */}
      <SEOOurApproach />
    </>
  );
}
