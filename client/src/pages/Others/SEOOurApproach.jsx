import React from "react";
import { Search, BarChart3, TrendingUp, ShieldCheck, Settings, Globe } from "lucide-react";

export default function SEOOurApproach() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Approach
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5">
            Our SEO strategy is built to increase visibility, attract high-quality
            traffic, and deliver measurable growth. We go beyond keywords and
            focus on creating a strong digital foundation for long-term success.
          </p>

          <p className="text-gray-600 leading-relaxed mb-5">
            By combining technical SEO, content optimization, and data-driven
            insights, we help your business rank higher on search engines while
            delivering real value to your audience.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether you're targeting local markets or a global audience, our SEO
            solutions are customized to align with your business goals and
            industry competition.
          </p>
        </div>

        {/* ================= RIGHT BENEFITS CARD ================= */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 sm:p-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            SEO Service Benefits
          </h3>

          <ul className="space-y-4">
            {[
              {
                icon: <Search />,
                text: "In-Depth Keyword Research & Strategy",
              },
              {
                icon: <BarChart3 />,
                text: "Data-Driven SEO & Performance Tracking",
              },
              {
                icon: <TrendingUp />,
                text: "Higher Rankings & Organic Traffic Growth",
              },
              {
                icon: <Settings />,
                text: "Technical SEO & Site Optimization",
              },
              {
                icon: <Globe />,
                text: "Local & Global SEO Targeting",
              },
              {
                icon: <ShieldCheck />,
                text: "White-Hat & Google-Compliant Practices",
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
