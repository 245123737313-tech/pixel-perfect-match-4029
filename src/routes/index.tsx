import { createFileRoute } from "@tanstack/react-router";
import { StudioLanding } from "@/components/studio-landing";

const title = "Matrix Root | Software Solutions & Digital Product Studio";
const description =
  "Matrix Root crafts high-performance digital products, systems, and brand experiences from Hyderabad for brands ready to dominate online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://matrixroot.tech/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://matrixroot.tech/" }],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <StudioLanding
      brandName="Matrix Root"
      logoText="MR"
      heroLabel="Matrix Root Studio"
      aboutLabel="Introducing Matrix Root"
    />
  );
}
