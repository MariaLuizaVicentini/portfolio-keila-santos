import { stackGroups } from "@/lib/portfolio-data";
import { BrandMark } from "./BrandMark";

const toolBrandClasses: Partial<Record<(typeof stackGroups)[number]["tools"][number], string>> = {
  "Google Ads": "brand-google-ads",
  "Meta Ads": "brand-meta",
  "YouTube Ads": "brand-youtube",
  "Google Analytics 4": "brand-google-analytics",
  "Google Tag Manager": "brand-google-tag-manager",
  Excel: "brand-excel",
  Figma: "brand-figma",
  Canva: "brand-canva",
  CapCut: "brand-capcut",
  ClickUp: "brand-clickup",
  mLabs: "brand-mlabs",
  ChatGPT: "brand-chatgpt",
  "ChatGPT Ads": "brand-chatgpt",
  Claude: "brand-claude",
  Gemini: "brand-gemini",
};

export function ToolCard({
  tool,
  emphasized,
}: {
  tool: (typeof stackGroups)[number]["tools"][number];
  emphasized: boolean;
}) {
  const brandClass = toolBrandClasses[tool] ?? "";
  return (
    <div
      className={`group/tool flex min-h-11 items-center gap-2.5 rounded-[3px] border px-3 py-2.5 text-xs transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-tool-hover)] ${emphasized ? "border-accent/25 bg-secondary/50 text-foreground shadow-[var(--shadow-tool)]" : "border-border/75 bg-background/35 text-foreground/85 shadow-[var(--shadow-tool)]"}`}
    >
      <span
        className={`brand-mark grid h-7 w-7 shrink-0 place-items-center rounded-[2px] border border-border/80 bg-card ${brandClass}`}
      >
        <BrandMark tool={tool} />
      </span>
      <span className="leading-4">{tool}</span>
    </div>
  );
}
