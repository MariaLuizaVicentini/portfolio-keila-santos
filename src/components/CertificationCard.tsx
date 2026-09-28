import { ArrowUpRight } from "lucide-react";

import { Certification } from "@/types/portfolio-data";

export function CertificationCard({ certification }: { certification: Certification }) {
  const details = [certification.duration, certification.year].filter(Boolean).join(" · ");
  return (
    <article className="grid gap-1 border-t border-border py-3 sm:grid-cols-[0.25fr_1fr_auto] sm:items-center sm:gap-5">
      <span data-testid="issuer" className="text-[11px] font-semibold text-accent-foreground">
        {certification.issuer}
      </span>
      <div data-testid="title" className="min-w-0">
        <p className="text-sm leading-5 text-foreground/85">{certification.title}</p>
        {details && (
          <p data-testid="details" className="mt-0.5 font-mono text-[9px] text-muted-foreground">
            {details}
          </p>
        )}
      </div>
      {certification.href && (
        <a
          href={certification.href}
          data-testid="href certification"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          Ver certificado <ArrowUpRight className="h-3 w-3" />
        </a>
      )}
    </article>
  );
}
