import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Blocks, Lightbulb, UsersRound } from "lucide-react";
import { PageIntro, SectionTitle, SiteShell } from "@/components/matrix-site";

const title = "Talent Incubator & Student Founders | Matrix Root";
const description =
  "Matrix Root’s Hyderabad talent incubator helps student founders grow startups and helps emerging engineers learn by contributing to guided production sprints.";
const tracks = [
  {
    icon: Lightbulb,
    title: "For student founders",
    text: "Get hands-on support to shape an idea, build an early product, and take practical steps toward growing a startup.",
  },
  {
    icon: Blocks,
    title: "For emerging engineers",
    text: "Build experience through guided, live production sprints and learn how collaborative software teams ship.",
  },
  {
    icon: UsersRound,
    title: "For the wider ecosystem",
    text: "Connect entrepreneurial students and aspiring engineers with a community grounded in making useful things.",
  },
];

export const Route = createFileRoute("/incubator")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://matrixroot.tech/incubator" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://matrixroot.tech/incubator" }],
  }),
  component: IncubatorPage,
});

function IncubatorPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Talent incubator"
        title="Helping student founders turn ambition into momentum."
        description="We believe promising founders grow by building. Matrix Root pairs encouragement and practical engineering experience to help students move forward with their ideas."
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="A place to build"
            title="Real progress, made with people who care."
          >
            The incubator brings student founders and emerging engineers into a shared learning
            environment—centered on product work, useful feedback, and the craft of shipping.
          </SectionTitle>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {tracks.map(({ icon: Icon, title: name, text }, index) => (
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
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-void px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary">
              Start a conversation
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Building something as a student?
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
              Tell us what you’re exploring and where you’d like to go next.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-deep hover:shadow-glow hover:-translate-y-0.5"
          >
            Connect with Matrix Root{" "}
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
