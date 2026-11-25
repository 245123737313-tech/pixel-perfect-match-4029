import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Layers,
  MessageSquare,
  MoveUpRight,
  Phone,
  Sparkles,
  Tag,
} from "lucide-react";
import { useState } from "react";
import { SiteShell } from "@/components/matrix-site";
import { WHATSAPP_URL, CALL_TEL } from "@/components/studio-landing";

const title = "Journal | Matrix Root — Engineering Insights & Architectural Patterns";
const description =
  "Technical essays, sprint playbooks, and architectural reflections from Matrix Root. Pure code motion graphics, 3-week MVP structures, and full IP ownership.";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://matrixroot.tech/journal" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://matrixroot.tech/journal" }],
  }),
  component: JournalPage,
});

interface Article {
  slug: string;
  title: string;
  readTime: string;
  date: string;
  tag: "Engineering" | "Motion" | "Architecture" | "Incubator";
  summary: string;
  highlights: string[];
}

const articlesData: Article[] = [
  {
    slug: "motion-in-pure-code",
    title: "Building Launch-Grade Motion in Pure Code: No After Effects Required",
    readTime: "6 min read",
    date: "February 2026",
    tag: "Motion",
    summary:
      "Why video export render times and fragile video files are being replaced by synchronized 8-second CSS variable and SVG math loops. How window.seek(seconds) enables deterministic, frame-exact web rendering.",
    highlights: [
      "Physical spring curves over arbitrary cubic-beziers",
      "Interactive button-to-player continuous transitions",
      "Why SVGs with computed dasharray outperform heavy mp4 assets",
    ],
  },
  {
    slug: "three-week-mvp-playbook",
    title: "The 3-Week MVP Architecture Playbook: From Schema to Scalable Launch",
    readTime: "9 min read",
    date: "January 2026",
    tag: "Architecture",
    summary:
      "Most MVPs fail because they build too much software in the wrong order. Here is our contract-first blueprint: schema validation on Day 2, automated preview builds on Day 5, and full user authentication by Week 2.",
    highlights: [
      "Eliminating backend-frontend drift with typed RPC schemas",
      "PostgreSQL row-level security for bulletproof multi-tenancy",
      "Daily preview environments for live customer feedback loops",
    ],
  },
  {
    slug: "zero-ip-lockin-model",
    title: "Why We Transfer 100% Intellectual Property Ownership on Day 30",
    readTime: "5 min read",
    date: "January 2026",
    tag: "Engineering",
    summary:
      "Traditional development agencies trap startups with proprietary hosting setups, obfuscated codebases, and extortionate maintenance contracts. We hand over Git histories, deployment pipelines, and architecture diagrams.",
    highlights: [
      "No proprietary CMS or lock-in dependencies",
      "Clean TypeScript codebases that any senior developer can inherit",
      "Standard cloud primitives: AWS, Cloudflare, and PostgreSQL",
    ],
  },
  {
    slug: "zero-latency-react-19",
    title: "Zero-Latency State Management with React 19 & TanStack Start",
    readTime: "8 min read",
    date: "December 2025",
    tag: "Engineering",
    summary:
      "How we combine server actions, optimistic UI rollbacks, and edge-rendered micro-caches to give enterprise web apps the responsiveness of native desktop software.",
    highlights: [
      "Optimistic UI patterns without UI flicker",
      "Handling network degradation gracefully with exponential backoff",
      "Zero bundle bloat: replacing giant libraries with native web standards",
    ],
  },
  {
    slug: "incubator-student-engineers",
    title: "Incubating Student Founders into Production Systems Engineers",
    readTime: "7 min read",
    date: "November 2025",
    tag: "Incubator",
    summary:
      "Universities teach theoretical computer science; startups need production velocity. Inside Matrix Root's talent incubator in Hyderabad, where young engineers ship real software to paying users.",
    highlights: [
      "Pair programming alongside experienced technical leads",
      "Code review discipline and automated linting standards",
      "Direct exposure to user bug reports and production triage",
    ],
  },
];

const tags = ["All", "Engineering", "Motion", "Architecture", "Incubator"] as const;

function JournalPage() {
  const [activeTag, setActiveTag] = useState<string>("All");

  const filteredArticles =
    activeTag === "All"
      ? articlesData
      : articlesData.filter((a) => a.tag === activeTag);

  return (
    <SiteShell>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-white px-5 pt-14 pb-16 sm:pt-20 sm:pb-20 lg:px-12 border-b border-gray-200/80">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center shrink-0">
              1
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900 bg-white">
              Matrix Root Journal · Engineering Thought Leadership
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900">
                Technical thoughts.
                <br />
                <span className="text-gray-900 font-semibold">Tested in production.</span>
              </h1>
              <p className="mt-6 text-[15px] sm:text-[17px] leading-[1.65] font-medium text-gray-600">
                In-depth essays on web animation physics, cloud resilience, scalable architecture, and founder mentorship from the engineering floor at Matrix Root.
              </p>
            </div>

            {/* Direct CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CALL_TEL}
                className="inline-flex items-center gap-2 rounded-full bg-[#F26522] hover:bg-[#e05a1a] text-white px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Us</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#F26522] hover:bg-[#e05a1a] text-white px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Start a project</span>
              </a>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-border/60 pt-6">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mr-3">
              <Tag className="w-3.5 h-3.5" />
              <span>Topic:</span>
            </div>
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTag(t)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeTag === t
                    ? "bg-primary text-white shadow-xs"
                    : "bg-slate-100 text-muted-foreground hover:bg-slate-200 hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Feed */}
      <section className="px-5 py-16 sm:py-20 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-8 max-w-4xl">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="p-8 sm:p-10 rounded-2xl border border-border/80 bg-white shadow-2xs hover:shadow-lg hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground mb-4">
                  <span className="text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full font-semibold">
                    {article.tag}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors cursor-pointer">
                  {article.title}
                </h3>

                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  {article.summary}
                </p>

                <div className="mt-6 pl-4 border-l-2 border-primary/30 space-y-1.5">
                  {article.highlights.map((h, i) => (
                    <p key={i} className="text-xs sm:text-sm text-slate-600 font-medium">
                      → {h}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                >
                  <span>Discuss this topic on WhatsApp</span>
                  <MoveUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={CALL_TEL}
                  className="text-xs text-muted-foreground hover:text-foreground font-medium transition-colors"
                >
                  Call an Architect
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 border-t border-border/80 px-5 py-16 sm:py-20 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-border p-8 sm:p-12 shadow-sm text-center">
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Want us to architect or accelerate your software?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            We operate in fast monthly cycles with guaranteed delivery milestones. Speak directly with our lead architects today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#F26522] hover:bg-[#e05a1a] text-white px-6 py-3.5 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Start a project on WhatsApp</span>
            </a>
            <a
              href={CALL_TEL}
              className="inline-flex items-center gap-2 rounded-full bg-[#F26522] hover:bg-[#e05a1a] text-white px-6 py-3.5 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Book a call</span>
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
