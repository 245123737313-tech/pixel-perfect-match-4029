import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ExternalLink,
  Filter,
  Layers,
  MessageSquare,
  MoveUpRight,
  Phone,
  Sparkles,
  Star,
  Terminal,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { SiteShell } from "@/components/matrix-site";
import { WHATSAPP_URL, CALL_TEL, WHATSAPP_NUMBER } from "@/components/studio-landing";

const title = "Projects | Matrix Root — Case Studies & Production Systems";
const description =
  "Explore featured engineering case studies by Matrix Root: 3D interactive engines, conversion-first fintech platforms, cloud microservices, and high-velocity commerce.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://matrixroot.tech/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://matrixroot.tech/projects" }],
  }),
  component: ProjectsPage,
});

interface ProjectItem {
  id: string;
  title: string;
  category: "Web Platforms" | "Systems & APIs" | "Motion & 3D" | "Incubator";
  badge: string;
  subtitle: string;
  metrics: string;
  description: string;
  tech: string[];
  videoSrc?: string;
  bgGradient: string;
  featured?: boolean;
}

const projectsData: ProjectItem[] = [
  {
    id: "narrativ",
    title: "Narrativ",
    category: "Motion & 3D",
    badge: "Site of the Month 2025",
    subtitle: "Interactive 3D showcase driving record customer engagement",
    metrics: "+320% Session Length",
    description:
      "A flagship WebGL and Three.js interactive journey designed for high-end lifestyle storytelling. Engineered with custom GLSL shaders, 60fps render loops, and responsive camera curves.",
    tech: ["WebGL", "Three.js", "React 19", "GLSL Shaders", "Tailwind v4"],
    videoSrc:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4",
    bgGradient: "from-indigo-950 via-slate-900 to-black",
    featured: true,
  },
  {
    id: "luminar",
    title: "Luminar",
    category: "Web Platforms",
    badge: "Enterprise Fintech",
    subtitle: "Transforming complex financial analytics into an intuitive brand experience",
    metrics: "+42% Conversion Rate",
    description:
      "A full revamp of an enterprise dashboard into a crisp, lightning-fast application. Built with TanStack Start, optimistic mutation rollbacks, and high-frequency real-time charts.",
    tech: ["TanStack Start", "TypeScript", "Tailwind CSS", "PostgreSQL", "Recharts"],
    videoSrc:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4",
    bgGradient: "from-zinc-900 via-neutral-900 to-black",
    featured: true,
  },
  {
    id: "apex-systems",
    title: "Apex Cloud Orchestrator",
    category: "Systems & APIs",
    badge: "Distributed Systems",
    subtitle: "Multi-tenant cloud infrastructure and automated service mesh",
    metrics: "99.99% Uptime · 12ms p99",
    description:
      "Designed and deployed a fault-tolerant microservices backend handling high concurrent webhook volumes. Zero-trust token authentication, transactional queue workers, and automated health checks.",
    tech: ["Golang", "PostgreSQL", "Redis", "Docker", "Edge Functions"],
    bgGradient: "from-blue-950 via-slate-900 to-black",
  },
  {
    id: "pulse-commerce",
    title: "Pulse Headless Commerce",
    category: "Web Platforms",
    badge: "E-Commerce",
    subtitle: "Sub-100ms global storefront with instant cart synchronization",
    metrics: "88ms TTFB · 99 Mobile Perf",
    description:
      "Architected a custom headless storefront with distributed edge caching, dynamic currency conversions, and automated inventory reconciliation across multi-region warehouses.",
    tech: ["React 19", "Cloudflare Workers", "Stripe API", "Tailwind v4"],
    bgGradient: "from-emerald-950 via-slate-900 to-black",
  },
  {
    id: "founders-os",
    title: "Founders OS Incubator Hub",
    category: "Incubator",
    badge: "Incubator Platform",
    subtitle: "Talent pipeline and sprint management operating system",
    metrics: "14 Startups · $2.4M Raised",
    description:
      "The proprietary sprint collaboration software that powers Matrix Root's talent incubator. Tracks commit velocity, automated code reviews, PR audits, and investor demo days.",
    tech: ["React 19", "Supabase", "GitHub API", "TypeScript", "Tailwind CSS"],
    bgGradient: "from-amber-950 via-stone-900 to-black",
  },
];

const categories = ["All", "Web Platforms", "Systems & APIs", "Motion & 3D", "Incubator"] as const;

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <SiteShell>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-background px-5 pt-16 pb-16 sm:pt-24 sm:pb-20 lg:px-8 border-b border-border/80">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/90 px-3.5 py-1 text-xs font-mono font-medium text-primary shadow-xs backdrop-blur-xs mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Matrix Root Portfolio · Battle-Tested Production Software</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Real software.
                <br />
                <span className="text-primary">Measurable business impact.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground">
                From high-engagement WebGL experiences to high-throughput backend APIs, here is a curated selection of systems and applications engineered by Matrix Root.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CALL_TEL}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground shadow-2xs hover:border-primary/40 hover:bg-slate-50 hover:text-primary transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Book a call: {WHATSAPP_NUMBER}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 text-sm font-semibold shadow-md shadow-[#25D366]/20 transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start a project</span>
              </a>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-border/60 pt-6">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mr-3">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-xs"
                    : "bg-slate-100 text-muted-foreground hover:bg-slate-200 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="px-5 py-16 sm:py-20 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl border border-border/80 bg-white shadow-2xs hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Media Preview / Visual Header */}
              <div
                className={`relative w-full aspect-[16/10] bg-gradient-to-br ${project.bgGradient} overflow-hidden flex items-center justify-center p-6`}
              >
                {project.videoSrc ? (
                  <video
                    src={project.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="w-full h-full rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between text-white backdrop-blur-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-primary bg-primary/20 px-2.5 py-1 rounded">
                        {project.category}
                      </span>
                      <Terminal className="w-5 h-5 text-white/50" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold tracking-tight text-white">{project.title}</h4>
                      <p className="text-xs text-white/70 mt-1">{project.metrics}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/80">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Overlaid Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white border border-white/15">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                      {project.metrics}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-3">{project.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-slate-100 border border-slate-200 px-2.5 py-1 text-xs font-mono text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F26522] hover:text-[#d45318] transition-colors"
                    >
                      <span>Inquire about this architecture</span>
                      <MoveUpRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={CALL_TEL}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
                    >
                      Call: {WHATSAPP_NUMBER}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-slate-900 text-white px-5 py-16 sm:py-20 lg:px-8 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-mono text-primary uppercase tracking-wider mb-3">
            Ready to Build Your Category-Defining Platform?
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Have a project in mind? Let&apos;s talk engineering.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Book a strategy call to map your technical requirements, architecture constraints, and rapid sprint timeline.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Start a project on WhatsApp</span>
            </a>
            <a
              href={CALL_TEL}
              className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 hover:bg-slate-100 px-7 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Book a call: {WHATSAPP_NUMBER}</span>
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
