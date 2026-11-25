import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Menu, X, ArrowRight, MessageSquare } from "lucide-react";
import { WHATSAPP_URL, TextRollButton } from "./studio-landing";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [londonTime, setLondonTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        setLondonTime(formatter.format(new Date()));
      } catch {
        const now = new Date();
        setLondonTime(
          `${String(now.getUTCHours()).padStart(2, "0")}:${String(now.getUTCMinutes()).padStart(2, "0")}`
        );
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "Projects", href: "/projects" },
    { label: "Studio", href: "/studio" },
    { label: "Journal", href: "/journal" },
    { label: "Connect", href: "/connect" },
  ];

  return (
    <>
      {/* Floating Pill Navbar (Unified Axion Studio Design) */}
      <header className="sticky top-0 z-50 w-full pt-2 sm:pt-3 px-2 sm:px-3 pointer-events-auto">
        <div className="max-w-[1440px] mx-auto">
          <nav
            aria-label="Main"
            className="bg-white rounded-full p-[5px] flex items-center justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100"
          >
            {/* Left: Matrix Root Logo & Nav Links */}
            <div className="flex items-center gap-4 sm:gap-6 pl-2 sm:pl-3">
              <Link
                to="/"
                aria-label="Matrix Root home"
                className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="/logo-transparent.png"
                  onError={(e) => {
                    e.currentTarget.src = "/logo.png";
                  }}
                  alt="Matrix Root"
                  width={36}
                  height={36}
                  className="h-8 w-8 sm:h-9 sm:w-9 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-[15px] font-semibold tracking-tight text-gray-900">
                  Matrix Root
                </span>
              </Link>

              <div className="hidden md:flex items-center gap-6 pl-2">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300 font-normal"
                    activeProps={{ className: "text-gray-900 font-semibold" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Clock & Single Focused CTA Button */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4 pr-1">
              <span className="text-[13px] text-gray-600 hidden lg:inline-block whitespace-nowrap">
                Taking on projects for Q1 2026
              </span>
              <div className="flex items-center gap-1.5 text-[13px] text-gray-600 whitespace-nowrap">
                <Clock className="w-3.5 h-3.5 text-gray-600" aria-hidden="true" />
                <span>{londonTime || "12:00"} in London</span>
              </div>
              <TextRollButton
                text="Start a project"
                href={WHATSAPP_URL}
                variant="orange"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              className="md:hidden w-9 h-9 sm:w-10 sm:h-10 bg-[#F26522] hover:bg-[#e05a1a] text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Slide-Up Bottom Sheet Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end md:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative bg-white rounded-2xl mx-3 mb-3 p-6 sm:p-8 z-10 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] animate-in slide-in-from-bottom-full">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <img
                  src="/logo-transparent.png"
                  onError={(e) => {
                    e.currentTarget.src = "/logo.png";
                  }}
                  alt="Matrix Root"
                  className="h-6 w-6 object-contain"
                />
                <span className="font-semibold text-sm text-gray-900">Matrix Root</span>
              </div>
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-3 py-6">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-[24px] font-medium text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Single clean mobile action button */}
            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#F26522] hover:bg-[#e05a1a] text-white text-sm font-semibold rounded-full py-3 px-5 flex items-center justify-between transition-colors shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-white" /> Start a project
                </span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
