import { render, screen } from "@testing-library/react";

import { ToolCard } from "./ToolCard";

describe("ToolCard (componente) - unit", () => {
  test("deve renderizar o nome da ferramenta", () => {
    const { tool } = makeMocks();
    render(<ToolCard tool={tool} emphasized={false} />);
    expect(screen.getByText(tool)).toBeInTheDocument();
  });

  test("deve aplicar o estilo de destaque quando a ferramenta estiver enfatizada", () => {
    const { tool } = makeMocks();
    render(<ToolCard tool={tool} emphasized={true} />);
    const card = screen.getByText(tool).parentElement;
    expect(card).toHaveClass("border-accent/25");
  });
});

const makeMocks = () => {
  const tool = "Google Ads";
  return {
    tool,
  };
};
