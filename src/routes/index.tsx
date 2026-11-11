import { createFileRoute } from "@tanstack/react-router";
import { HomePage, SiteShell } from "@/components/matrix-site";

const title = "Matrix Root | Software Solutions & Product Engineering";
const description =
  "Matrix Root is a Hyderabad software solutions company building digital products, platforms, and reliable systems while helping student founders grow.";

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
    <SiteShell>
      <HomePage />
    </SiteShell>
  );
}