import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Layers,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Zap,
} from "lucide-react";
import { SiteShell } from "@/components/matrix-site";
import { WHATSAPP_URL, CALL_TEL, WHATSAPP_NUMBER } from "@/components/studio-landing";

const title = "Studio | Matrix Root — Product Engineering & Software Architecture";
const description =
  "Matrix Root Studio is an engineering-first digital product studio from Hyderabad. We design and deliver dependable web platforms, APIs, and scalable systems.";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://matrixroot.tech/studio" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://matrixroot.tech/studio" }],
  }),
  component: StudioPage,
});

function StudioPage() {
  const capabilities = [
    {
      icon: Code2,
      num: "01",
      title: "Custom Web Applications & MVPs",
      desc: "Fast-turnaround web platforms, SPAs, and SaaS products built with React 19, TypeScript, and modern edge runtimes. 100% intellectual property ownership transferred on delivery.",
    },
    {
      icon: Database,
      num: "02",
      title: "Backend & Systems Architecture",
      desc: "High-throughput REST and GraphQL APIs, relational data modeling with PostgreSQL, robust authentication, and webhooks designed for zero downtime.",
    },
    {
      icon: Cpu,
      num: "03",
      title: "Applied AI & Automated Workflows",
      desc: "Integrating practical AI capabilities and autonomous agentic workflows into your existing business pipelines to eliminate repetitive operational bottlenecks.",
    },
    {
      icon: UsersRound,
      num: "04",
      title: "Founder-First Talent Incubator",
      desc: "Our dual-engine model mentors ambitious student founders through real production sprints, turning early prototypes into battle-tested commercial software.",
    },
  ];

  const sprintSteps = [
    { step: "Week 01", title: "Technical Discovery & Architecture", detail: "Deep dive into product requirements, API contracts, schema modeling, and sprint roadmap." },
    { step: "Week 02-03", title: "Production Sprints & Iteration", detail: "Hands-on delivery with continuous git commits, preview environments, and rapid feedback loops." },
    { step: "Week 04", title: "Testing, Hardening & IP Handoff", detail: "Automated end-to-end tests, performance profiling, and complete transfer of codebase and infrastructure." },
  ];

  return (
    <SiteShell>
      {/* Studio Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-background px-5 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:px-8 border-b border-border/80">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/90 px-3.5 py-1 text-xs font-mono font-medium text-primary shadow-xs backdrop-blur-xs mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Matrix Root Engineering Studio · Hyderabad, India</span>
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            We build software the way it should be built:{" "}
            <span className="text-primary">lean, documented, and fully yours.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground">
            Matrix Root brings together product design, systems engineering, and a talent incubator. We partner with ambitious founders and established teams to turn complex ideas into software people trust every day.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 text-sm font-semibold shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Start a Project on WhatsApp</span>
            </a>

            <a
              href={CALL_TEL}
              className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white hover:border-primary/50 hover:text-primary px-6 py-3.5 text-sm font-medium text-foreground shadow-2xs transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Call Us: {WHATSAPP_NUMBER}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="px-5 py-20 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">Core Capabilities</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Engineered for reliability from first commit to production.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.num}
                className="group relative rounded-2xl border border-border/80 bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-muted-foreground group-hover:text-primary">
                    {cap.num}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* The Sprint Playbook */}
      <section className="bg-void px-5 py-20 lg:px-8 border-y border-border/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">Our Process</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              How a Matrix Root production sprint works.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Predictable delivery cadences with zero bloat and direct communication with the engineers building your platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sprintSteps.map((s, idx) => (
              <div key={s.step} className="rounded-2xl border border-border/80 bg-white p-7 shadow-xs">
                <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2.5 py-1 rounded">
                  {s.step}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-4">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees & Values */}
      <section className="px-5 py-20 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">100% IP Transferred</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                You own every repository, design file, and database schema from day one. NDA on request.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">&lt; 24-Hour Response SLA</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Direct Slack or WhatsApp line to active engineers—no middlemen, account managers, or bureaucracy.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Boxes className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Founder-First Community</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                We reinvest in Hyderabad's brightest student builders through guided production internships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="px-5 pb-20 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-border/80 bg-gradient-to-r from-white via-slate-50 to-orange-50/20 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary">Ready to ship?</p>
            <h2 className="mt-2 text-3xl font-semibold text-foreground">
              Let's talk about what you are building.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Chat directly with our lead engineer on WhatsApp or schedule a quick 15-minute discovery call.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 text-sm font-semibold transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={CALL_TEL}
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 hover:bg-black text-white px-5 py-3 text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Call: {WHATSAPP_NUMBER}</span>
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
