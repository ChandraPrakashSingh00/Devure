// src/components/PricingSection.jsx
import React from "react";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    tag: "WEBSITE",
    name: "Web Pack",
    price: "$999 / yr",
    desc: "Perfect for businesses who need a modern website.",
    features: [
      "SEO Optimized Website",
      "Mobile Responsive Design",
      "Fast Performance",
      "Secure Hosting",
    ],
  },
  {
    tag: "MOST POPULAR",
    name: "SEO Pack",
    price: "$699 / yr",
    desc: "Best for ranking higher and growing traffic.",
    highlighted: true,
    features: [
      "Advanced SEO Optimization",
      "Keyword Research",
      "Content Strategy",
      "Performance Reporting",
    ],
  },
  {
    tag: "BEST VALUE",
    name: "Combined Pack",
    price: "$1499 / yr",
    desc: "Complete digital solution for fast growth.",
    features: [
      "Web Development + SEO",
      "Custom UI / UX Design",
      "Performance Optimization",
      "Dedicated Support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="relative w-full bg-white py-24 px-4 overflow-hidden">

      {/* ===== SAME BACKGROUND SHAPES AS HOW WE WORK ===== */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Top Left Blob */}
        <div
          className="
            absolute -top-24 -left-24
            w-[260px] h-[260px]
            sm:w-[320px] sm:h-[320px]
            lg:w-[420px] lg:h-[420px]
            bg-[#8B0D7A]/15
            rounded-full blur-3xl
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
            rounded-full blur-3xl
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
            rounded-full blur-3xl
            -translate-x-1/2 -translate-y-1/2
          "
        />

        {/* Dotted Pattern Left */}
        <div
          className="
            absolute top-28 left-10
            w-[120px] h-[120px]
            sm:w-[140px] sm:h-[140px]
            lg:w-[160px] lg:h-[160px]
            opacity-25
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
            absolute bottom-32 right-12
            w-[130px] h-[130px]
            sm:w-[150px] sm:h-[150px]
            lg:w-[180px] lg:h-[180px]
            opacity-20
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,13,122,0.5) 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
          }}
        />

        {/* Diagonal Lines – Desktop only */}
        <div className="absolute top-40 right-36 w-[160px] h-px bg-[#8B0D7A]/30 rotate-45 hidden lg:block" />
        <div className="absolute top-48 right-44 w-[220px] h-px bg-[#8B0D7A]/20 rotate-45 hidden lg:block" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[#8B0D7A] mb-2">
            Pricing Plans
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Choose the Right <span className="text-[#8B0D7A]">Package</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Simple, transparent pricing designed to help your business grow.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {packages.map((pkg, index) => (
            <div key={index} className="relative">

              {/* CARD */}
              <div
                className={`
                  relative bg-gray-50 rounded-xl p-8 h-full
                  shadow-lg overflow-hidden
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl
                  ${pkg.highlighted ? "ring-2 ring-[#8B0D7A]" : ""}
                `}
              >
                {/* Purple Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#8B0D7A] rounded-bl-[90px]" />

                {/* TAG */}
                <span className="inline-block text-xs font-semibold text-[#8B0D7A] mb-4 relative z-10">
                  {pkg.tag}
                </span>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10">
                  {pkg.name}
                </h3>

                <p className="text-sm text-gray-600 mb-6 relative z-10">
                  {pkg.desc}
                </p>

                {/* PRICE */}
                <h4 className="text-4xl font-extrabold text-gray-900 mb-8 relative z-10">
                  {pkg.price}
                </h4>

                {/* FEATURES */}
                <ul className="space-y-3 text-sm text-gray-600 mb-10 relative z-10">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={18} className="text-[#8B0D7A]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <button
                  className="
                    w-full py-3 rounded-full font-semibold
                    flex items-center justify-center gap-2
                    bg-[#8B0D7A] text-white
                    hover:opacity-90 transition
                  "
                >
                  Get Started
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
