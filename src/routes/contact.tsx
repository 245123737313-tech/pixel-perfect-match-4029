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

  const inputClass =
    "mt-2 min-h-11 w-full rounded-lg border border-border bg-white px-3.5 text-foreground placeholder:text-muted-foreground shadow-2xs transition-all duration-200 hover:border-slate-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15";

  return (
    <SiteShell>
      <PageIntro
        eyebrow="Contact"
        title="Tell us what you’re working on."
        description="Whether you have a product to build, an idea to explore, or a question about the incubator, we’d be glad to hear from you."
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <form onSubmit={prepareEmail} className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-foreground">
              Your name
              <input
                name="name"
                required
                autoComplete="name"
                placeholder="Name"
                className={inputClass}
              />
            </label>
            <label className="text-sm font-medium text-foreground">
              Email address
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={inputClass}
              />
            </label>
            <label className="text-sm font-medium text-foreground sm:col-span-2">
              I’m reaching out about
              <select name="topic" className={`${inputClass} cursor-pointer`}>
                <option>Software project</option>
                <option>Product partnership</option>
                <option>Talent incubator</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="text-sm font-medium text-foreground sm:col-span-2">
              A little about it
              <textarea
                name="message"
                required
                rows={6}
                placeholder="What are you hoping to build or explore?"
                className={`${inputClass} min-h-32 py-3 resize-none`}
              />
            </label>
            <button
              type="submit"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-deep hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 sm:col-span-2 sm:justify-self-start"
            >
              Prepare email{" "}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
            {sent && (
              <p
                role="status"
                className="text-sm text-muted-foreground sm:col-span-2 animate-fade-in"
              >
                Your email app should open with your message ready. If it doesn’t, write directly to{" "}
                <a
                  className="font-medium text-primary underline hover:text-primary-deep"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
                .
              </p>
            )}
          </form>
          <aside className="border-t border-border/80 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">Find us</p>
            <div className="mt-6 flex flex-col gap-4">
              <div className="group flex gap-4 rounded-xl border border-border/80 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <Mail aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">Email</h2>
                  <a
                    href={`mailto:${email}`}
                    className="mt-1 inline-block break-all text-sm text-muted-foreground transition-colors hover:text-primary hover:underline"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <div className="group flex gap-4 rounded-xl border border-border/80 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <MapPin aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">Based in</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
