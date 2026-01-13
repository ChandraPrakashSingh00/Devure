import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What SEO services do you provide?",
    a: "We offer comprehensive SEO strategies including on-page optimization, technical SEO audits, content planning, and backlink building to boost your search rankings.",
  },
  {
    q: "Do you develop custom web applications?",
    a: "Yes, we specialize in building custom, scalable web applications tailored to your business needs using modern technologies.",
  },
  {
    q: "Can you create mobile apps for iOS and Android?",
    a: "Absolutely! We design and develop native and cross-platform mobile applications with a focus on performance, usability, and design.",
  },
  {
    q: "What technologies do you use for development?",
    a: "We use modern technologies like React, Node.js, Python, Flutter, and cloud platforms to ensure scalable and high-performance solutions.",
  },
  {
    q: "How do you handle project support and maintenance?",
    a: "We provide ongoing support, regular updates, and performance monitoring to ensure your applications run smoothly post-launch.",
  },
  {
    q: "What are your pricing plans?",
    a: "Our pricing is flexible based on the project scope, from one-time development fees to ongoing subscription-based maintenance plans.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative w-full bg-white py-24 px-4 overflow-hidden">

      {/* ===== BACKGROUND SHAPES ===== */}
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

        {/* Diagonal Lines (Desktop only) */}
        <div className="absolute top-36 right-32 w-[160px] h-px bg-[#8B0D7A]/30 rotate-45 hidden lg:block" />
        <div className="absolute top-44 right-40 w-[220px] h-px bg-[#8B0D7A]/20 rotate-45 hidden lg:block" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently <span className="text-[#8B0D7A]">Asked Questions</span>
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Answers to common questions about SEO, Web Development, App Development, and IT Services.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-200 pb-4">
                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-sm sm:text-base font-medium text-gray-800">
                    {item.q}
                  </span>
                  <span className="ml-4 text-[#8B0D7A]">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {/* ANSWER */}
                {isOpen && (
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
