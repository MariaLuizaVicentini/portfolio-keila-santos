import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Define o Nitro para gerar um servidor Node.js padrão
  nitro: {
    preset: "node-server",
  },
  // Configura o servidor do TanStack Start
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});