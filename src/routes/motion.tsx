import { createFileRoute } from "@tanstack/react-router";
import { MotionGraphicsWebsite } from "@/components/motion-graphics-website";

const title = "Matrix Root Motion Graphics Engine | Launch-Grade Web Motion in Code";
const description =
  "Explore Matrix Root's interactive motion graphics website built with code: 8-second synchronized motion effects, 3D perspective shifts, button-to-player morphs, and launch film architecture.";

export const Route = createFileRoute("/motion")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://matrixroot.tech/motion" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://matrixroot.tech/motion" }],
  }),
  component: MotionPage,
});

function MotionPage() {
  return <MotionGraphicsWebsite />;
}
