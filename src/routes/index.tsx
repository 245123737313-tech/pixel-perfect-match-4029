import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  Boxes,
  Calendar,
  Check,
  Clock,
  Code2,
  Gauge,
  LayoutDashboard,
  Mail,
  Menu,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";

const TITLE = "Matrix Root — Custom Software & Web Development Agency";
const DESC =
  "Production-grade web apps, dashboards and backend infrastructure with zero bloat and 100% code ownership.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- shared bits ---------- */
function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Matrix Root home">
      <img
        src="/logo.png"
        alt="Matrix Root logo"
        className="h-10 w-10 rounded-lg object-contain transition-transform group-hover:scale-105"
      />
      <span className="text-lg font-semibold tracking-tight">
        <span className="text-primary">Matrix</span> Root
      </span>
    </a>
  );
}

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-lg glass px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary";

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 px-5 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

/* ---------- data ---------- */
const NAV = ["Services", "Process", "Case Studies", "About", "Contact"];
const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

const SERVICES = [
  {
    icon: Code2,
    title: "Custom Web Applications & MVPs",
    body: "High-performance SPAs, SaaS platforms, fast-turnaround MVPs, and payment integration.",
  },
  {
    icon: LayoutDashboard,
    title: "Business Portals & Dashboards",
    body: "Internal admin tools, multi-tenant portals, RBAC permissions, and automated workflows.",
  },
  {
    icon: Server,
    title: "API & Backend Architecture",
    body: "Scalable REST/GraphQL APIs, database modeling, secure auth systems, and third-party webhooks.",
  },
  {
    icon: Gauge,
    title: "Performance & Code Refactoring",
    body: "Database indexing, page speed optimization, security audits, and legacy modernization.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Discovery & Technical Scoping",
    body: "Architecture blueprint and sprint planning aligned to your business goals.",
    tags: ["Blueprint", "Sprint plan"],
  },
  {
    n: "02",
    title: "Architecture & Rapid Prototyping",
    body: "Data schema design and clickable UI prototypes before a line of production code.",
    tags: ["Data schema", "UI prototypes"],
  },
  {
    n: "03",
    title: "Agile Sprints & Live Demos",
    body: "Weekly builds you can click through, with continuous feedback loops.",
    tags: ["Weekly builds", "Feedback"],
  },
  {
    n: "04",
    title: "QA, Security & Deployment",
    body: "Automated testing, CI/CD pipelines, and a complete, documented handover.",
    tags: ["CI/CD", "Handover"],
  },
];

const CASES = [
  {
    client: "Fintech Payments Startup",
    challenge: "Legacy transaction pipeline buckled under peak load, causing failed settlements.",
    solution:
      "Rebuilt the ledger service as event-driven Node.js workers with PostgreSQL partitioning.",
    impact: "Reduced processing latency by 65%",
    tags: ["Node.js", "PostgreSQL", "Docker"],
  },
  {
    client: "Logistics Operations Firm",
    challenge: "Dispatch teams juggled spreadsheets and email to coordinate 400+ daily jobs.",
    solution: "Multi-tenant ops dashboard with RBAC, live job board, and automated routing rules.",
    impact: "Automated 30+ manual hours weekly",
    tags: ["React", "Tailwind", "PostgreSQL"],
  },
  {
    client: "B2B SaaS Platform",
    challenge: "A slow, bloated marketing app and onboarding flow was killing trial conversions.",
    solution: "Refactored to a lean React SPA, edge caching, and indexed query paths.",
    impact: "3.1× faster load, +42% trial signups",
    tags: ["React", "Node.js", "Docker"],
  },
];

const TYPES = [
  { id: "web", label: "Custom Web App", weeks: 8 },
  { id: "dash", label: "Internal Dashboard", weeks: 6 },
  { id: "api", label: "API / Backend", weeks: 5 },
  { id: "opt", label: "Optimization", weeks: 3 },
];
const TIMELINES = [
  { id: "rush", label: "Rush", hint: "2–4 wks", mult: 0.6 },
  { id: "standard", label: "Standard", hint: "6–8 wks", mult: 1 },
  { id: "flex", label: "Flexible", hint: "No rush", mult: 1.25 },
];
const FEATURES = [
  { id: "auth", label: "Auth / RBAC", weeks: 1 },
  { id: "pay", label: "Payment Gateway", weeks: 1 },
  { id: "apis", label: "Third-party APIs", weeks: 1 },
  { id: "rt", label: "Real-time Sync", weeks: 1.5 },
];

type FormState = {
  name: string;
  email: string;
  company: string;
  category: string;
  budget: string;
  timeline: string;
  summary: string;
};
const EMPTY: FormState = {
  name: "",
  email: "",
  company: "",
  category: "",
  budget: "",
  timeline: "",
  summary: "",
};

/* ---------- page ---------- */
function Index() {
  const [form, setForm] = useState<FormState>(EMPTY);
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Estimator
        onRequest={(f) => {
          setForm((s) => ({ ...s, ...f }));
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          toast.success("Spec added to your project intake form.");
        }}
      />
      <CaseStudies />
      <About />
      <Contact form={form} setForm={setForm} />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-glass-border bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${slug(n)}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n}
            </a>
          ))}
        </div>
        <a href="#contact" className={`${btnPrimary} hidden md:inline-flex`}>
          Start a Project
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="flex flex-col gap-4 border-t border-glass-border px-5 py-6 md:hidden">
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${slug(n)}`}
              onClick={() => setOpen(false)}
              className="text-muted-foreground"
            >
              {n}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className={btnPrimary}>
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-5 pb-24 pt-40 md:pb-32 md:pt-48">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="glow-bg pointer-events-none absolute left-1/2 top-10 h-[600px] w-[900px] -translate-x-1/2" />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Custom Web & Technical Solutions
        </span>
        <h1 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
          Production-Grade Software & Scalable Web Solutions{" "}
          <span className="bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
            Engineered for Modern Business.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          We design, architect, and deliver custom web applications, high-performance dashboards,
          and robust backend infrastructure with zero bloat and 100% code ownership.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#contact" className={btnPrimary}>
            Book Scoping Call <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#services" className={btnGhost}>
            Explore Capabilities
          </a>
        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {[
            [ShieldCheck, "100% IP Ownership"],
            [Boxes, "Modern Production Stacks"],
            [Terminal, "Direct Engineer Access"],
          ].map(([I, t]) => {
            const Icon = I as typeof ShieldCheck;
            return (
              <span key={t as string} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />
                {t as string}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <Section id="services">
      <SectionHead
        eyebrow="Services"
        title="Core engineering capabilities"
        sub="Four focused disciplines, delivered by senior engineers who own the outcome."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {SERVICES.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="group glass relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
          >
            <div className="glow-bg pointer-events-none absolute -right-20 -top-20 h-60 w-60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-accent">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  const [active, setActive] = useState(0);
  return (
    <Section id="process" className="bg-void">
      <SectionHead eyebrow="How We Work" title="A predictable engineering process" />
      <div className="mb-10 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground">
          <Sparkles className="h-3.5 w-3.5" /> Fixed-Scope Predictability or Monthly Retainers
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {STEPS.map((s, i) => (
          <button
            key={s.n}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`glass rounded-2xl p-6 text-left transition-all duration-300 ${active === i ? "border-primary/40 shadow-glow" : "opacity-70 hover:opacity-100"}`}
          >
            <span
              className={`font-mono text-sm ${active === i ? "text-primary" : "text-muted-foreground"}`}
            >
              {s.n}
            </span>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </Section>
  );
}

function Chip({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`rounded-lg border px-4 py-2.5 text-left text-sm transition-all ${on ? "border-primary bg-accent text-accent-foreground" : "border-glass-border text-muted-foreground hover:border-primary/40 hover:text-foreground"}`}
    >
      {children}
    </button>
  );
}

function Estimator({ onRequest }: { onRequest: (f: Partial<FormState>) => void }) {
  const [type, setType] = useState("web");
  const [timeline, setTimeline] = useState("standard");
  const [feats, setFeats] = useState<string[]>(["auth"]);

  const est = useMemo(() => {
    const t = TYPES.find((x) => x.id === type)!;
    const tl = TIMELINES.find((x) => x.id === timeline)!;
    const base =
      t.weeks + FEATURES.filter((f) => feats.includes(f.id)).reduce((a, f) => a + f.weeks, 0);
    const weeks = Math.max(2, Math.round(base * tl.mult));
    return { weeks, sprints: Math.ceil(weeks / 2), t, tl };
  }, [type, timeline, feats]);

  const toggle = (id: string) =>
    setFeats((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  return (
    <Section id="estimator">
      <SectionHead
        eyebrow="Scope Estimator"
        title="Estimate your project in seconds"
        sub="Pick your spec and get an instant sprint timeline."
      />
      <div className="glass grid overflow-hidden rounded-3xl md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-8 p-8">
          <div>
            <p className="mb-3 text-sm font-medium">Project Type</p>
            <div className="grid grid-cols-2 gap-2">
              {TYPES.map((t) => (
                <Chip key={t.id} on={type === t.id} onClick={() => setType(t.id)}>
                  {t.label}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-medium">Target Timeline</p>
            <div className="grid grid-cols-3 gap-2">
              {TIMELINES.map((t) => (
                <Chip key={t.id} on={timeline === t.id} onClick={() => setTimeline(t.id)}>
                  <span className="block font-medium">{t.label}</span>
                  <span className="text-xs opacity-70">{t.hint}</span>
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-medium">Core Features</p>
            <div className="grid grid-cols-2 gap-2">
              {FEATURES.map((f) => (
                <Chip key={f.id} on={feats.includes(f.id)} onClick={() => toggle(f.id)}>
                  <span className="flex items-center gap-2">
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded border ${feats.includes(f.id) ? "border-primary bg-primary" : "border-muted-foreground"}`}
                    >
                      {feats.includes(f.id) && (
                        <Check className="h-3 w-3 text-primary-foreground" />
                      )}
                    </span>
                    {f.label}
                  </span>
                </Chip>
              ))}
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-between border-t border-glass-border bg-void p-8 md:border-l md:border-t-0">
          <div className="glow-bg pointer-events-none absolute inset-0" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Estimated timeline
            </p>
            <p className="mt-4 text-6xl font-semibold tracking-tight text-primary">
              ~{est.weeks}
              <span className="ml-2 text-2xl text-foreground">weeks</span>
            </p>
            <p className="mt-2 text-muted-foreground">{est.sprints} two-week sprints</p>
            <ul className="mt-8 space-y-2 font-mono text-sm text-muted-foreground">
              <li>› {est.t.label}</li>
              <li>› {est.tl.label} delivery</li>
              <li>
                ›{" "}
                {feats.length
                  ? FEATURES.filter((f) => feats.includes(f.id))
                      .map((f) => f.label)
                      .join(", ")
                  : "No add-on features"}
              </li>
            </ul>
          </div>
          <button
            className={`${btnPrimary} relative mt-8 w-full`}
            onClick={() =>
              onRequest({
                category: est.t.label,
                timeline: est.tl.label,
                summary: `Spec from estimator: ${est.t.label}, ${est.tl.label} timeline (~${est.weeks} weeks). Features: ${
                  FEATURES.filter((f) => feats.includes(f.id))
                    .map((f) => f.label)
                    .join(", ") || "none"
                }.`,
              })
            }
          >
            Request Official Scope for this Spec <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}

function CaseStudies() {
  return (
    <Section id="case-studies" className="bg-void">
      <SectionHead eyebrow="Featured Work" title="Measurable outcomes, shipped" />
      <div className="grid gap-5 md:grid-cols-3">
        {CASES.map((c) => (
          <article
            key={c.client}
            className="glass flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {c.client}
            </p>
            <p className="mt-5 text-2xl font-semibold leading-tight text-primary">{c.impact}</p>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-medium">Challenge</dt>
                <dd className="mt-1 text-muted-foreground">{c.challenge}</dd>
              </div>
              <div>
                <dt className="font-medium">Solution</dt>
                <dd className="mt-1 text-muted-foreground">{c.solution}</dd>
              </div>
            </dl>
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-glass-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function About() {
  const pillars = [
    [
      "Pragmatic architecture",
      "We choose boring, proven tools where they win and modern ones where they matter.",
    ],
    ["No technical debt", "Clean, tested code that your next hire can read on day one."],
    ["Clean documentation", "Architecture notes, runbooks, and API docs ship with every release."],
    ["Full client autonomy", "You own the repos, infra, and IP. No lock-in, ever."],
  ];
  return (
    <Section id="about">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            About Matrix Root
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            An engineering-first studio.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Matrix Root is a bespoke software agency for businesses and startups that need things
            built right the first time. You work directly with the engineers writing your code — no
            account managers, no bloat.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map(([t, b]) => (
            <div key={t} className="glass rounded-2xl p-5">
              <Zap className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-semibold">{t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const field =
  "w-full rounded-lg border border-input bg-void px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring";

function Contact({
  form,
  setForm,
}: {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}) {
  const set = (k: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));
  const submit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll reply within 24 hours.");
    setForm(EMPTY);
  };
  return (
    <Section id="contact" className="bg-void">
      <SectionHead
        eyebrow="Project Intake"
        title="Let's scope your build"
        sub="Tell us what you're building. A senior engineer will reply personally."
      />
      <div className="grid gap-6 md:grid-cols-[1.6fr_1fr]">
        <form onSubmit={submit} className="glass grid gap-4 rounded-3xl p-8 sm:grid-cols-2">
          <label className="text-sm">
            Full Name
            <input
              required
              value={form.name}
              onChange={set("name")}
              className={`${field} mt-1.5`}
              placeholder="Jane Doe"
            />
          </label>
          <label className="text-sm">
            Business Email
            <input
              required
              type="email"
              value={form.email}
              onChange={set("email")}
              className={`${field} mt-1.5`}
              placeholder="jane@company.com"
            />
          </label>
          <label className="text-sm sm:col-span-2">
            Company Name
            <input
              value={form.company}
              onChange={set("company")}
              className={`${field} mt-1.5`}
              placeholder="Acme Inc."
            />
          </label>
          <label className="text-sm">
            Project Category
            <select
              required
              value={form.category}
              onChange={set("category")}
              className={`${field} mt-1.5`}
            >
              <option value="">Select…</option>
              {TYPES.map((t) => (
                <option key={t.id}>{t.label}</option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            Budget Range
            <select
              required
              value={form.budget}
              onChange={set("budget")}
              className={`${field} mt-1.5`}
            >
              <option value="">Select…</option>
              {["< $10k", "$10k – $25k", "$25k – $50k", "$50k – $100k", "$100k+"].map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </label>
          <fieldset className="text-sm sm:col-span-2">
            <legend>Timeline</legend>
            <div className="mt-1.5 grid grid-cols-3 gap-2">
              {TIMELINES.map((t) => (
                <Chip
                  key={t.id}
                  on={form.timeline === t.label}
                  onClick={() => setForm((s) => ({ ...s, timeline: t.label }))}
                >
                  {t.label} <span className="text-xs opacity-70">· {t.hint}</span>
                </Chip>
              ))}
            </div>
          </fieldset>
          <label className="text-sm sm:col-span-2">
            Project Summary
            <textarea
              required
              rows={5}
              value={form.summary}
              onChange={set("summary")}
              className={`${field} mt-1.5 resize-none`}
              placeholder="What are you building, and what does success look like?"
            />
          </label>
          <button type="submit" className={`${btnPrimary} sm:col-span-2`}>
            Submit Project Brief <ArrowRight className="h-4 w-4" />
          </button>
        </form>
        <div className="flex flex-col gap-4">
          {[
            {
              icon: Mail,
              t: "Business email",
              b: "matrixroottechnologies@gmail.com",
              href: "mailto:matrixroottechnologies@gmail.com",
            },
            { icon: Clock, t: "Response SLA", b: "Replies within 24 hours" },
            {
              icon: Calendar,
              t: "30-min discovery call",
              b: "Book a slot with an engineer →",
              href: "#contact",
            },
          ].map(({ icon: Icon, t, b, href }) => {
            const inner = (
              <>
                <Icon className="h-5 w-5 text-primary" />
                <p className="mt-3 text-sm text-muted-foreground">{t}</p>
                <p className="mt-1 font-medium">{b}</p>
              </>
            );
            return href ? (
              <a
                key={t}
                href={href}
                className="glass rounded-2xl p-6 transition-colors hover:border-primary/40"
              >
                {inner}
              </a>
            ) : (
              <div key={t} className="glass rounded-2xl p-6">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-glass-border px-5 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            We build software the way it should be built: lean, documented, and fully yours.
          </p>
          <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" /> NDA on request. 100% IP transferred on
            delivery.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">Quick links</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n}>
                <a href={`#${slug(n)}`} className="hover:text-foreground">
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">Legal</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#top" className="hover:text-foreground">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#top" className="hover:text-foreground">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} Matrix Root. All rights reserved.
      </p>
    </footer>
  );
}
