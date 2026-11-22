import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Blocks, Lightbulb, UsersRound } from "lucide-react";
import { PageIntro, SectionTitle, SiteShell } from "@/components/matrix-site";

const title = "Talent Incubator & Student Founders | Matrix Root";
const description =
  "Matrix Root’s Hyderabad talent incubator helps student founders grow startups and helps emerging engineers learn by contributing to guided production sprints.";
const tracks = [
  { icon: Lightbulb, title: "For student founders", text: "Get hands-on support to shape an idea, build an early product, and take practical steps toward growing a startup." },
  { icon: Blocks, title: "For emerging engineers", text: "Build experience through guided, live production sprints and learn how collaborative software teams ship." },
  { icon: UsersRound, title: "For the wider ecosystem", text: "Connect entrepreneurial students and aspiring engineers with a community grounded in making useful things." },
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
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="A place to build" title="Real progress, made with people who care." >
            The incubator brings student founders and emerging engineers into a shared learning environment—centered on product work, useful feedback, and the craft of shipping.
          </SectionTitle>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {tracks.map(({ icon: Icon, title: name, text }, index) => (
              <article key={name} className="border-t border-glass-border pt-6">
                <p className="font-mono text-xs text-muted-foreground">0{index + 1}</p>
                <Icon aria-hidden="true" className="mt-5 h-6 w-6 text-primary" />
                <h2 className="mt-4 text-xl font-semibold">{name}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-void px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div><p className="font-mono text-xs uppercase text-primary">Start a conversation</p><h2 className="mt-3 text-3xl font-semibold">Building something as a student?</h2><p className="mt-3 max-w-xl leading-7 text-muted-foreground">Tell us what you’re exploring and where you’d like to go next.</p></div>
          <Link to="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Connect with Matrix Root <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
      </section>
    </SiteShell>
  );
}