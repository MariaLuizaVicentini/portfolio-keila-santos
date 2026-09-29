import {
  siClaude,
  siClickup,
  siFigma,
  siGoogleads,
  siGoogleanalytics,
  siGooglegemini,
  siGoogletagmanager,
  siMeta,
  siYoutube,
  type SimpleIcon,
} from "simple-icons";
import { Bot, Scissors, Table2 } from "lucide-react";
import { stackGroups } from "@/lib/portfolio-data";

const toolIcons: Partial<Record<(typeof stackGroups)[number]["tools"][number], SimpleIcon>> = {
  "Google Ads": siGoogleads,
  "Meta Ads": siMeta,
  "YouTube Ads": siYoutube,
  "Google Analytics 4": siGoogleanalytics,
  "Google Tag Manager": siGoogletagmanager,
  Figma: siFigma,
  ClickUp: siClickup,
  Claude: siClaude,
  Gemini: siGooglegemini,
};

export function BrandMark({ tool }: { tool: (typeof stackGroups)[number]["tools"][number] }) {
  const icon = toolIcons[tool];
  if (icon) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d={icon.path} />
      </svg>
    );
  }
  if (tool === "Excel") return <Table2 aria-hidden="true" className="h-4 w-4" />;
  if (tool === "CapCut") return <Scissors aria-hidden="true" className="h-4 w-4" />;
  if (tool === "ChatGPT" || tool === "ChatGPT Ads")
    return <Bot aria-hidden="true" className="h-4 w-4" />;
  return (
    <span aria-hidden="true" className="font-display text-[10px] font-bold">
      {tool === "mLabs" ? "mL" : "C"}
    </span>
  );
}
