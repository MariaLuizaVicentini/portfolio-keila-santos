import { type ReactNode } from "react";

export type EditableLinkComponentProps = {
  href: string | null;
  children: ReactNode;
  className?: string;
};
