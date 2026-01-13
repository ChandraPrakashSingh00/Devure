import React from "react";

export default function SoftwareCTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#8B0D7A] py-28 px-4">

      {/* ===== GEOMETRIC BACKGROUND SHAPES ===== */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Shape 1 – Top Left */}
        <div
          className="absolute top-0 left-0 w-[55%] h-[65%]"
          style={{
            background: "linear-gradient(135deg, #D66ACF, #A61E8E)",
            clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 80%)",
          }}
        />

        {/* Shape 2 – Top Right */}
        <div
          className="absolute top-0 right-0 w-[60%] h-[60%]"
          style={{
            background: "linear-gradient(135deg, #E589DA, #B33AA2)",
            clipPath: "polygon(30% 0, 100% 0, 100% 70%, 55% 100%)",
          }}
        />

        {/* Shape 3 – Bottom Left */}
        <div
          className="absolute bottom-0 left-0 w-[60%] h-[70%]"
          style={{
            background: "linear-gradient(135deg, #B31997, #7A0E6A)",
            clipPath: "polygon(0 30%, 70% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* Shape 4 – Bottom Right */}
        <div
          className="absolute bottom-0 right-0 w-[55%] h-[65%]"
          style={{
            background: "linear-gradient(135deg, #CF4CB9, #8B0D7A)",
            clipPath: "polygon(30% 0, 100% 40%, 70% 100%, 0 100%)",
          }}
        />

        {/* Soft overlay for depth */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
          Innovation starts here
        </h2>

        {/* Description */}
        <p className="mt-6 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          We design and develop scalable software solutions by solving real-world
          problems. From custom web and mobile applications to enterprise-grade
          systems, we collaborate with forward-thinking businesses to build
          secure, high-performance, and future-ready digital products.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">

          <a
            href="/contact"
            className="
              w-full sm:w-auto
              px-10 py-4 rounded-full
              text-white text-sm sm:text-base font-medium
              border border-white/60
              hover:bg-white hover:text-[#8B0D7A]
              transition
            "
          >
            Start a project
          </a>

          <a
            href="/careers"
            className="
              w-full sm:w-auto
              px-10 py-4 rounded-full
              text-white text-sm sm:text-base font-medium
              border border-white/60
              hover:bg-white hover:text-[#8B0D7A]
              transition
            "
          >
            Join our team
          </a>

        </div>
      </div>
    </section>
  );
}
