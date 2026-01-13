import React from "react";
import {
  Code,
  Smartphone,
  Search,
  Palette,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    title: "Expert Web Development",
    desc: "We build fast, secure, and scalable websites using modern technologies tailored to your business needs.",
    icon: <Code size={28} color="white" />,
  },
  {
    title: "Mobile App Development",
    desc: "High-performance Android and iOS applications designed for seamless user experience and growth.",
    icon: <Smartphone size={28} color="white" />,
  },
  {
    title: "SEO & Digital Growth",
    desc: "SEO-friendly development and digital strategies to boost visibility, traffic, and conversions.",
    icon: <Search size={28} color="white" />,
  },
  {
    title: "UI / UX Design Excellence",
    desc: "User-focused, modern, and intuitive designs that improve engagement and customer satisfaction.",
    icon: <Palette size={28} color="white" />,
  },
  {
    title: "24/7 Technical Support",
    desc: "Dedicated support team to ensure smooth performance, maintenance, and quick issue resolution.",
    icon: <Headphones size={28} color="white" />,
  },
  {
    title: "Secure & Reliable Solutions",
    desc: "We follow best security practices to keep your data, applications, and systems fully protected.",
    icon: <ShieldCheck size={28} color="white" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-white py-24 px-4 overflow-hidden">

      {/* ===== BACKGROUND SHAPES ===== */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Top Left Glow */}
        <div className="absolute -top-28 -left-28 w-[360px] h-[360px] bg-[#8B0D7A]/15 rounded-full blur-3xl" />

        {/* Bottom Right Glow */}
        <div className="absolute -bottom-28 -right-28 w-[360px] h-[360px] bg-[#6F0A60]/15 rounded-full blur-3xl" />

        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 w-[240px] h-[240px] bg-[#8B0D7A]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        {/* Dotted Pattern Left */}
        <div
          className="absolute top-24 left-8 w-[140px] h-[140px] opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,13,122,0.6) 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
        />

        {/* Dotted Pattern Right */}
        <div
          className="absolute bottom-24 right-10 w-[160px] h-[160px] opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,13,122,0.5) 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
          }}
        />

        {/* Diagonal Lines (Desktop Enhanced, Mobile Visible Light) */}
        <div className="absolute top-36 right-24 w-[140px] h-px bg-[#8B0D7A]/30 rotate-45 hidden lg:block" />
        <div className="absolute top-44 right-32 w-[200px] h-px bg-[#8B0D7A]/20 rotate-45 hidden lg:block" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Why Choose <span className="text-[#8B0D7A]">Us</span>
          </h2>

          {/* Accent Line */}
          <div className="flex justify-center mt-4">
            <span className="w-24 h-[3px] bg-[#8B0D7A] rounded-full" />
          </div>

          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            We deliver innovative IT solutions that help businesses grow, scale,
            and succeed in the digital world.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                relative bg-white p-8 rounded-xl
                shadow-lg overflow-hidden
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
              "
            >
              {/* Corner Shape */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#8B0D7A] rounded-bl-[80px]" />

              {/* Icon */}
              <div className="w-14 h-14 bg-[#8B0D7A] rounded-lg flex items-center justify-center mb-6 relative z-10">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900 relative z-10">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                {item.desc}
              </p>

              {/* CTA */}
              <span className="inline-flex items-center gap-1 text-sm font-medium border-b border-[#8B0D7A] text-gray-900 hover:text-[#8B0D7A] transition relative z-10 cursor-pointer">
                Learn More →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
