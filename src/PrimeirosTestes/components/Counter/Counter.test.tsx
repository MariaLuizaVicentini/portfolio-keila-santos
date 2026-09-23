import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter (component) - unit", () => {
  it("deve renderizar com o valor inicial", () => {
    render(<Counter initialValue={5} />);
    expect(screen.getByTestId("count")).toHaveTextContent("5");
  });

  it("deve incrementar quando o botão + for clicado", async () => {
    render(<Counter initialValue={0} />);
    await userEvent.click(screen.getByRole("button", { name: "Incrementar" }));
    expect(screen.getByTestId("count")).toHaveTextContent("1");
  });

  it("deve decrementar quando o botão - for clicado", async () => {
    render(<Counter initialValue={3} />);
    await userEvent.click(screen.getByRole("button", { name: "Decrementar" }));
    expect(screen.getByTestId("count")).toHaveTextContent("2");
  });

  it("não deve ultrapassar o valor máximo", async () => {
    render(<Counter initialValue={4} max={5} />);
    await userEvent.click(screen.getByRole("button", { name: "Incrementar" }));
    await userEvent.click(screen.getByRole("button", { name: "Incrementar" }));

    expect(screen.getByTestId("count")).toHaveTextContent("5");
    expect(screen.getByRole("button", { name: "Incrementar" })).toBeDisabled();
  });

  it("não deve ir abaixo do valor mínimo", async () => {
    render(<Counter initialValue={1} min={0} />);
    await userEvent.click(screen.getByRole("button", { name: "Decrementar" }));
    await userEvent.click(screen.getByRole("button", { name: "Decrementar" }));

    expect(screen.getByTestId("count")).toHaveTextContent("0");
    expect(screen.getByRole("button", { name: "Decrementar" })).toBeDisabled();
  });
});
