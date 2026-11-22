import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageIntro, SiteShell } from "@/components/matrix-site";

const title = "Contact Matrix Root | Start a Software Project";
const description =
  "Contact Matrix Root in Hyderabad to discuss a software project, product engineering partnership, student startup, or talent incubator opportunity.";
const email = "matrixroottechnologies@gmail.com";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://matrixroot.tech/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://matrixroot.tech/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Matrix Root inquiry — ${String(form.get("topic") ?? "Project")}`;
    const body = [
      `Name: ${String(form.get("name") ?? "")}`,
      `Email: ${String(form.get("email") ?? "")}`,
      `Topic: ${String(form.get("topic") ?? "")}`,
      "",
      String(form.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <SiteShell>
      <PageIntro
        eyebrow="Contact"
        title="Tell us what you’re working on."
        description="Whether you have a product to build, an idea to explore, or a question about the incubator, we’d be glad to hear from you."
      />
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <form onSubmit={prepareEmail} className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">Your name<input name="name" required autoComplete="name" placeholder="Name" className="mt-2 min-h-11 w-full rounded-md border border-input bg-void px-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" /></label>
            <label className="text-sm font-medium">Email address<input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="mt-2 min-h-11 w-full rounded-md border border-input bg-void px-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" /></label>
            <label className="text-sm font-medium sm:col-span-2">I’m reaching out about<select name="topic" className="mt-2 min-h-11 w-full rounded-md border border-input bg-void px-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"><option>Software project</option><option>Product partnership</option><option>Talent incubator</option><option>Something else</option></select></label>
            <label className="text-sm font-medium sm:col-span-2">A little about it<textarea name="message" required rows={6} placeholder="What are you hoping to build or explore?" className="mt-2 w-full rounded-md border border-input bg-void px-3 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" /></label>
            <button type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:col-span-2 sm:justify-self-start">Prepare email <ArrowRight aria-hidden="true" className="h-4 w-4" /></button>
            {sent && <p role="status" className="text-sm text-muted-foreground sm:col-span-2">Your email app should open with your message ready. If it doesn’t, write to <a className="text-primary underline" href={`mailto:${email}`}>{email}</a>.</p>}
          </form>
          <aside className="border-t border-glass-border pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="font-mono text-xs uppercase text-primary">Find us</p>
            <div className="mt-6 flex gap-4"><Mail aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><div><h2 className="font-semibold">Email</h2><a href={`mailto:${email}`} className="mt-2 inline-block break-all text-sm text-muted-foreground hover:text-foreground">{email}</a></div></div>
            <div className="mt-7 flex gap-4"><MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><div><h2 className="font-semibold">Based in</h2><p className="mt-2 text-sm text-muted-foreground">Hyderabad, Telangana, India</p></div></div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}