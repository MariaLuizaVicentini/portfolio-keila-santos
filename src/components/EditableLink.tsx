import { EditableLinkComponentProps } from "@/types/editableLink";

export function EditableLink({ href, children, className = "" }: EditableLinkComponentProps) {
  if (!href) {
    return (
      <span className={className} aria-disabled="true" title="Link será adicionado em breve">
        {children}
      </span>
    );
  }

  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
