import React from "react";
import { Smartphone, Code2, Shield, Zap, Layers, Rocket } from "lucide-react";

export default function AppDevelopmentOurApproach() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Approach
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5">
            We craft high-performance mobile and web applications that deliver
            seamless user experiences across platforms. Our approach blends
            innovative design, scalable architecture, and cutting-edge
            technologies to build apps that users love.
          </p>

          <p className="text-gray-600 leading-relaxed mb-5">
            From ideation and UI/UX design to development and deployment, we follow
            a structured yet flexible process that ensures speed, quality, and
            long-term scalability for your product.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether it’s a startup MVP or an enterprise-grade application, our
            team focuses on performance, security, and future-ready solutions
            that grow with your business.
          </p>
        </div>

        {/* ================= RIGHT BENEFITS CARD ================= */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 sm:p-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            App Development Benefits
          </h3>

          <ul className="space-y-4">
            {[
              {
                icon: <Smartphone />,
                text: "Cross-Platform & Native App Solutions",
              },
              {
                icon: <Code2 />,
                text: "Clean, Scalable & Maintainable Code",
              },
              {
                icon: <Zap />,
                text: "High Performance & Fast Load Times",
              },
              {
                icon: <Shield />,
                text: "Enterprise-Level Security Standards",
              },
              {
                icon: <Layers />,
                text: "Modular & Future-Ready Architecture",
              },
              {
                icon: <Rocket />,
                text: "Rapid Deployment & Continuous Updates",
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
