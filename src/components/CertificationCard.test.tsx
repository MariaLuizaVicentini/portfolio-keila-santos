import { render, screen } from "@testing-library/react";
import { CertificationCard } from "./CertificationCard";

describe("CertificationCard (componente) - unit", () => {
  test("deve renderizar a tag article", () => {
    const { certificationProp } = makeMocks();
    render(<CertificationCard certification={certificationProp}></CertificationCard>);
    const articleElement = screen.getByRole("article");
    expect(articleElement).toBeInTheDocument();
  });
  test("deve renderizar o emissor do certificado (issuer)", () => {
    const { certificationProp } = makeMocks();
    render(<CertificationCard certification={certificationProp}></CertificationCard>);
    const spanElementId = screen.getByTestId("issuer");
    expect(spanElementId).toHaveTextContent("Google");
  });
  test("deve renderizar o titulo do certificado (title)", () => {
    const { certificationProp } = makeMocks();
    render(<CertificationCard certification={certificationProp}></CertificationCard>);
    const divElementId = screen.getByTestId("title");
    expect(divElementId).toHaveTextContent("Fundamentos do Marketing Digital");
  });
  test("deve renderizar os detalhes do certificado se houver duration + year (details)", () => {
    const { certificationDetails } = makeMocks();
    render(<CertificationCard certification={certificationDetails}></CertificationCard>);
    const pElementId = screen.getByTestId("details");
    expect(pElementId).toHaveTextContent("2026");
    expect(pElementId).toHaveTextContent("30 horas");
  });
  test("deve renderizar um link para vizualizar certificado na web", () => {
    const { certificationProp } = makeMocks();
    render(<CertificationCard certification={certificationProp}></CertificationCard>);
    const hrefElementId = screen.getByTestId("href certification");
    expect(hrefElementId).toHaveTextContent("Ver certificado");
  });
});

const makeMocks = () => {
  const certificationProp = {
    issuer: "Google",
    title: "Fundamentos do Marketing Digital",
    href: "https://google.com",
  };
  const certificationDetails = {
    issuer: "Google",
    title: "Fundamentos do Marketing Digital",
    href: "https://google.com",
    year: "2026",
    duration: "30 horas",
  };

  return {
    certificationProp,
    certificationDetails,
  };
};
