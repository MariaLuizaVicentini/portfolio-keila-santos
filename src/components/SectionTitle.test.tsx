import { SectionTitle } from "../components/SectionTitle";
import { render, screen } from "@testing-library/react";

describe("SectioTitle (componente) - unit", () => {
  test("deve renderizar o nome da section, o titulo e a intro", () => {
    const { eyebrow, title, intro } = makeMocks();

    render(<SectionTitle eyebrow={eyebrow} title={title} intro={intro}></SectionTitle>);

    expect(screen.getByText(eyebrow)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(intro)).toBeInTheDocument();
  });
  test("deve renderizar apenas o nome da section e titulo, quando nao houver intro", () => {
    const { eyebrow, title, intro } = makeMocks();

    render(<SectionTitle eyebrow={eyebrow} title={title}></SectionTitle>);

    expect(screen.getByText(eyebrow)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.queryByText(intro)).not.toBeInTheDocument();
  });
});

export const makeMocks = () => {
  const eyebrow = "EXPERIÊNCIA";
  const title = "Estratégia, mídia e performance no dia a dia.";
  const intro =
    "Atuação prática na criação, configuração, acompanhamento e otimização de campanhas para diferentes segmentos e objetivos.";

  return {
    eyebrow,
    title,
    intro,
  };
};
