import { Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Code2, Menu, MessageSquare, Network, Phone, X, Zap } from "lucide-react";
import { useState, type ReactNode } from "react";
import teamImage from "@/assets/matrix-root-engineering.jpg";

export const WHATSAPP_NUMBER = "8121358586";
export const WHATSAPP_URL = "https://wa.me/918121358586?text=Hi%20Matrix%20Root,%20I'd%20like%20to%20start%20a%20project";
export const CALL_TEL = "tel:+918121358586";

export const pages = [
  { to: "/studio", label: "Studio" },
  { to: "/projects", label: "Projects" },
  { to: "/motion", label: "Motion" },
  { to: "/journal", label: "Journal" },
  { to: "/connect", label: "Connect" },
] as const;

const linkStyle = "text-sm text-muted-foreground transition-colors hover:text-foreground";
const buttonStyle =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-deep hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0";
const outlineStyle =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-white px-5 py-3 text-sm font-medium text-foreground shadow-2xs transition-all duration-300 hover:border-primary/50 hover:bg-slate-50/80 hover:text-primary hover:-translate-y-0.5 hover:shadow-sm";

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary-deep">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-md transition-all duration-200">
        <nav aria-label="Main navigation" className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Top Left: Matrix Root Logo */}
          <Link to="/" aria-label="Matrix Root home" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">
            <img
              src="/logo-transparent.png"
              onError={(e) => {
                e.currentTarget.src = "/logo.png";
              }}
              alt="Matrix Root"
              width={36}
              height={36}
              className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
            />
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Matrix <span className="font-bold text-primary">Root</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-7 md:flex">
            {pages.map((page) => (
              <Link
                key={page.to}
                to={page.to}
                className="group relative py-1 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                activeProps={{ className: "text-foreground font-semibold" }}
              >
                {page.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-primary transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTAs: Book a Call & Start a Project */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={CALL_TEL}
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-foreground shadow-2xs transition-all duration-200 hover:border-primary/40 hover:bg-slate-50 hover:text-primary hover:-translate-y-0.5"
              title={`Call ${WHATSAPP_NUMBER}`}
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span>Book a call: {WHATSAPP_NUMBER}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#20ba59] hover:shadow-md hover:-translate-y-0.5"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Start a project</span>
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-slate-100 active:scale-95 md:hidden cursor-pointer"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {menuOpen && (
          <div className="border-t border-border/80 bg-white/95 px-5 py-5 backdrop-blur-md md:hidden animate-fade-in shadow-lg">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {pages.map((page) => (
                <Link
                  key={page.to}
                  to={page.to}
                  className={`${linkStyle} py-1 text-base font-medium transition-colors hover:text-primary`}
                  onClick={() => setMenuOpen(false)}
                >
                  {page.label}
                </Link>
              ))}

              <div className="pt-3 border-t border-border/60 flex flex-col gap-2.5">
                <a
                  href={CALL_TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground shadow-2xs"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span>Book a call: {WHATSAPP_NUMBER}</span>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Start a project on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="border-t border-border/80 bg-slate-50/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1fr_auto_auto] md:items-start lg:px-8">
          <div className="max-w-md">
            <Link to="/" className="group inline-flex items-center gap-2 text-lg font-semibold transition-transform duration-200 hover:scale-[1.01]">
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
              <span className="text-foreground">Matrix</span>
              <span className="font-bold text-primary">Root</span>
            </Link>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Software solutions and a founder-first talent incubator, built from Hyderabad. High-performance web apps, distributed systems, and launch-grade motion.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: +91 {WHATSAPP_NUMBER}</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href={CALL_TEL}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: {WHATSAPP_NUMBER}</span>
              </a>
            </div>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Navigation</p>
            {pages.map((page) => (
              <Link
                key={page.to}
                to={page.to}
                className="inline-flex items-center text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-primary"
              >
                {page.label}
              </Link>
            ))}
          </nav>
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Location</p>
            <p className="mt-3 text-sm font-medium text-foreground">Hyderabad, Telangana, India</p>
            <a
              className="mt-3 inline-block text-sm text-muted-foreground transition-colors hover:text-primary hover:underline"
              href="mailto:matrixroottechnologies@gmail.com"
            >
              matrixroottechnologies@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-border/80 px-5 py-4 text-xs text-muted-foreground">
          <p className="mx-auto max-w-7xl">© {new Date().getFullYear()} Matrix Root. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-slate-50/80 via-white to-background px-5 pb-16 pt-16 md:pb-20 md:pt-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-wider text-primary animate-fade-in">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl animate-slide-up">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg animate-slide-up-delay-1">
          {description}
        </p>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-wider text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">{title}</h2>
      {children && <p className="mt-4 leading-7 text-muted-foreground">{children}</p>}
    </div>
  );
}

export function HomePage() {
  const capabilities = [
    { icon: Code2, title: "Digital products", text: "Web and mobile platforms shaped around the way your business works." },
    { icon: Network, title: "Systems & APIs", text: "Reliable backend services, integrations, and data foundations." },
    { icon: Zap, title: "Cloud & automation", text: "DevOps workflows and applied AI that make operations more capable." },
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
              We design and deliver dependable digital products, platforms, and systems—while helping the next generation of founders bring their ideas to life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-slide-up-delay-2">
              <Link to="/contact" className={`${buttonStyle} group`}>
                Talk about your project{" "}
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
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
          <SectionTitle eyebrow="What we do" title="A technology partner from first sketch to production." />
          <p className="max-w-2xl leading-7 text-muted-foreground">
            Matrix Root brings product thinking and hands-on engineering together. We work with businesses, startups, and organizations to turn complex needs into software people can rely on.
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
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="bg-void px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary">Two engines. One community.</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
              We build products—and build people.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              Alongside client work, our talent incubator supports student founders as they grow startups, learn from production sprints, and develop the skills to ship real products.
            </p>
            <Link to="/incubator" className={`${outlineStyle} group mt-8`}>
              Explore the talent incubator{" "}
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="group rounded-2xl border border-border/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <Boxes aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="mt-4 font-semibold text-foreground transition-colors group-hover:text-primary">Live product sprints</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Learn by contributing to real work, with guidance along the way.</p>
            </div>
            <div className="group rounded-2xl border border-border/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <Network aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="mt-4 font-semibold text-foreground transition-colors group-hover:text-primary">Founder support</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Help student teams move from an early idea toward a growing startup.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl border border-border/80 bg-gradient-to-r from-white via-slate-50/50 to-orange-50/20 p-8 shadow-xs md:flex-row md:items-center md:p-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary">Have a challenge in mind?</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Let’s work out what to build.</h2>
          </div>
          <Link to="/contact" className={`${buttonStyle} group shrink-0`}>
            Get in touch{" "}
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
