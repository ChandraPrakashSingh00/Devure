import React from "react";
import { Link } from "react-router-dom";
import EcommerceOurApproach from "../../Others/EcommerceOurApproach";

export default function EcommerceSolutionHeader() {
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
            backgroundSize: "56px 56px",
          }}
        />

        {/* ================= FLOW / TRANSACTION LINES ================= */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0 180 H260 V120 H520 V220 H820 V150 H1200"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
          />
          <path
            d="M0 380 H300 V440 H600 V340 H900 V400 H1200"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
          />
          <circle cx="260" cy="180" r="4" fill="white" />
          <circle cx="520" cy="120" r="4" fill="white" />
          <circle cx="820" cy="220" r="4" fill="white" />
          <circle cx="300" cy="380" r="4" fill="white" />
          <circle cx="600" cy="440" r="4" fill="white" />
          <circle cx="900" cy="340" r="4" fill="white" />
        </svg>

        {/* ================= DARK DEPTH OVERLAY ================= */}
        <div className="absolute inset-0 bg-black/20" />

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16 text-center flex flex-col items-center gap-5">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            E-Commerce Solutions
          </h1>

          <p className="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            We build secure, scalable, and high-conversion e-commerce platforms
            with seamless user journeys, smart payment integrations, and
            performance-driven architecture to scale your online business.
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
            <span className="text-white">E-Commerce Solutions</span>
          </span>
        </div>
      </header>

      {/* ================= OUR APPROACH ================= */}
      <EcommerceOurApproach />
    </>
  );
}
