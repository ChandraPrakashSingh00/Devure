import React from "react";
import AboutPages from "../About/AboutPages";
import Cta from "../About/Cta";
import WhyChooseUs from "../Public/WhyChooseUs";

export default function AboutHeader() {
  return (
    <>
    <header className="relative w-full overflow-hidden bg-[#8B0D7A]">
      
      {/* GEOMETRIC SHAPE BACKGROUND */}
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
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6 lg:px-12
          pt-28 pb-20
          text-center
          flex flex-col
          items-center
          gap-4
        "
      >
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
          About Us
        </h1>

        <p className="text-white/90 text-base sm:text-lg max-w-2xl leading-relaxed">
          We are a technology-driven team focused on building scalable,
          high-performance digital solutions that help businesses grow.
        </p>
      </div>
    </header>
    <AboutPages/>
    <Cta/>
    <WhyChooseUs/>
    </>
  );
}
