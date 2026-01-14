import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  ShoppingCart,
  Smartphone,
  Search,
  Layout,
  Megaphone,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, fast and scalable websites built with the latest technologies.",
    icon: <Code size={28} color="white" />,
    path: "/servicespages/websitedevelopment",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Powerful online stores with secure payments and smooth user experience.",
    icon: <ShoppingCart size={28} color="white" />,
    path: "/servicespages/ecommercesolution",
  },
  {
    title: "App Development",
    description:
      "High-performance Android & Web apps tailored for your business.",
    icon: <Smartphone size={28} color="white" />,
    path: "/servicespages/appdevelopment",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve search rankings, visibility and organic traffic growth.",
    icon: <Search size={28} color="white" />,
    path: "/servicespages/seooptimization",
  },
  {
    title: "UI / UX Design",
    description:
      "User-focused designs that enhance usability and conversion rates.",
    icon: <Layout size={28} color="white" />,
    path: "/servicespages/uiuxdesign",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your brand with smart marketing strategies and campaigns.",
    icon: <Megaphone size={28} color="white" />,
    path: "/servicespages/Digitalmarketing",
  },
];

export default function ExclusiveServices() {
  return (
    <section className="relative w-full bg-white py-24 px-4 overflow-hidden">
      {/* ================= BACKGROUND SHAPES ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Blob */}
        <div className="absolute -top-24 -left-24 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] bg-[#8B0D7A]/15 rounded-full blur-3xl" />

        {/* Bottom Right Blob */}
        <div className="absolute -bottom-24 -right-24 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] bg-[#6F0A60]/15 rounded-full blur-3xl" />

        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px] bg-[#8B0D7A]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        {/* Dotted Pattern Left */}
        <div
          className="absolute top-24 left-8 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,13,122,0.6) 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
        />

        {/* Dotted Pattern Right */}
        <div
          className="absolute bottom-24 right-10 w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px] opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,13,122,0.5) 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
          }}
        />

        {/* Diagonal Lines (Desktop only) */}
        <div className="absolute top-36 right-32 w-[160px] h-px bg-[#8B0D7A]/30 rotate-45 hidden lg:block" />
        <div className="absolute top-44 right-40 w-[220px] h-px bg-[#8B0D7A]/20 rotate-45 hidden lg:block" />

        {/* Floating small blobs */}
        <div className="absolute top-10 right-1/4 w-32 h-32 bg-[#8B0D7A]/10 rounded-full blur-2xl animate-blob animation-delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-[#8B0D7A]/20 rounded-full blur-2xl animate-blob animation-delay-1500" />
      </div>

      {/* ================= CONTENT ================= */}
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
            Premium digital services designed to scale your business online.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group relative bg-gray-50 p-8 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#8B0D7A] rounded-bl-[80px]" />

              {/* Icon */}
              <div className="w-14 h-14 bg-[#8B0D7A] rounded-lg flex items-center justify-center mb-6 relative z-10">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900 relative z-10 group-hover:text-[#8B0D7A] transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                {service.description}
              </p>

              {/* Read More */}
              <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 border-b border-[#8B0D7A] group-hover:text-[#8B0D7A] transition relative z-10">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* ================= ANIMATION STYLES ================= */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -20px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 8s infinite;
          }
          .animation-delay-1000 { animation-delay: 1s; }
          .animation-delay-1500 { animation-delay: 1.5s; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
}
