import { createFileRoute } from "@tanstack/react-router";
import { StudioLanding } from "@/components/studio-landing";

const title = "Axion Studio — Design & Digital Experience Agency";
const description =
  "We craft digital experiences for brands ready to dominate their category online. Strategy-led creatives delivering results in digital and beyond.";

export const Route = createFileRoute("/axion")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://matrixroot.tech/axion" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://matrixroot.tech/axion" }],
  }),
  component: AxionPage,
});

function AxionPage() {
  return (
    <StudioLanding
      brandName="Axion Studio"
      logoText="AX"
      heroLabel="Axion Studio"
      aboutLabel="Introducing Axion"
    />
  );
}
