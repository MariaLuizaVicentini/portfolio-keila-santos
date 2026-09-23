import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Configura o servidor do TanStack Start.
  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  // Configura o ambiente e os recursos utilizados pelo Vitest.
  test: {
    // Permite usar describe, it, expect etc. sem importar manualmente.
    globals: true,

    // Simula um ambiente de navegador para os testes.
    environment: "jsdom",

    // Executa configurações globais antes dos testes.
    setupFiles: ["./src/setupTests.ts"],

    // Permite processar arquivos CSS durante os testes.
    css: true,

    // Configura a geração e as regras de cobertura dos testes.
    coverage: {
      // Utiliza o V8 para calcular a cobertura.
      provider: "v8",

      // Define os formatos dos relatórios de cobertura.
      reporter: ["text", "html", "lcov"],

      // Define os arquivos considerados no cálculo da cobertura.
      include: ["src/**/*.{ts,tsx}"],

      // Remove arquivos que não devem fazer parte da cobertura.
      exclude: [
        "src/**/*.test.{ts,tsx}",
        "src/**/*.spec.{ts,tsx}",
        "src/main.tsx",
        "src/**/*.d.ts",
        "src/**/*.stories.{ts,tsx}",
        "src/types/**",
      ],

      // Define o percentual mínimo de cobertura esperado.
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 75,
        statements: 80,
      },
    },
  },
});
