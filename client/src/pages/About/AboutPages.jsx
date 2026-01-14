import React from "react";
import { CheckCircle, Code, Smartphone, Palette } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

        {/* ===== LEFT CONTENT ===== */}
        <div className="text-center lg:text-left">

          <p className="text-sm tracking-widest text-[#8B0D7A] uppercase mb-3">
            About Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            We Build Digital <br />
            <span className="text-[#8B0D7A]">
              Solutions That Drive Growth
            </span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
            We are an IT software development company helping businesses
            transform ideas into powerful digital products. From web and
            mobile applications to UI/UX and SEO-driven solutions, we focus
            on performance, security, and scalability.
          </p>

          {/* FEATURES */}
          <div className="mt-8 space-y-4 max-w-xl mx-auto lg:mx-0">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#8B0D7A] mt-0.5" size={20} />
              <span className="text-gray-700 text-sm sm:text-base">
                Custom web & app development solutions
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#8B0D7A] mt-0.5" size={20} />
              <span className="text-gray-700 text-sm sm:text-base">
                Modern UI/UX with SEO-friendly architecture
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#8B0D7A] mt-0.5" size={20} />
              <span className="text-gray-700 text-sm sm:text-base">
                Reliable support and long-term partnership
              </span>
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-10 flex justify-center lg:justify-start">
            <button className="px-10 py-3 bg-[#8B0D7A] text-white rounded-full font-semibold hover:bg-[#6F0A60] transition">
              Learn More About Us
            </button>
          </div>
        </div>

        {/* ===== RIGHT VISUAL / SERVICE HIGHLIGHTS ===== */}
        <div className="relative">
          <div className="bg-[#f5fbff] rounded-3xl p-8 sm:p-10 shadow-lg">

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">
              What We Do Best
            </h3>

            <div className="space-y-6">
              {/* ITEM */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8B0D7A] flex items-center justify-center shrink-0">
                  <Code size={22} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Web Development
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Fast, secure, and scalable websites built with modern tech.
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8B0D7A] flex items-center justify-center shrink-0">
                  <Smartphone size={22} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    App Development
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Android & iOS apps focused on performance and usability.
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8B0D7A] flex items-center justify-center shrink-0">
                  <Palette size={22} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    UI / UX & Branding
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Clean, modern designs that convert users into customers.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
