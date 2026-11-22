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
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle eyebrow="Our approach" title="Good software is a team effort.">
            We pair modern tools with thoughtful engineering, transparent collaboration, and a focus on what the product needs to do in the real world.
          </SectionTitle>
          <div className="flex flex-col gap-4">
            {principles.map(({ icon: Icon, title: name, text }) => (
              <article
                key={name}
                className="group flex gap-5 rounded-2xl border border-border/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {name}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-void px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary">Our roots</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Built in Hyderabad. Ready to work anywhere.
            </h2>
          </div>
          <Link
            to="/contact"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-deep hover:shadow-glow hover:-translate-y-0.5"
          >
            Meet the team{" "}
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
