import React, { Component, useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Clock, Menu, MessageSquare, Phone, X } from "lucide-react";
import { Shader, ChromaFlow, FilmGrain, FlutedGlass, Swirl } from "shaders/react";

/* -------------------------------------------------------------------------- */
/*                                CONSTANTS & LINKS                           */
/* -------------------------------------------------------------------------- */

export const WHATSAPP_NUMBER = "8121358586";
export const WHATSAPP_URL = "https://wa.me/918121358586?text=Hi%20Matrix%20Root,%20I'd%20like%20to%20start%20a%20project";
export const CALL_TEL = "tel:+918121358586";

/* -------------------------------------------------------------------------- */
/*                                ERROR BOUNDARY                              */
/* -------------------------------------------------------------------------- */

class ShaderErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("Shader render fallback:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="absolute inset-0 bg-[#EFEFEF] pointer-events-none opacity-80" />
        )
      );
    }
    return this.props.children;
  }
}

/* -------------------------------------------------------------------------- */
/*                                SHADER HERO BG                              */
/* -------------------------------------------------------------------------- */

export function HeroShaderOverlay() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-[#EFEFEF]" />;
  }

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      <ShaderErrorBoundary>
        <Shader style={{ width: "100%", height: "100%" }} className="w-full h-full">
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      </ShaderErrorBoundary>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                             ICONS & MICRO SVGS                             */
/* -------------------------------------------------------------------------- */

export function StarburstBadgeIcon({ className = "w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E8704E]" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
    </svg>
  );
}

export function LucideLinkArcIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*                            TEXT ROLL BUTTON HOVER                          */
/* -------------------------------------------------------------------------- */

export function TextRollButton({
  text,
  href,
  onClick,
  variant = "orange",
  target,
  rel,
}: {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "orange" | "dark";
  target?: string;
  rel?: string;
}) {
  const isOrange = variant === "orange";
  const isExternal = href?.startsWith("http") || href?.startsWith("https") || href?.startsWith("wa.me");

  const content = (
    <>
      <span className="flex flex-col h-[20px] overflow-hidden leading-[20px]">
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full">
          {text}
        </span>
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full">
          {text}
        </span>
      </span>
      {isOrange ? (
        <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
          <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#F26522]" />
        </span>
      ) : (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-900 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      )}
    </>
  );

  const className = isOrange
    ? "group inline-flex items-center gap-3 rounded-full bg-[#F26522] hover:bg-[#e05a1a] text-white text-[13px] sm:text-[14px] font-medium pl-5 sm:pl-6 pr-2 py-2 transition-colors duration-300 shadow-sm cursor-pointer"
    : "group inline-flex items-center gap-2.5 rounded-full bg-gray-900 text-white text-[13px] font-medium pl-5 pr-2 py-2 transition-colors duration-300 hover:bg-black cursor-pointer";

  if (href) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export interface StudioLandingProps {
  brandName?: string;
  logoText?: string;
  heroLabel?: string;
  aboutLabel?: string;
  showPartnerBadge?: boolean;
  ctaButtonText?: string;
}

export function StudioLanding({
  brandName = "Axion Studio",
  logoText = "AX",
  heroLabel = "Axion Studio",
  aboutLabel = "Introducing Axion",
  showPartnerBadge = true,
  ctaButtonText,
}: StudioLandingProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [londonTime, setLondonTime] = useState("");

  // Live London clock
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
    { label: "Studio", href: "/studio" },
    { label: "Projects", href: "/projects" },
    { label: "Motion", href: "/motion" },
    { label: "Journal", href: "/journal" },
    { label: "Connect", href: "/connect" },
  ];

  return (
    <div className="min-h-screen bg-[#EFEFEF] text-gray-900 selection:bg-[#F26522]/20 selection:text-[#F26522]">
      {/* ==================================================================== */}
      {/* SECTION 1: HERO (Full viewport height)                                */}
      {/* ==================================================================== */}
      <section className="relative flex flex-col justify-between min-h-screen w-full bg-[#EFEFEF] overflow-hidden">
        {/* Animated shader overlay (absolute, inset-0, z-10, pointer-events-none) */}
        <HeroShaderOverlay />

        {/* Navigation (z-20, relative) */}
        <header className="relative z-20 w-full pt-2 sm:pt-3 px-2 sm:px-3">
          <div className="max-w-[1440px] mx-auto">
            <nav
              aria-label="Main"
              className="bg-white rounded-full p-[5px] flex items-center justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              {/* LEFT: Logo & Nav Links */}
              <div className="flex items-center gap-4 sm:gap-6 pl-2 sm:pl-3">
                {logoText === "AX" ? (
                  <a href="/axion" aria-label="Axion Studio home" className="flex items-center gap-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105">
                      <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-tight">AX</span>
                    </div>
                  </a>
                ) : (
                  <a
                    href="/"
                    aria-label="Matrix Root home"
                    className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src="/logo-transparent.png"
                      onError={(e) => {
                        e.currentTarget.src = "/logo.png";
                      }}
                      alt="Matrix Root Official Logo"
                      width={36}
                      height={36}
                      className="h-8 w-8 sm:h-9 sm:w-9 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-[15px] font-semibold tracking-tight text-gray-900">
                      Matrix <span className="font-bold text-[#F26522]">Root</span>
                    </span>
                  </a>
                )}
                <div className="hidden md:flex items-center gap-6 pl-2">
                  {(logoText === "AX"
                    ? [
                        { label: "Projects", href: "/projects" },
                        { label: "Studio", href: "/studio" },
                        { label: "Journal", href: "/journal" },
                        { label: "Connect", href: "/connect" },
                      ]
                    : navLinks
                  ).map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300 font-normal"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* RIGHT (hidden on mobile, shown md+) */}
              <div className="hidden md:flex items-center gap-3 lg:gap-4 pr-1">
                <span className="text-[13px] text-gray-600 hidden lg:inline-block whitespace-nowrap">
                  Taking on projects for Q1 2026
                </span>
                <div className="flex items-center gap-1.5 text-[13px] text-gray-600 whitespace-nowrap">
                  <Clock className="w-3.5 h-3.5 text-gray-600" aria-hidden="true" />
                  <span>{londonTime || "12:00"} in London</span>
                </div>
                {/* CTA Button with Hover Text Roll */}
                <TextRollButton
                  text={ctaButtonText || (logoText === "AX" ? "Book a strategy call" : "Book a call: 8121358586")}
                  href={CALL_TEL}
                  variant="dark"
                />
              </div>

              {/* MOBILE TOGGLE (md:hidden) */}
              <button
                type="button"
                className="md:hidden w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-4 h-4" />
              </button>
            </nav>
          </div>
        </header>

        {/* MOBILE MENU OVERLAY (fixed inset-0, z-50) */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-end md:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sliding bottom sheet */}
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
                  <span className="font-semibold text-sm">Matrix <span className="text-[#F26522]">Root</span></span>
                </div>
                <button
                  type="button"
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col gap-3 py-6">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[24px] font-medium text-gray-900 hover:text-[#F26522] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Action Buttons in Mobile Sheet */}
              <div className="pt-2 flex flex-col gap-2.5">
                {/* Start a project redirects to WhatsApp 8121358586 */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold rounded-full py-3 px-5 flex items-center justify-between transition-colors shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Start a project (WhatsApp)
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Booking calls redirects to mobile call 8121358586 */}
                <a
                  href={CALL_TEL}
                  className="w-full bg-gray-900 hover:bg-black text-white text-sm font-medium rounded-full py-3 px-5 flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#F26522]" /> Call: 8121358586
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Flex spacer pushing hero content to bottom */}
        <div className="flex-1" />

        {/* Hero Content (z-20) */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
          <p className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide mb-5 sm:mb-8 font-medium">
            {heroLabel}
          </p>

          <h1 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900">
            We craft digital experiences
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            for brands ready to dominate
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            their category online.
          </h1>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            {/* Start a project redirects to WhatsApp 8121358586 */}
            <TextRollButton
              text="Start a project"
              href={WHATSAPP_URL}
              variant="orange"
              target="_blank"
              rel="noopener noreferrer"
            />

            {/* Direct Call Button */}
            <a
              href={CALL_TEL}
              className="bg-white rounded-[4px] px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all text-gray-900 hover:text-[#F26522]"
            >
              <Phone className="w-4 h-4 text-[#F26522]" />
              <span className="text-[13px] sm:text-[14px] font-medium whitespace-nowrap">
                Call: 8121358586
              </span>
            </a>

            {/* Partner Badge */}
            {showPartnerBadge && (
              <div className="bg-white rounded-[4px] px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                <StarburstBadgeIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E8704E]" />
                <span className="text-[13px] sm:text-[14px] font-medium text-gray-900 whitespace-nowrap">
                  Certified Partner
                </span>
                <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded font-medium">
                  Featured
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 2: ABOUT (White background)                                  */}
      {/* ==================================================================== */}
      <section id="about" className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          {/* Badge row */}
          <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center shrink-0">
              1
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
              {aboutLabel}
            </span>
          </div>

          {/* Heading h2 */}
          <h2 className="px-5 sm:px-8 lg:px-12 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16 lg:mb-28">
            Strategy-led creatives, delivering
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            results in digital and beyond.
          </h2>

          {/* Content area: Responsive */}
          {/* MOBILE/TABLET (lg:hidden) */}
          <div className="block lg:hidden px-5 sm:px-8">
            <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900 max-w-xl mb-6">
              Through research, creative thinking and iteration we help growing brands realize their digital full potential.
            </p>
            <div className="mb-10">
              <TextRollButton text="About our studio" href="/studio" variant="orange" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <div className="sm:w-[45%] aspect-[438/346] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85"
                  alt="Matrix Root Creative Process Detail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="sm:w-[55%] aspect-[900/600] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85"
                  alt="Matrix Root Workspace Overview"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* DESKTOP (hidden lg:grid) */}
          <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-5 sm:px-8 lg:px-12">
            {/* Left column (self-end) */}
            <div className="self-end aspect-[438/346] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85"
                alt="Creative Process Detail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Center column (self-start, flex justify-end) */}
            <div className="self-start flex flex-col justify-end items-start pb-2">
              <p className="text-[16px] xl:text-[18px] leading-[1.65] font-medium text-gray-900 whitespace-nowrap">
                Through research, creative thinking
                <br />
                and iteration we help growing brands
                <br />
                realize their digital full potential.
              </p>
              <div className="mt-8">
                <TextRollButton text="About our studio" href="/studio" variant="orange" />
              </div>
            </div>

            {/* Right column (self-end) */}
            <div className="self-end aspect-[3/2] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85"
                alt="Workspace Overview"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 3: CASE STUDIES (Light gray background)                      */}
      {/* ==================================================================== */}
      <section id="projects" className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto">
          {/* Badge row */}
          <div className="px-5 sm:px-8 lg:px-12 flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center shrink-0">
                2
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
                Featured client work
              </span>
            </div>
            <a
              href="/projects"
              className="text-xs font-semibold text-[#F26522] hover:underline flex items-center gap-1"
            >
              View all projects <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Heading h2 */}
          <h2 className="px-5 sm:px-8 lg:px-12 text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16">
            Our projects
          </h2>

          {/* Cards Grid: 1 col on mobile, 2 cols md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
            {/* CARD 1: Narrativ */}
            <div>
              <a href="/projects" className="block group relative aspect-[329/246] rounded-2xl overflow-hidden bg-[#1a1d2e] cursor-pointer shadow-sm">
                <video
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Expanding button on hover */}
                <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[148px] bg-white rounded-full flex items-center justify-between overflow-hidden shadow-md transition-all duration-300 ease-in-out px-2.5">
                  <span className="text-[13px] font-medium text-gray-900 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pl-1">
                    Learn more
                  </span>
                  <span className="shrink-0 flex items-center justify-center">
                    <LucideLinkArcIcon className="w-3.5 h-3.5 text-gray-900 transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
                  </span>
                </div>
              </a>

              <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
                Winner of Site of the Month 2025 - an interactive 3D showcase driving record engagement
              </p>
              <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
                Narrativ
              </h3>
            </div>

            {/* CARD 2: Luminar */}
            <div>
              <a href="/projects" className="block group relative aspect-square rounded-2xl overflow-hidden bg-[#6b6b6b] cursor-pointer shadow-sm">
                <video
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Expanding button on hover */}
                <div className="absolute bottom-4 left-4 bg-gray-900 text-white h-9 w-9 group-hover:w-[168px] rounded-full flex items-center justify-between overflow-hidden shadow-md transition-all duration-300 ease-in-out px-2.5">
                  <span className="text-[13px] font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pl-1">
                    View case study
                  </span>
                  <span className="shrink-0 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
                  </span>
                </div>
              </a>

              <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
                Transforming a dated platform into a conversion-focused brand experience
              </p>
              <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
                Luminar
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="connect" className="bg-white border-t border-gray-200/80 py-12 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo-transparent.png"
              onError={(e) => {
                e.currentTarget.src = "/logo.png";
              }}
              alt="Matrix Root"
              className="h-7 w-7 object-contain"
            />
            <span className="text-sm font-semibold tracking-tight text-gray-900">
              {brandName}
            </span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-500">
              Hyderabad Software Studio & Talent Incubator
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <a href="/studio" className="hover:text-gray-900 transition-colors">Studio</a>
            <a href="/projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="/motion" className="hover:text-gray-900 transition-colors">Motion</a>
            <a href="/journal" className="hover:text-gray-900 transition-colors">Journal</a>
            <a href="/connect" className="hover:text-gray-900 transition-colors">Connect</a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#25D366] hover:underline"
            >
              WhatsApp (+91 8121358586)
            </a>
            <a href={CALL_TEL} className="font-medium text-[#F26522] hover:underline">
              Call 8121358586
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
