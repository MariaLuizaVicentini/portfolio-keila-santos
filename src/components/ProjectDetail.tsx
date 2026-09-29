import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Project } from "@/types/portfolio-data";
import { ChevronRight } from "lucide-react";

export function ProjectDetail({ project }: { project: Project }) {
  const blocks = [
    ["OBJETIVO", project.objective],
    ["ESTRATÉGIA", project.strategy],
    ["PLATAFORMAS", project.platforms],
    ["MÉTRICAS ACOMPANHADAS", project.metrics.join(" · ")],
  ];
  return (
    <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border-border bg-card p-0 shadow-[var(--shadow-deep)] sm:rounded-sm">
      <div className="border-b border-border p-6 sm:p-8">
        <p data-testid="project_segment" className="section-label">
          {project.segment}
        </p>
        <DialogHeader className="mt-4">
          <DialogTitle
            data-testid="project_name"
            className="font-display text-2xl font-semibold leading-tight sm:text-4xl"
          >
            {project.name}
          </DialogTitle>
          <DialogDescription
            data-testid="proejct_description"
            className="mt-3 max-w-2xl text-sm leading-6"
          >
            {project.description}
          </DialogDescription>
        </DialogHeader>
      </div>
      <div className="grid sm:grid-cols-2">
        {blocks.map(([label, value]) => (
          <div key={label} className="border-b border-border p-6 sm:border-r">
            <p className="section-label">{label}</p>
            <p className="mt-3 text-sm leading-6 text-foreground/85">{value}</p>
          </div>
        ))}
        <div className="p-6 sm:col-span-2">
          <p className="section-label">MINHA ATUAÇÃO</p>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/85 sm:grid-cols-2">
            {project.work.map((item) => (
              <li key={item} className="flex gap-2">
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DialogContent>
  );
}
