import React from "react";
import {
  Code,
  Palette,
  Layout,
  Smartphone,
  Monitor,
  Layers,
} from "lucide-react";

const services = [
  { title: "Web Development", icon: <Code size={28} color="white" /> },
  { title: "Web Design", icon: <Palette size={28} color="white" /> },
  { title: "App Development", icon: <Monitor size={28} color="white" /> },
  { title: "Graphic Design", icon: <Layers size={28} color="white" /> },
  { title: "Responsive Design", icon: <Smartphone size={28} color="white" /> },
  { title: "UI / UX Design", icon: <Layout size={28} color="white" /> },
];

export default function ExclusiveServices() {
  return (
    <section className="relative w-full bg-white py-24 px-4 overflow-hidden">

      {/* ===== RESPONSIVE BACKGROUND SHAPES ===== */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Top Left Glow */}
        <div className="
          absolute -top-24 -left-24
          w-[220px] h-[220px]
          sm:w-[280px] sm:h-[280px]
          lg:w-[380px] lg:h-[380px]
          bg-[#8B0D7A]/15
          rounded-full blur-3xl
        " />

        {/* Bottom Right Glow */}
        <div className="
          absolute -bottom-24 -right-24
          w-[220px] h-[220px]
          sm:w-[280px] sm:h-[280px]
          lg:w-[380px] lg:h-[380px]
          bg-[#6F0A60]/15
          rounded-full blur-3xl
        " />

        {/* Center Soft Glow (Visible on Mobile also) */}
        <div className="
          absolute top-1/2 left-1/2
          w-[180px] h-[180px]
          sm:w-[220px] sm:h-[220px]
          lg:w-[260px] lg:h-[260px]
          bg-[#8B0D7A]/10
          rounded-full blur-3xl
          -translate-x-1/2 -translate-y-1/2
        " />

        {/* Dotted Pattern Left */}
        <div
          className="
            absolute top-20 left-6
            w-[100px] h-[100px]
            sm:w-[140px] sm:h-[140px]
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
            absolute bottom-20 right-6
            w-[110px] h-[110px]
            sm:w-[160px] sm:h-[160px]
            opacity-20
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,13,122,0.5) 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
          }}
        />

        {/* Diagonal Accent Lines (Desktop Only) */}
        <div className="absolute top-40 right-32 w-[140px] h-px bg-[#8B0D7A]/30 rotate-45 hidden lg:block" />
        <div className="absolute top-48 right-40 w-[200px] h-px bg-[#8B0D7A]/20 rotate-45 hidden lg:block" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Exclusive <span className="text-[#8B0D7A]">Services</span>
          </h2>

          <div className="flex justify-center mt-4 mb-3">
            <span className="w-24 h-[3px] bg-[#8B0D7A] rounded-full" />
          </div>

          <p className="text-gray-600 text-sm sm:text-base">
            We provide top-notch services to help your business grow in the digital space.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                relative bg-gray-50 p-8 rounded-xl
                shadow-lg overflow-hidden
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
              "
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#8B0D7A] rounded-bl-[80px]" />

              <div className="w-14 h-14 bg-[#8B0D7A] rounded-lg flex items-center justify-center mb-6 relative z-10">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 relative z-10">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 border-b border-[#8B0D7A] hover:text-[#8B0D7A] transition relative z-10"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
