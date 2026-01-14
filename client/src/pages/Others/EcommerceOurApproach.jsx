import React from "react";
import { ShoppingCart, ShieldCheck, Zap, BarChart3, Layers, Globe } from "lucide-react";

export default function EcommerceOurApproach() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Approach
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5">
            We design and develop e-commerce solutions that are built to convert,
            scale, and perform. Our approach focuses on creating seamless shopping
            experiences that guide users from discovery to checkout with ease.
          </p>

          <p className="text-gray-600 leading-relaxed mb-5">
            By combining strategic UX design, secure payment systems, and
            high-performance architectures, we ensure your online store delivers
            speed, reliability, and trust at every touchpoint.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether you are launching a new online store or upgrading an existing
            platform, we build e-commerce ecosystems that integrate inventory,
            marketing, analytics, and automation to support long-term growth.
          </p>
        </div>

        {/* ================= RIGHT BENEFITS CARD ================= */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 sm:p-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            E-Commerce Benefits
          </h3>

          <ul className="space-y-4">
            {[
              {
                icon: <ShoppingCart />,
                text: "Conversion-Optimized Store Design",
              },
              {
                icon: <ShieldCheck />,
                text: "Secure Payments & Data Protection",
              },
              {
                icon: <Zap />,
                text: "Fast Performance & Page Load Speed",
              },
              {
                icon: <Layers />,
                text: "Scalable Product & Inventory Management",
              },
              {
                icon: <BarChart3 />,
                text: "Analytics & Sales Performance Tracking",
              },
              {
                icon: <Globe />,
                text: "Multi-Channel & Global Commerce Ready",
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
