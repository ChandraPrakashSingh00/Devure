import React from "react";
import { FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#8B0D7A] text-white px-6 sm:px-10 lg:px-16 py-12">

      {/* ===== GEOMETRIC SHAPE BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Shape 1 */}
        <div
          className="absolute top-0 left-0 w-[55%] h-[65%]"
          style={{
            background: "linear-gradient(135deg, #D66ACF, #A61E8E)",
            clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 80%)",
          }}
        />

        {/* Shape 2 */}
        <div
          className="absolute top-0 right-0 w-[60%] h-[60%]"
          style={{
            background: "linear-gradient(135deg, #E589DA, #B33AA2)",
            clipPath: "polygon(30% 0, 100% 0, 100% 70%, 55% 100%)",
          }}
        />

        {/* Shape 3 */}
        <div
          className="absolute bottom-0 left-0 w-[60%] h-[70%]"
          style={{
            background: "linear-gradient(135deg, #B31997, #7A0E6A)",
            clipPath: "polygon(0 30%, 70% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* Shape 4 */}
        <div
          className="absolute bottom-0 right-0 w-[55%] h-[65%]"
          style={{
            background: "linear-gradient(135deg, #CF4CB9, #8B0D7A)",
            clipPath: "polygon(30% 0, 100% 40%, 70% 100%, 0 100%)",
          }}
        />

        {/* Soft depth overlay */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* LEFT : LOGO + INFO */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/img/bg.png"
            alt="Devure Technology Logo"
            className="w-16 h-16 object-contain mb-2 filter brightness-0 invert"
          />

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Devure Technology{" "}
            <span className="text-white/80">– IT Solutions</span>
          </h3>

          <p className="mt-2 text-sm sm:text-base text-white/80 max-w-md leading-relaxed">
            Your trusted partner in modern website solutions, building
            high-converting digital experiences for visionary brands.
          </p>
        </div>

        {/* RIGHT : SOCIALS + CTA */}
        <div className="flex flex-col sm:flex-row md:justify-end items-center gap-4 sm:gap-6">

          {/* SOCIAL ICONS */}
          <div className="flex gap-2 sm:gap-3">
            {[
              {
                icon: <FaLinkedinIn size={18} />,
                href: "https://www.linkedin.com/company/devure-technology-it-solutions/",
              },
              {
                icon: <FaXTwitter size={18} />,
                href: "https://twitter.com",
              },
              {
                icon: <FaInstagram size={18} />,
                href: "https://www.instagram.com/devuretechnology?igsh=azlraW4zY3Q3eTFx",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/919718608520"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-white text-[#8B0D7A] font-semibold rounded-xl hover:bg-gray-100 transition shadow-md text-sm sm:text-base"
          >
            Connect Now ↗
          </a>
        </div>
      </div>

      {/* ===== BOTTOM ===== */}
      <div className="relative z-10 mt-8 pt-4 text-center text-xs sm:text-sm text-white/70 border-t border-white/25">
        © {new Date().getFullYear()} Devure Technology — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
