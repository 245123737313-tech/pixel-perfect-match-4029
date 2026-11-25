import { Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Code2, Network, Zap } from "lucide-react";
import { type ReactNode } from "react";
import teamImage from "@/assets/matrix-root-engineering.jpg";
import { CALL_TEL, TextRollButton, WHATSAPP_NUMBER, WHATSAPP_URL } from "./studio-landing";
import { SiteHeader } from "./site-header";

export { CALL_TEL, WHATSAPP_NUMBER, WHATSAPP_URL, SiteHeader };

export const pages = [
  { to: "/studio", label: "Studio" },
  { to: "/projects", label: "Projects" },
  { to: "/journal", label: "Journal" },
  { to: "/connect", label: "Connect" },
] as const;

export const linkStyle = "text-sm text-gray-600 transition-colors hover:text-gray-900";
export const buttonStyle =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#F26522] hover:bg-[#e05a1a] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0";
export const outlineStyle =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 shadow-2xs transition-all hover:border-gray-900 hover:-translate-y-0.5";

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-200/80 py-12 px-5 sm:px-8 lg:px-12 mt-20">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Link to="/" className="group flex items-center gap-2.5">
            <img
              src="/logo-transparent.png"
              onError={(e) => {
                e.currentTarget.src = "/logo.png";
              }}
              alt="Matrix Root"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="text-sm font-semibold tracking-tight text-gray-900">Matrix Root</span>
          </Link>
          <span className="text-xs text-gray-400">·</span>
          <span className="text-xs text-gray-500 hidden sm:inline-block">
            Hyderabad Software Studio & Talent Incubator
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-sm text-gray-600">
          {pages.map((page) => (
            <Link key={page.to} to={page.to} className="hover:text-gray-900 transition-colors">
              {page.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-700 hover:text-gray-900 hover:underline"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#EFEFEF] text-gray-900 selection:bg-gray-900/10 selection:text-gray-900 font-sans antialiased">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  badgeNumber = "1",
}: {
  eyebrow: string;
  title: string;
  description: string;
  badgeNumber?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-200/80 px-5 pt-14 pb-16 sm:pt-20 sm:pb-20 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        {/* Axion Badge Row */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center shrink-0">
            {badgeNumber}
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900 bg-white">
            {eyebrow}
          </span>
        </div>
        <h1 className="text-[clamp(1.75rem,5vw,3.8rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-4xl">
          {title}
        </h1>
        <p className="mt-6 text-[15px] sm:text-[17px] leading-[1.65] font-medium text-gray-600 max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  children,
  badgeNumber = "2",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  badgeNumber?: string;
}) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center shrink-0">
          {badgeNumber}
        </span>
        <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900 bg-white">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900">
        {title}
      </h2>
      {children && (
        <p className="mt-4 text-[15px] sm:text-[17px] leading-[1.65] font-medium text-gray-600 max-w-2xl">
          {children}
        </p>
      )}
    </div>
  );
}

export function HomePage() {
  const capabilities = [
    {
      icon: Code2,
      title: "Digital products",
      text: "Web and mobile platforms shaped around the way your business works.",
    },
    {
      icon: Network,
      title: "Systems & APIs",
      text: "Reliable backend services, integrations, and data foundations.",
    },
    {
      icon: Zap,
      title: "Cloud & automation",
      text: "DevOps workflows and applied AI that make operations more capable.",
    },
  ];

  return (
    <>
      <section className="relative isolate flex min-h-[620px] items-end overflow-hidden md:min-h-[700px]">
        <img
          src={teamImage}
          alt="Matrix Root engineers collaborating on software architecture in Hyderabad"
          width={1600}
          height={1104}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/95 via-background/80 to-background/35" />
        <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/95 px-3.5 py-1 text-xs font-mono font-medium text-primary shadow-xs backdrop-blur-xs animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Engineering from Hyderabad, India
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-6xl animate-slide-up">
              Software built for what comes next.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/85 animate-slide-up-delay-1">
              We design and deliver dependable digital products, platforms, and systems—while
              helping the next generation of founders bring their ideas to life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-slide-up-delay-2">
              <Link to="/contact" className={`${buttonStyle} group`}>
                Talk about your project{" "}
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link to="/services" className={outlineStyle}>
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <SectionTitle
            eyebrow="What we do"
            title="A technology partner from first sketch to production."
          />
          <p className="max-w-2xl leading-7 text-muted-foreground">
            Matrix Root brings product thinking and hands-on engineering together. We work with
            businesses, startups, and organizations to turn complex needs into software people can
            rely on.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl gap-7 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-border/80 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-muted-foreground transition-colors duration-200 group-hover:text-primary">
                  0{index + 1}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-border transition-colors duration-200 group-hover:bg-primary" />
              </div>
              <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/20">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-200 hover:gap-3"
          >
            View all services{" "}
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      <section className="bg-void px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary">
              Two engines. One community.
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
              We build products—and build people.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              Alongside client work, our talent incubator supports student founders as they grow
              startups, learn from production sprints, and develop the skills to ship real products.
            </p>
            <Link to="/incubator" className={`${outlineStyle} group mt-8`}>
              Explore the talent incubator{" "}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="group rounded-2xl border border-border/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <Boxes aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="mt-4 font-semibold text-foreground transition-colors group-hover:text-primary">
                Live product sprints
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Learn by contributing to real work, with guidance along the way.
              </p>
            </div>
            <div className="group rounded-2xl border border-border/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <Network aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="mt-4 font-semibold text-foreground transition-colors group-hover:text-primary">
                Founder support
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Help student teams move from an early idea toward a growing startup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl border border-border/80 bg-gradient-to-r from-white via-slate-50/50 to-orange-50/20 p-8 shadow-xs md:flex-row md:items-center md:p-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary">
              Have a challenge in mind?
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Let’s work out what to build.
            </h2>
          </div>
          <Link to="/contact" className={`${buttonStyle} group shrink-0`}>
            Get in touch{" "}
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
