import { render, screen } from "@testing-library/react";
import { Dialog } from "@/components/ui/dialog";
import { ProjectDetail } from "./ProjectDetail";

describe("ProjectDetail (componente) - unit", () => {
  test("deve renderizar um MODAL com os detalhes do projeto", () => {
    const { projectExample } = makeMocks();
    render(
      <Dialog open>
        <ProjectDetail project={projectExample} />
      </Dialog>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  test("deve renderizar o NOME do projeto no modal", () => {
    const { projectExample } = makeMocks();
    render(
      <Dialog open>
        <ProjectDetail project={projectExample} />
      </Dialog>,
    );
    expect(screen.getByTestId("project_name")).toHaveTextContent(projectExample.name);
  });

  test("deve renderizar a DESCRIÇÃO do projeto no modal", () => {
    const { projectExample } = makeMocks();
    render(
      <Dialog open>
        <ProjectDetail project={projectExample} />
      </Dialog>,
    );
    expect(screen.getByTestId("proejct_description")).toHaveTextContent(projectExample.description);
  });

  test("deve renderizar o OBJETIVO do projeto no modal", () => {
    const { projectExample } = makeMocks();
    render(
      <Dialog open>
        <ProjectDetail project={projectExample} />
      </Dialog>,
    );
    expect(screen.getByText("OBJETIVO")).toBeInTheDocument();
    expect(screen.getByText(projectExample.objective)).toBeInTheDocument();
  });

  test("deve renderizar a ESTRATÉGIA do projeto no modal", () => {
    const { projectExample } = makeMocks();
    render(
      <Dialog open>
        <ProjectDetail project={projectExample} />
      </Dialog>,
    );
    expect(screen.getByText("ESTRATÉGIA")).toBeInTheDocument();
  });

  test("deve renderizar as PLATAFORMAS do projeto no modal", () => {
    const { projectExample } = makeMocks();
    render(
      <Dialog open>
        <ProjectDetail project={projectExample} />
      </Dialog>,
    );
    expect(screen.getByText("PLATAFORMAS")).toBeInTheDocument();
    expect(screen.getByText(projectExample.platforms)).toBeInTheDocument();
  });

  test("deve renderizar as MÉTRICAS ACOMPANHADAS do projeto no modal", () => {
    const { projectExample } = makeMocks();
    render(
      <Dialog open>
        <ProjectDetail project={projectExample} />
      </Dialog>,
    );
    expect(screen.getByText("MÉTRICAS ACOMPANHADAS")).toBeInTheDocument();
    expect(
      screen.getByText("CTR · CPC · Conversões · Custo por conversão · Termos de pesquisa"),
    ).toBeInTheDocument();
  });

  test("deve renderizar a lista de ATUAÇÃO do projeto no modal", () => {
    const { projectExample } = makeMocks();
    render(
      <Dialog open>
        <ProjectDetail project={projectExample} />
      </Dialog>,
    );
    projectExample.work.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test("deve renderizar o SEGMENTO do projeto no modal", () => {
    const { projectExample } = makeMocks();
    render(
      <Dialog open>
        <ProjectDetail project={projectExample} />
      </Dialog>,
    );
    const pElementId = screen.getByTestId("project_segment");
    expect(pElementId).toHaveTextContent(projectExample.segment);
  });
});

const makeMocks = () => {
  const projectExample = {
    number: "01",
    name: "DOCTORDOR",
    segment: "Saúde",
    platforms: "Google Ads + Meta Ads",
    description:
      "Clínica especializada em tratamentos para diferentes tipos de dor, com atuação em mídia paga para captação de novos pacientes.",
    work: [
      "Campanhas",
      "Segmentação geográfica",
      "Pesquisa de termos",
      "Palavras-chave negativas",
      "Acompanhamento de conversões",
      "Análise de intenção",
      "Otimização",
    ],
    objective: "Gerar oportunidades de contato para tratamentos e serviços da clínica.",
    strategy:
      "ESTRATÉGIA\n\nEstruturação das campanhas a partir da intenção de busca, localização e perfil do público, com acompanhamento das conversões para identificar oportunidades de otimização.",
    metrics: ["CTR", "CPC", "Conversões", "Custo por conversão", "Termos de pesquisa"],
  };

  return { projectExample };
};
