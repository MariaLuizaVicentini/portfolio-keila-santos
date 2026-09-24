import { SectionTitleProps } from "../types/sectionTitle";

export function SectionTitle({ eyebrow, title, intro }: SectionTitleProps) {
  return (
    <div className="reveal max-w-3xl">
      <p className="section-label flex items-center gap-3">
        <span className="h-px w-6 bg-accent/70" />
        {eyebrow}
      </p>
      <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-[1.15] text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          {intro}
        </p>
      )}
    </div>
  );
}
