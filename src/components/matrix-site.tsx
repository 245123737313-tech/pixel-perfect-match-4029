import { Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Code2, Github, Linkedin, Menu, Network, X, Zap } from "lucide-react";
import { useState, type ReactNode } from "react";
import teamImage from "@/assets/matrix-root-engineering.jpg";

const pages = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/incubator", label: "Talent incubator" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const linkStyle = "text-sm text-muted-foreground transition-colors hover:text-foreground";
const buttonStyle =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90";
const outlineStyle =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-glass-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary";

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-glass-border bg-background/95 backdrop-blur">
        <nav aria-label="Main navigation" className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" aria-label="Matrix Root home" className="flex items-center gap-3">
            <img src="/logo.png" alt="" width={36} height={36} className="h-9 w-9 object-contain" />
            <span className="text-lg font-semibold">Matrix <span className="text-primary">Root</span></span>
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            {pages.slice(1, -1).map((page) => (
              <Link
                key={page.to}
                to={page.to}
                activeProps={{ className: "text-sm text-foreground" }}
                inactiveProps={{ className: linkStyle }}
              >
                {page.label}
              </Link>
            ))}
          </div>
          <Link to="/contact" className={`${buttonStyle} hidden min-h-10 px-4 py-2 md:inline-flex`}>
            Start a conversation <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-glass-border px-5 py-4 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {pages.slice(1).map((page) => (
                <Link key={page.to} to={page.to} className={linkStyle} onClick={() => setMenuOpen(false)}>
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="border-t border-glass-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1fr_auto_auto] md:items-start lg:px-8">
          <div className="max-w-md">
            <Link to="/" className="text-lg font-semibold">Matrix <span className="text-primary">Root</span></Link>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Software solutions and a founder-first talent incubator, built from Hyderabad.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            {pages.map((page) => (
              <Link key={page.to} to={page.to} className={linkStyle}>{page.label}</Link>
            ))}
          </nav>
          <div>
            <p className="text-sm font-medium">Hyderabad, India</p>
            <a className={`${linkStyle} mt-3 inline-block`} href="mailto:matrixroottechnologies@gmail.com">
              matrixroottechnologies@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-glass-border px-5 py-4 text-xs text-muted-foreground">
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
    <section className="border-b border-glass-border px-5 pb-16 pt-16 md:pb-20 md:pt-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{description}</p>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
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
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/95 via-background/75 to-background/30" />
        <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase text-primary">Engineering from Hyderabad, India</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] md:text-6xl">
              Software built for what comes next.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/80">
              We design and deliver dependable digital products, platforms, and systems—while helping the next generation of founders bring their ideas to life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className={buttonStyle}>Talk about your project <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
              <Link to="/services" className={outlineStyle}>Explore our services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-glass-border px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <SectionTitle eyebrow="What we do" title="A technology partner from first sketch to production." />
          <p className="max-w-2xl leading-7 text-muted-foreground">
            Matrix Root brings product thinking and hands-on engineering together. We work with businesses, startups, and organizations to turn complex needs into software people can rely on.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-7xl gap-7 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="border-t border-glass-border pt-5">
              <p className="font-mono text-xs text-muted-foreground">0{index + 1}</p>
              <Icon aria-hidden="true" className="mt-5 h-6 w-6 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-7xl">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            View all services <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-void px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-primary">Two engines. One community.</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">We build products—and build people.</h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              Alongside client work, our talent incubator supports student founders as they grow startups, learn from production sprints, and develop the skills to ship real products.
            </p>
            <Link to="/incubator" className={`${outlineStyle} mt-6`}>Explore the talent incubator <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-t border-glass-border py-5"><Boxes aria-hidden="true" className="h-6 w-6 text-primary" /><p className="mt-4 font-semibold">Live product sprints</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Learn by contributing to real work, with guidance along the way.</p></div>
            <div className="border-t border-glass-border py-5"><Network aria-hidden="true" className="h-6 w-6 text-primary" /><p className="mt-4 font-semibold">Founder support</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Help student teams move from an early idea toward a growing startup.</p></div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-glass-border pt-8 md:flex-row md:items-end">
          <div><p className="font-mono text-xs uppercase text-primary">Have a challenge in mind?</p><h2 className="mt-3 text-3xl font-semibold">Let’s work out what to build.</h2></div>
          <Link to="/contact" className={buttonStyle}>Get in touch <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}