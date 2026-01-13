import React from "react";

export default function SubmitForm() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-4">

      {/* Card */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative hidden md:flex flex-col justify-between p-10 text-white overflow-hidden bg-[#8B0D7A]">

          {/* ===== GEOMETRIC SHAPES (ABOUT STYLE) ===== */}
          <div className="absolute inset-0 pointer-events-none">

            {/* Shape 1 */}
            <div
              className="absolute top-0 left-0 w-[65%] h-[55%]"
              style={{
                background: "linear-gradient(135deg, #D66ACF, #A61E8E)",
                clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 85%)",
              }}
            />

            {/* Shape 2 */}
            <div
              className="absolute top-0 right-0 w-[60%] h-[60%]"
              style={{
                background: "linear-gradient(135deg, #E589DA, #B33AA2)",
                clipPath: "polygon(30% 0, 100% 0, 100% 70%, 55% 100%)",
              }}
            />

            {/* Shape 3 */}
            <div
              className="absolute bottom-0 left-0 w-[65%] h-[65%]"
              style={{
                background: "linear-gradient(135deg, #B31997, #7A0E6A)",
                clipPath: "polygon(0 30%, 70% 0, 100% 100%, 0 100%)",
              }}
            />

            {/* Shape 4 */}
            <div
              className="absolute bottom-0 right-0 w-[55%] h-[60%]"
              style={{
                background: "linear-gradient(135deg, #CF4CB9, #8B0D7A)",
                clipPath: "polygon(30% 0, 100% 40%, 70% 100%, 0 100%)",
              }}
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mt-auto mb-auto">
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Let’s Work <br /> Together
            </h2>
            <p className="text-lg opacity-90 max-w-sm">
              Submit your details and our team will contact you shortly.
            </p>
          </div>

          <p className="relative z-10 text-sm opacity-80">
            We build solutions that scale.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 sm:p-12 flex flex-col justify-center bg-white">

          {/* BRAND */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#8B0D7A]">
              Devure Technology
            </h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Innovative IT Solutions for Modern Businesses
            </p>
          </div>

          <form className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border-b-2 border-[#8B0D7A]/40 focus:border-[#8B0D7A] outline-none py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border-b-2 border-[#8B0D7A]/40 focus:border-[#8B0D7A] outline-none py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border-b-2 border-[#8B0D7A]/40 focus:border-[#8B0D7A] outline-none py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Required Service
              </label>
              <select className="w-full border-b-2 border-[#8B0D7A]/40 focus:border-[#8B0D7A] outline-none py-2 bg-transparent">
                <option>Select a service</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>UI / UX Design</option>
                <option>Digital Marketing</option>
                <option>SEO Services</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Address / Message
              </label>
              <textarea
                rows="3"
                placeholder="Enter your address or message"
                className="w-full border-b-2 border-[#8B0D7A]/40 focus:border-[#8B0D7A] outline-none py-2 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-[#8B0D7A] text-white py-3 rounded-xl font-semibold hover:bg-[#6F0A60] transition"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
