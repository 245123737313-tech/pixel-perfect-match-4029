import React, { Component, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Shader, ChromaFlow, FilmGrain, FlutedGlass, Swirl } from "shaders/react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./matrix-site";

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
      <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
        <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#F26522]" />
      </span>
    </>
  );

  const className =
    "group inline-flex items-center gap-3 rounded-full bg-[#F26522] hover:bg-[#e05a1a] text-white text-[13px] sm:text-[14px] font-medium pl-5 sm:pl-6 pr-2 py-2 transition-colors duration-300 shadow-sm cursor-pointer";

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
  heroLabel = "Matrix Root Studio",
  aboutLabel = "Introducing Matrix Root",
}: StudioLandingProps) {
  return (
    <div className="min-h-screen bg-[#EFEFEF] text-gray-900 selection:bg-gray-900/10 selection:text-gray-900">
      {/* ==================================================================== */}
      {/* SECTION 1: HERO (Full viewport height)                                */}
      {/* ==================================================================== */}
      <section className="relative flex flex-col justify-between min-h-screen w-full bg-[#EFEFEF] overflow-hidden">
        {/* Animated shader overlay (absolute, inset-0, z-10, pointer-events-none) */}
        <HeroShaderOverlay />

        {/* Single Unified Site Header */}
        <SiteHeader />

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
            {/* Single focused primary action button */}
            <TextRollButton
              text="Start a project"
              href={WHATSAPP_URL}
              variant="orange"
              target="_blank"
              rel="noopener noreferrer"
            />
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
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F26522] hover:bg-[#e05a1a] text-white text-xs font-medium transition-colors shadow-2xs"
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
      <SiteFooter />
    </div>
  );
}
