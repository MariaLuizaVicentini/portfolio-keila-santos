import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EditableLink } from "./EditableLink";

describe("EditableLink (componente)- unit", () => {
  it("deve renderizar um tooltip informando que o link sera add em breve, quando nao houver link", () => {
    const { emptyHref, nameButton, tooltipButton } = makeMocks();

    render(<EditableLink href={emptyHref}>{nameButton}</EditableLink>);
    const element = screen.getByText(nameButton);

    expect(element.tagName).toBe("SPAN");
    expect(element).toHaveAttribute("aria-disabled", "true");
    expect(element).toHaveAttribute("title", tooltipButton);
  });

  it("deve abrir a URL em uma nova aba com segurança quando fornecido um link válido", () => {
    const { href, nameButton } = makeMocks();

    render(<EditableLink href={href}>{nameButton}</EditableLink>);

    const linkElement = screen.getByRole("link", { name: nameButton });
    expect(linkElement).toHaveAttribute("href", href);
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noreferrer");
  });
});

export const makeMocks = () => {
  const href = "https://example.com";
  const emptyHref = null;
  const nameButton = "Curriculo";
  const tooltipButton = "Link será adicionado em breve";

  return {
    emptyHref,
    nameButton,
    href,
    tooltipButton,
  };
};
