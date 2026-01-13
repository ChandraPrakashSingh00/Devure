// src/components/Contact/ContactSection.jsx
import React, { useState } from "react";
import { Phone, MapPin, Mail, Activity } from "lucide-react";
import { submitContactForm } from "../../API/contactApi";

const PRIMARY = "#8B0D7A";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await submitContactForm(formData);
      setSuccessMsg(res.message);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      setErrorMsg(error.message || "Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  const infoBlocks = [
    {
      icon: <Activity size={26} />,
      title: "About Company",
      text: "Innovative IT solutions focused on performance, security, and scalability.",
    },
    {
      icon: <Phone size={26} />,
      title: "Phone Support",
      text: "+91 234 567 8901\n+91 987 654 3210",
    },
    {
      icon: <Mail size={26} />,
      title: "Email Address",
      text: "contact@devuretech.com\nsupport@devuretech.com",
    },
    {
      icon: <MapPin size={26} />,
      title: "Office Location",
      text: "Devure Technology\nAl Quoz, Dubai / India",
    },
  ];

  return (
    <section className="relative w-full bg-white py-24 px-4 overflow-hidden">
      {/* === Background Shapes === */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Blob */}
        <div className="absolute -top-24 -left-24 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] bg-[#8B0D7A]/15 rounded-full blur-3xl" />
        {/* Bottom Right Blob */}
        <div className="absolute -bottom-24 -right-24 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] bg-[#6F0A60]/15 rounded-full blur-3xl" />
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px] bg-[#8B0D7A]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        {/* Dotted Pattern Left */}
        <div
          className="absolute top-24 left-8 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,13,122,0.6) 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
        />
        {/* Dotted Pattern Right */}
        <div
          className="absolute bottom-24 right-10 w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px] opacity-20"
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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* === Header === */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Get In <span className="text-[#8B0D7A]">Touch</span>
          </h2>
          <div className="flex justify-center mt-4 mb-3">
            <span className="w-24 h-[3px] bg-[#8B0D7A] rounded-full" />
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Have a project in mind or need support? We’re here to help you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* === Left Info === */}
          <div className="space-y-8">
            {infoBlocks.map((item, i) => (
              <div
                key={i}
                className="flex gap-5 bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: PRIMARY }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1 whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* === Right Form === */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#8B0D7A]/25 shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
            <p className="text-gray-600 text-sm mb-4">
              Fill out the form and our team will get back to you shortly.
            </p>

            {successMsg && <p className="text-green-600 mb-4">{successMsg}</p>}
            {errorMsg && <p className="text-red-600 mb-4">{errorMsg}</p>}

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-gray-100 px-6 py-4 rounded-xl outline-none border border-transparent focus:border-[#8B0D7A] focus:ring-2 focus:ring-[#8B0D7A]/40"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-gray-100 px-6 py-4 rounded-xl outline-none border border-transparent focus:border-[#8B0D7A] focus:ring-2 focus:ring-[#8B0D7A]/40"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-gray-100 px-6 py-4 rounded-xl outline-none border border-transparent focus:border-[#8B0D7A] focus:ring-2 focus:ring-[#8B0D7A]/40"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-gray-100 px-6 py-4 rounded-xl text-gray-700 appearance-none outline-none border border-transparent focus:border-[#8B0D7A] focus:ring-2 focus:ring-[#8B0D7A]/40"
              >
                <option value="">Select Service</option>
                <option value="Web Development">Web Development</option>
                <option value="Web Design">Web Design</option>
                <option value="App Development">App Development</option>
                <option value="UI / UX Design">UI / UX Design</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="sm:col-span-2 w-full bg-gray-100 px-6 py-4 rounded-xl outline-none border border-transparent focus:border-[#8B0D7A] focus:ring-2 focus:ring-[#8B0D7A]/40"
                required
              />
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full font-semibold text-white transition hover:opacity-90"
                  style={{ background: `linear-gradient(90deg, ${PRIMARY}, #b3129d)` }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
