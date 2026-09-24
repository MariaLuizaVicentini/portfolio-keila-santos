import { render, screen, fireEvent, within } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";

import { Navbar } from "./Navbar";

vi.mock("./EditableLink", () => ({
  EditableLink: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock("@/lib/portfolio-data", () => ({
  portfolioLinks: { resume: "#" },
}));

describe("Navbar", () => {
  test("deve renderizar o nome e os links da navegação principal", () => {
    render(<Navbar />);

    expect(screen.getByText("KEILA SANTOS")).toBeInTheDocument();
    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(screen.getByText("Experiência")).toBeInTheDocument();
    expect(screen.getByText("Projetos")).toBeInTheDocument();
    expect(screen.getByText("Processo")).toBeInTheDocument();
    expect(screen.getByText("Stack")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  test("deve renderizar os links com seus respectivos destinos", () => {
    render(<Navbar />);

    expect(screen.getByRole("link", { name: "KEILA SANTOS" })).toHaveAttribute("href", "#inicio");
    expect(screen.getByRole("link", { name: "Sobre" })).toHaveAttribute("href", "#sobre");
    expect(screen.getByRole("link", { name: "Experiência" })).toHaveAttribute(
      "href",
      "#experiencia",
    );
    expect(screen.getByRole("link", { name: "Projetos" })).toHaveAttribute("href", "#projetos");
    expect(screen.getByRole("link", { name: "Processo" })).toHaveAttribute("href", "#processo");
    expect(screen.getByRole("link", { name: "Stack" })).toHaveAttribute("href", "#stack");
    expect(screen.getByRole("link", { name: "Contato" })).toHaveAttribute("href", "#contato");
  });

  test("deve abrir o menu móvel ao clicar no botão", () => {
    render(<Navbar />);

    fireEvent.click(screen.getByRole("button", { name: "Abrir menu" }));

    expect(screen.getByRole("navigation", { name: "Navegação móvel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Fechar menu" })).toBeInTheDocument();
  });

  test("deve fechar o menu móvel ao clicar no botão novamente", () => {
    render(<Navbar />);

    const button = screen.getByRole("button", { name: "Abrir menu" });

    fireEvent.click(button);
    fireEvent.click(screen.getByRole("button", { name: "Fechar menu" }));

    expect(screen.queryByRole("navigation", { name: "Navegação móvel" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Abrir menu" })).toBeInTheDocument();
  });

  test("deve fechar o menu móvel ao clicar em um item de navegação", () => {
    render(<Navbar />);

    fireEvent.click(screen.getByRole("button", { name: "Abrir menu" }));

    const mobileNav = screen.getByRole("navigation", {
      name: "Navegação móvel",
    });

    const mobileLink = within(mobileNav).getByRole("link", {
      name: "Sobre",
    });

    fireEvent.click(mobileLink);

    expect(mobileNav).not.toBeInTheDocument();
  });

  test("deve renderizar o botão de currículo", () => {
    render(<Navbar />);

    expect(screen.getByRole("button", { name: /CURRÍCULO/i })).toBeInTheDocument();
  });
});
