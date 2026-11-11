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
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="What we deliver" title="The right work, built to work together." />
          <div className="mt-10 grid gap-x-10 md:grid-cols-2">
            {offerings.map(({ icon: Icon, title: name, detail }, index) => (
              <article key={name} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-glass-border py-6">
                <Icon aria-hidden="true" className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-mono text-xs text-muted-foreground">0{index + 1}</p>
                  <h2 className="mt-2 text-lg font-semibold">{name}</h2>
                  <p className="mt-2 max-w-xl leading-6 text-muted-foreground">{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-void px-5 py-14 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div><p className="font-mono text-xs uppercase text-primary">Technology, with intent</p><p className="mt-3 max-w-2xl text-lg leading-7">React · TypeScript · Node.js · Python · PostgreSQL · Docker · AI agents</p></div>
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Discuss your project <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
      </section>
    </SiteShell>
  );
}