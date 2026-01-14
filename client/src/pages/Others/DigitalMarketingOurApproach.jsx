import React from "react";
import { Search, BarChart2, Megaphone, Target, Users, TrendingUp } from "lucide-react";

export default function DigitalMarketingOurApproach() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#8B0D7A] mb-6">
            Our Approach
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5">
            Our digital marketing strategy is designed to drive measurable growth for your business.
            We combine data-driven insights, creative content, and multi-channel campaigns to maximize reach and engagement.
          </p>

          <p className="text-gray-600 leading-relaxed mb-5">
            From SEO and social media to paid advertising and conversion optimization, we follow a structured process
            that ensures every campaign delivers results and strengthens your brand presence online.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We continually analyze performance metrics and optimize campaigns to ensure sustainable growth
            and a strong return on investment.
          </p>
        </div>

        {/* ================= RIGHT BENEFITS CARD ================= */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 sm:p-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Key Benefits
          </h3>

          <ul className="space-y-4">
            {[
              { icon: <Search />, text: "In-Depth Market & Competitor Analysis" },
              { icon: <BarChart2 />, text: "Data-Driven Campaign Strategies" },
              { icon: <Megaphone />, text: "Multi-Channel Marketing Execution" },
              { icon: <Target />, text: "Conversion Rate Optimization" },
              { icon: <Users />, text: "Audience Targeting & Engagement" },
              { icon: <TrendingUp />, text: "Continuous Performance Monitoring & Growth" },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#8B0D7A] mt-1 w-5 h-5">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
