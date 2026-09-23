import { formatCurrency } from "./formatCurrency";

describe("formatCurrency (utils) - unit", () => {
  it("deve formatar um número positivo como moeda BRL", () => {
    const result = formatCurrency(1500);
    expect(result).toBe("R$\u00a01.500,00");
  });

  it("deve formatar o zero corretamente", () => {
    const result = formatCurrency(0);
    expect(result).toBe("R$\u00a00,00");
  });

  it("deve formatar valores negativos", () => {
    const result = formatCurrency(-250.5);
    expect(result).toContain("250,50");
  });

  it("deve suportar outras moedas", () => {
    const result = formatCurrency(100, "en-US", "USD");
    expect(result).toBe("$100.00");
  });
});
