import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keila Santos — Tráfego Pago & Performance" },
      {
        name: "description",
        content:
          "Portfólio de Keila Santos: mídia paga, performance, dados e mensuração para campanhas digitais.",
      },
      { property: "og:title", content: "Keila Santos — Tráfego Pago & Performance" },
      {
        property: "og:description",
        content: "Mídia paga, análise de dados, mensuração e otimização de campanhas digitais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});
