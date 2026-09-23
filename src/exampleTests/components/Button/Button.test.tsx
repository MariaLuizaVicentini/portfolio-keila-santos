import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button (component) - unit", () => {
  it("deve renderizar com o rótulo correto", () => {
    render(<Button label="Salvar" />);
    expect(screen.getByRole("button", { name: "Salvar" })).toBeInTheDocument();
  });

  it("deve chamar onClick quando for clicado", async () => {
    const handleClick = vi.fn();
    render(<Button label="Clique aqui" onClick={handleClick} />);

    await userEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("não deve chamar onClick quando estiver desabilitado", async () => {
    const handleClick = vi.fn();
    render(<Button label="Desabilitado" onClick={handleClick} disabled />);

    await userEvent.click(screen.getByRole("button"));

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("deve aplicar a classe CSS correta para cada variante", () => {
    const { rerender } = render(<Button label="Test" variant="primary" />);
    expect(screen.getByRole("button")).toHaveClass("btn--primary");

    rerender(<Button label="Test" variant="danger" />);
    expect(screen.getByRole("button")).toHaveClass("btn--danger");
  });

  it("deve possuir aria-disabled quando estiver desabilitado", () => {
    render(<Button label="Test" disabled />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true");
  });
});
