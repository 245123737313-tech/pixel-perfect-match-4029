import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, CloudCog, Code2, Database, Smartphone, Workflow } from "lucide-react";
import { PageIntro, SectionTitle, SiteShell } from "@/components/matrix-site";

const title = "Software Development Services | Matrix Root";
const description =
  "Explore Matrix Root’s custom software, web and mobile product development, backend systems, cloud engineering, and practical AI automation services.";
const offerings = [
  { icon: Code2, title: "Custom web applications", detail: "Purpose-built platforms, SaaS products, customer portals, and internal tools designed around real workflows." },
  { icon: Smartphone, title: "Mobile product development", detail: "Mobile experiences and connected services, from an early product concept through a production-ready release." },
  { icon: Database, title: "Backend & API engineering", detail: "Well-structured APIs, data models, integrations, and backend services built to support dependable products." },
  { icon: CloudCog, title: "Cloud & DevOps", detail: "Deployment pipelines, cloud infrastructure, monitoring, and engineering workflows that help teams ship reliably." },
  { icon: Bot, title: "Applied AI & automation", detail: "Useful AI and automation solutions that reduce repetitive work and fit into existing business processes." },
  { icon: Workflow, title: "Product engineering partnership", detail: "Technical discovery, architecture, delivery, and iteration with direct access to the people building your product." },
];

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "Tailwind CSS",
  "Cloudflare",
  "AI Agents",
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://matrixroot.tech/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://matrixroot.tech/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Software solutions"
        title="Engineering for ambitious ideas and everyday operations."
        description="From a new digital product to the systems that keep your business moving, Matrix Root brings practical product thinking and focused engineering to each build."
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="What we deliver" title="The right work, built to work together." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map(({ icon: Icon, title: name, detail }, index) => (
              <article
                key={name}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-muted-foreground transition-colors group-hover:text-primary">
                      0{index + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-border transition-colors group-hover:bg-primary" />
                  </div>
                  <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/20">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                    {name}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-void px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary">Technology, with intent</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-lg border border-border/80 bg-white px-3 py-1.5 text-xs font-medium text-foreground shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <Link
            to="/contact"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-deep hover:shadow-glow hover:-translate-y-0.5"
          >
            Discuss your project{" "}
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
