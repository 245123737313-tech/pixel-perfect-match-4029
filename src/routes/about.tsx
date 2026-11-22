import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Compass, GitBranch, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PageIntro, SectionTitle, SiteShell } from "@/components/matrix-site";

const title = "About Matrix Root | Hyderabad Software Engineering";
const description =
  "Meet Matrix Root, an engineering-first software solutions company from Hyderabad combining dependable product delivery with a student-founder talent incubator.";
const principles = [
  { icon: Compass, title: "Start with the problem", text: "We take time to understand the people, constraints, and goals behind the software before choosing how to build it." },
  { icon: GitBranch, title: "Build in the open", text: "Clear communication and frequent working software keep decisions visible and progress grounded in feedback." },
  { icon: ShieldCheck, title: "Leave teams stronger", text: "Maintainable software and practical knowledge sharing help our partners take ownership long after delivery." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://matrixroot.tech/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://matrixroot.tech/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="About Matrix Root"
        title="An engineering-first company with room to grow."
        description="Based in Hyderabad, India, Matrix Root brings software solutions and talent development together: delivering useful technology for organizations while encouraging new founders and engineers to build."
      />
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle eyebrow="Our approach" title="Good software is a team effort." >
            We pair modern tools with thoughtful engineering, transparent collaboration, and a focus on what the product needs to do in the real world.
          </SectionTitle>
          <div className="divide-y divide-glass-border border-y border-glass-border">
            {principles.map(({ icon: Icon, title: name, text }) => (
              <article key={name} className="grid grid-cols-[2rem_1fr] gap-4 py-5">
                <Icon aria-hidden="true" className="h-5 w-5 text-primary" />
                <div><h2 className="font-semibold">{name}</h2><p className="mt-2 leading-6 text-muted-foreground">{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-void px-5 py-14 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div><p className="font-mono text-xs uppercase text-primary">Our roots</p><h2 className="mt-3 text-3xl font-semibold">Built in Hyderabad. Ready to work anywhere.</h2></div>
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Meet the team <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
      </section>
    </SiteShell>
  );
}