// src/components/FeaturesSection.jsx
import React from "react";
import { MessageCircle, Palette, Smile } from "lucide-react";

const features = [
  {
    title: "Communications",
    desc: "Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.",
    icon: <MessageCircle size={26} color="white" />,
    img: "/img/f2.png",
  },
  {
    title: "Inspired Design",
    desc: "Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Risus feugiat.",
    icon: <Palette size={26} color="white" />,
    img: "/img/f.png",
  },
  {
    title: "Happy Customers",
    desc: "Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.",
    icon: <Smile size={26} color="white" />,
    img: "/img/f1.png",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full bg-white py-24 px-4 overflow-hidden">

      {/* ===== BACKGROUND SHAPES ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#8B0D7A]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-[#6F0A60]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ===== HEADING ===== */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs tracking-widest text-[#8B0D7A] uppercase">
            Features
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Our Features & Services
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Powerful features designed to deliver exceptional digital experiences.
          </p>
        </div>

        {/* ===== CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {features.map((item, index) => (
            <div key={index} className="relative">

              {/* CARD */}
              <div
                className="
                  relative
                  bg-gray-50
                  p-8
                  rounded-xl
                  shadow-lg
                  overflow-hidden
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                {/* Purple Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#8B0D7A] rounded-bl-[80px]" />

                {/* Icon */}
                <div className="w-14 h-14 bg-[#8B0D7A] rounded-lg flex items-center justify-center mb-5 relative z-10">
                  {item.icon}
                </div>

                {/* Image */}
                <div className="flex justify-center mb-6 relative z-10">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="
                      w-[160px]
                      sm:w-[180px]
                      md:w-[200px]
                      h-auto
                      object-contain
                    "
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900 relative z-10">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
