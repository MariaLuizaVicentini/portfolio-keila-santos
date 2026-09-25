import { render, screen } from "@testing-library/react";
import { HeroPhoto } from "./HeroPhoto";

describe("HeroPhoto (componente) - unit", () => {
  test("deve renderizar a foto da Keila Santos", () => {
    render(<HeroPhoto></HeroPhoto>);

    //  "/i" representa a flag case-sensitive (nao diferencia maiuscula ou minuscula..)
    const imagem = screen.getByRole("img", { name: /Retrato de keila santos/i });

    expect(imagem).toBeInTheDocument();
  });
});
