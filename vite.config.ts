import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Configura o servidor do TanStack Start.
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});
