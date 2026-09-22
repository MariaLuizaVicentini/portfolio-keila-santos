# Como rodar este projeto fora do Lovable

## Requisitos
- Node.js 20+ (instale via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm ou bun

## Passos
```sh
npm install       # ou: bun install
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção
```

## Observações importantes
- **Foto do Hero**: no projeto Lovable a foto é servida via `src/assets/keila-santos-hero.jpeg.asset.json` (hospedagem do Lovable). Fora do Lovable, troque o import em `src/components/portfolio.tsx` (constante `heroPhoto`) por uma importação direta do arquivo local `src/assets/keila-santos-hero.jpeg` (incluído nesta cópia), por exemplo:
  ```ts
  import heroPhoto from "@/assets/keila-santos-hero.jpeg";
  // e usar heroPhoto diretamente no lugar de heroPhoto.url
  ```
- `src/routeTree.gen.ts` é gerado automaticamente pelo TanStack Start — não edite à mão.
- Dados editáveis do portfólio ficam em `src/lib/portfolio-data.ts`.
- `node_modules` não está incluído: use `npm install` (ou `bun install`) para restaurar as dependências a partir de `package.json` / `bun.lock`.
