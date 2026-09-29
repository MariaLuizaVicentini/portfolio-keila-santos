import { render } from "@testing-library/react";

import { BrandMark } from "./BrandMark";

describe("BrandMark (componente) - unit", () => {
  test("deve renderizar o ícone da ferramenta", () => {
    const { tool } = makeMocks();
    const { container } = render(<BrandMark tool={tool} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  test("deve renderizar o ícone específico para Excel", () => {
    const { tool } = makeMocks("Excel");
    const { container } = render(<BrandMark tool={tool} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});

const makeMocks = (tool: "Google Ads" | "Excel" = "Google Ads") => {
  return {
    tool,
  };
};
