import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-[78px]">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/img/nav.jpg"
              alt="Devure Technology"
              className="h-12 w-auto"
            />
            <div className="leading-tight">
              <p className="text-[21px] font-bold text-[#8B0D7A] tracking-wide">
                DEVURE
              </p>
              <p className="text-[11px] font-semibold text-gray-500 tracking-[0.22em]">
                TECHNOLOGY
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-7 text-[16px] text-gray-700">
            <NavItem label="Home" to="/" />
            <NavItem label="About" to="/about" />
            <NavItem label="Services" to="/services" />
            <NavItem label="Products" to="/product" />
            <NavItem label="Blog" to="/blog" />
            <NavItem label="Contact" to="/contact" />
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center gap-3">
            {/* Login button renamed */}
            <Link
              to="" // updated route for form
              className="px-5 py-2 rounded-lg border border-[#8B0D7A] text-[#8B0D7A] font-semibold text-sm hover:bg-[#8B0D7A] hover:text-white transition"
            >
              Get Started
            </Link>

            {/* Join Now as WhatsApp */}
            <a
              href="https://wa.me/9718608520"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-[#8B0D7A] text-white font-semibold text-sm shadow hover:bg-[#6F0A60] transition"
            >
              Join Now
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col gap-4 px-6 py-5 text-[15px] font-semibold text-gray-700">
            <MobileItem label="Home" to="/" setOpen={setOpen} />
            <MobileItem label="About" to="/about" setOpen={setOpen} />
            <MobileItem label="Services" to="/services" setOpen={setOpen} />
            <MobileItem label="Products" to="/products" setOpen={setOpen} />
            <MobileItem label="Blog" to="/blog" setOpen={setOpen} />
            <MobileItem label="Contact" to="/contact" setOpen={setOpen} />

            <div className="pt-4 flex flex-col gap-3">
              {/* Login -> Fill Form */}
              <Link
                to="/form"
                onClick={() => setOpen(false)}
                className="w-full text-center py-2 rounded-lg border border-[#8B0D7A] text-[#8B0D7A]"
              >
                SignUp
              </Link>

              {/* WhatsApp button */}
              <a
                href="https://wa.me/9718608520"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="w-full text-center py-2 rounded-lg bg-[#8B0D7A] text-white"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- DESKTOP NAV ITEM ---------- */
function NavItem({ label, to }) {
  return (
    <Link to={to} className="relative group">
      <span className="transition group-hover:text-[#8B0D7A]">{label}</span>
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#8B0D7A] transition-all group-hover:w-full" />
    </Link>
  );
}

/* ---------- MOBILE NAV ITEM ---------- */
function MobileItem({ label, to, setOpen }) {
  return (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className="hover:text-[#8B0D7A]"
    >
      {label}
    </Link>
  );
}
