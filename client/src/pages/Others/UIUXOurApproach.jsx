import React from "react";
import {
  MousePointerClick,
  Eye,
  LayoutGrid,
  Accessibility,
  Smartphone,
  TrendingUp,
} from "lucide-react";

export default function UIUXDesignStrategy() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#8B0D7A] mb-3">
            Design Strategy
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our UI/UX Design Philosophy
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5">
            Our UI/UX design strategy is centered around users, clarity, and
            business impact. We believe great design is not just how it looks,
            but how it works and how it makes users feel.
          </p>

          <p className="text-gray-600 leading-relaxed mb-5">
            By combining research-driven insights with modern design principles,
            we create interfaces that guide users effortlessly while driving
            engagement and conversions.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Every screen, interaction, and flow is designed with purpose —
            ensuring consistency, usability, and scalability across platforms.
          </p>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 sm:p-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            What We Focus On
          </h3>

          <ul className="space-y-4">
            {[
              {
                icon: <MousePointerClick />,
                text: "Intuitive User Journeys & Interactions",
              },
              {
                icon: <Eye />,
                text: "Clean, Modern & Visually Balanced Interfaces",
              },
              {
                icon: <LayoutGrid />,
                text: "Consistent Layouts & Design Systems",
              },
              {
                icon: <Accessibility />,
                text: "Accessibility & Inclusive Design Standards",
              },
              {
                icon: <Smartphone />,
                text: "Responsive Design for All Devices",
              },
              {
                icon: <TrendingUp />,
                text: "Conversion-Focused Design Decisions",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#8B0D7A] mt-1 w-5 h-5">
                  {item.icon}
                </span>
                <span className="text-gray-700">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
