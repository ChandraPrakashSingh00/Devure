import React from "react";
import { CheckCircle } from "lucide-react";

export default function OurApproachSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Approach
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5">
            We believe your website should be a living, breathing organism that
            evolves alongside your business. That’s why, as a leading web
            design and web development agency, we don’t just develop websites;
            we create strategic, adaptable online ecosystems.
          </p>

          <p className="text-gray-600 leading-relaxed mb-5">
            By combining cutting-edge web development technologies, innovative
            design, and a deep understanding of your business goals, we build
            interactive web experiences that not only attract and engage your
            target audience but also grow with your needs.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From intuitive user interfaces to feature-rich functionality, every
            aspect of development is tailored to align with your unique business
            objectives—whether it’s a CMS-based website or a complex
            e-commerce platform.
          </p>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-8 sm:p-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Service Benefits
          </h3>

          <ul className="space-y-4">
            {[
              "SEO-Friendly Content",
              "Responsive Design",
              "Fast Loading Speed",
              "Secure and Reliable Hosting",
              "Content Management System (CMS)",
              "Social Media Integration",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-[#8B0D7A] mt-1 w-5 h-5 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
