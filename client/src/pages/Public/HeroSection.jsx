import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#8B0D7A] text-white">

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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-xs font-semibold">
              🚀 Software • Web • SEO Solutions
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight">
              Build Powerful Digital <br className="hidden sm:block" />
              Products That Rank & Scale
            </h1>

            <p className="mt-4 text-white/90 text-base sm:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
              We design and develop custom software, high-performance websites,
              and SEO strategies that drive real traffic, leads, and long-term
              business growth.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-5 lg:pl-10">

            <Feature text="Custom Software Development" />
            <Feature text="Modern Web & App Development" />
            <Feature text="SEO for Higher Visibility & Leads" />

            {/* Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to=""
                className="px-7 py-3 rounded-lg bg-white text-[#8B0D7A] font-semibold shadow hover:bg-gray-100 transition"
              >
                Get Free Consultation
              </Link>

              <Link
                to="/services"
                className="px-7 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-[#8B0D7A] transition"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Trust */}
            <div className="pt-4 text-xs text-white/80 text-center lg:text-left">
              Trusted by startups & growing businesses
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-1 text-yellow-300">
                ★★★★★
                <span className="text-white/80">
                  4.9/5 average client rating
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* FEATURE ITEM */
function Feature({ text }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle className="text-white w-5 h-5 flex-shrink-0" />
      <span className="text-sm md:text-base font-medium">
        {text}
      </span>
    </div>
  );
}
