import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { SiteShell } from "@/components/matrix-site";
import { WHATSAPP_URL, CALL_TEL, WHATSAPP_NUMBER } from "@/components/studio-landing";

const title = "Connect | Matrix Root — Start a Project or Call Our Engineering Team";
const description =
  "Connect directly with Matrix Root. Instant WhatsApp chat at 8121358586, direct telephone booking, and project discovery for web apps, systems, and product engineering.";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://matrixroot.tech/connect" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://matrixroot.tech/connect" }],
  }),
  component: ConnectPage,
});

function ConnectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Full Web Application / MVP",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect directly to WhatsApp with pre-filled message
    const text = encodeURIComponent(
      `Hi Matrix Root! My name is ${formData.name} (${formData.phone || formData.email}). I am looking for: ${formData.projectType}. Details: ${formData.message}`
    );
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

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
              Direct Line to Leadership · Response Time &lt; 2 Hours
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900">
              Let&apos;s build something{" "}
              <span className="text-[#F26522]">exceptional together.</span>
            </h1>
            <p className="mt-6 text-[15px] sm:text-[17px] leading-[1.65] font-medium text-gray-600">
              Whether you need a dedicated product engineering team, a 3-week production MVP, or launch-grade motion graphics in code, we are ready.
            </p>
          </div>

          {/* High Priority Direct Action Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* WhatsApp Card */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-gradient-to-br from-[#25D366]/10 via-[#25D366]/5 to-white border-2 border-[#25D366]/40 hover:border-[#25D366] shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-[#25D366] uppercase tracking-wider">
                  Instant Response
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-1">Chat on WhatsApp</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Connect instantly with our founding engineer. Average response under 15 minutes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#25D366]/20 flex items-center justify-between font-mono text-sm font-semibold text-[#25D366]">
                <span>+91 {WHATSAPP_NUMBER}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>

            {/* Direct Phone Call Card */}
            <a
              href={CALL_TEL}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-white border-2 border-primary/30 hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">
                  Direct Line
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-1">Direct Phone Call</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Schedule or place a direct telephone discovery call with our tech leadership.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-primary/20 flex items-center justify-between font-mono text-sm font-semibold text-primary">
                <span>{WHATSAPP_NUMBER}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>

            {/* Office & Studio Location */}
            <div className="p-6 rounded-2xl bg-white border border-border/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  Engineering HQ
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-1">Hyderabad Studio</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Telangana, India. In-person sprints, architecture reviews, and incubator sessions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-xs font-mono text-muted-foreground">
                Mon - Sat · 09:30 - 19:30 IST
              </div>
            </div>

            {/* SLA / Guarantee */}
            <div className="p-6 rounded-2xl bg-white border border-border/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-600 uppercase tracking-wider">
                  Guaranteed SLA
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-1">Rapid Handoff</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Every sprint features 100% intellectual property transfer, daily preview URLs, and documented APIs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-xs font-mono text-emerald-600 font-medium">
                100% IP Transferred
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Inquiry Section */}
      <section className="px-5 py-16 sm:py-20 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono text-primary font-semibold uppercase tracking-wider">
              Project Onboarding
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              Tell us about your product roadmap.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We review every inquiry within 2 hours. Fill out the quick brief below or tap the WhatsApp/Call buttons above to reach us immediately.
            </p>

            <div className="space-y-4 pt-4 border-t border-border/60">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Zero Obligation Discovery</h4>
                  <p className="text-xs text-muted-foreground">Free 30-minute architecture review and feasibility audit.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Transparent Sprint Pricing</h4>
                  <p className="text-xs text-muted-foreground">Fixed-scope deliverables with clearly staged milestones.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Direct Access to Engineers</h4>
                  <p className="text-xs text-muted-foreground">No account managers or middlemen. You speak directly to the builders.</p>
                </div>
              </div>
            </div>

            {/* Direct Email Link */}
            <div className="pt-4">
              <p className="text-xs text-muted-foreground">Prefer email?</p>
              <a
                href="mailto:matrixroottechnologies@gmail.com"
                className="text-sm font-semibold text-primary hover:underline mt-1 inline-flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>matrixroottechnologies@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border/80 bg-white p-8 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Opening WhatsApp...</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Your project details were prepared. If WhatsApp didn&apos;t open automatically, click the button below:
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Chat (+91 {WHATSAPP_NUMBER})</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full rounded-lg border border-border bg-slate-50 px-3.5 py-2.5 text-sm text-foreground focus:bg-white focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full rounded-lg border border-border bg-slate-50 px-3.5 py-2.5 text-sm text-foreground focus:bg-white focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91..."
                        className="w-full rounded-lg border border-border bg-slate-50 px-3.5 py-2.5 text-sm text-foreground focus:bg-white focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        Project Scope *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full rounded-lg border border-border bg-slate-50 px-3.5 py-2.5 text-sm text-foreground focus:bg-white focus:border-primary focus:outline-none transition-colors"
                      >
                        <option>Full Web Application / MVP</option>
                        <option>Backend Systems & Distributed APIs</option>
                        <option>Launch-Grade Motion Graphics in Code</option>
                        <option>Talent Incubator & Founder Sprints</option>
                        <option>Architecture Feasibility Audit</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">
                      Tell us about your product & goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you are building, your expected timeline, and any key technical constraints..."
                      className="w-full rounded-lg border border-border bg-slate-50 px-3.5 py-2.5 text-sm text-foreground focus:bg-white focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3 text-sm font-semibold shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Start a Project via WhatsApp</span>
                    </button>

                    <a
                      href={CALL_TEL}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white hover:bg-slate-50 text-foreground px-6 py-3 text-sm font-semibold transition-all"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      <span>Or Call Directly: {WHATSAPP_NUMBER}</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
