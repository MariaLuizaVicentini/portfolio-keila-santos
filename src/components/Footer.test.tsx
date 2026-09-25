import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer (componente) - unit", () => {
  test("deve renderizar o rodapé do site", () => {
    render(<Footer></Footer>);

    expect(screen.getByRole("nameFooter")).toBeInTheDocument();
    expect(screen.getByRole("description")).toBeInTheDocument();
    expect(screen.getByRole("Copyright")).toBeInTheDocument();
  });
});
