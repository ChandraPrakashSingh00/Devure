// src/components/HowWeWork.jsx
import React from "react";
import { Search, Lightbulb, Settings, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "STEP 1",
    title: "Research & Planning",
    desc:
      "We analyze requirements, research your market, and plan a solid digital strategy for success.",
    icon: <Search size={26} color="white" />,
  },
  {
    step: "STEP 2",
    title: "Creative Solutions",
    desc:
      "Our team designs creative and user-friendly solutions that align with your business goals.",
    icon: <Lightbulb size={26} color="white" />,
  },
  {
    step: "STEP 3",
    title: "Development",
    desc:
      "We develop high-performance, secure, and scalable solutions using modern technologies.",
    icon: <Settings size={26} color="white" />,
  },
  {
    step: "STEP 4",
    title: "Launch & Support",
    desc:
      "After launch, we provide continuous support and optimization for long-term growth.",
    icon: <Rocket size={26} color="white" />,
  },
];

export default function HowWeWork() {
  return (
    <section className="relative w-full bg-white py-24 px-4 overflow-hidden">

      {/* ===== RESPONSIVE BACKGROUND SHAPES ===== */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Top Left Blob */}
        <div
          className="
            absolute
            -top-24 -left-24
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
            absolute
            -bottom-24 -right-24
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
            absolute
            top-1/2 left-1/2
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
            absolute
            top-24 left-8
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
            absolute
            bottom-24 right-10
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

        {/* Diagonal Lines (Desktop only – clean mobile) */}
        <div className="absolute top-36 right-32 w-[160px] h-px bg-[#8B0D7A]/30 rotate-45 hidden lg:block" />
        <div className="absolute top-44 right-40 w-[220px] h-px bg-[#8B0D7A]/20 rotate-45 hidden lg:block" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">
            How <span className="text-[#8B0D7A]">We Work</span>
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Our structured process ensures quality, efficiency, and results at every stage.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((item, index) => (
            <div key={index} className="relative">

              {/* CARD */}
              <div
                className="
                  relative
                  bg-gray-50
                  p-8
                  rounded-xl
                  shadow-lg
                  overflow-hidden
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                {/* Purple Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#8B0D7A] rounded-bl-[80px]" />

                {/* Icon */}
                <div className="w-14 h-14 bg-[#8B0D7A] rounded-lg flex items-center justify-center mb-6 relative z-10">
                  {item.icon}
                </div>

                {/* Step */}
                <span className="inline-block mb-3 text-xs font-semibold text-[#8B0D7A] relative z-10">
                  {item.step}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900 relative z-10">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>

              {/* Arrow – Desktop Only */}
              {index !== steps.length - 1 && (
                <div
                  className="
                    hidden lg:flex
                    absolute
                    top-1/2
                    -right-10
                    -translate-y-1/2
                    w-14 h-14
                    items-center justify-center
                    bg-[#8B0D7A]
                    text-white
                    rounded-full
                    shadow-[0_14px_35px_rgba(139,13,122,0.35)]
                  "
                >
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
