import { formatCurrency } from "./formatCurrency";

describe("formatCurrency", () => {
  it("should format a positive number as BRL currency", () => {
    const result = formatCurrency(1500);
    expect(result).toBe("R$\u00a01.500,00");
  });

  it("should format zero correctly", () => {
    const result = formatCurrency(0);
    expect(result).toBe("R$\u00a00,00");
  });

  it("should format negative values", () => {
    const result = formatCurrency(-250.5);
    expect(result).toContain("250,50");
  });

  it("should support other currencies", () => {
    const result = formatCurrency(100, "en-US", "USD");
    expect(result).toBe("$100.00");
  });
});
