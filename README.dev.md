## Referência

Os estudos e exemplos deste projeto têm como base o artigo:

>  **[Testes Unitários com Vitest e React: do Zero ao Pipeline de CI/CD](https://medium.com/@pf.souza15/testes-unit%C3%A1rios-com-vitest-e-react-do-zero-ao-pipeline-de-ci-cd-f1fe898a07cd)**  
> *Por Paulo Souza*

---

## Observações importantes
- **Foto do Hero**: no projeto Lovable a foto é servida via `src/assets/keila-santos-hero.jpeg.asset.json` (hospedagem do Lovable). Fora do Lovable, troque o import em `src/components/portfolio.tsx` (constante `heroPhoto`) por uma importação direta do arquivo local `src/assets/keila-santos-hero.jpeg` (incluído nesta cópia), por exemplo:
  ```ts
  import heroPhoto from "@/assets/keila-santos-hero.jpeg";
  // e usar heroPhoto diretamente no lugar de heroPhoto.url
  ```
- `src/routeTree.gen.ts` é gerado automaticamente pelo TanStack Start — não edite à mão.
- Dados editáveis do portfólio ficam em `src/lib/portfolio-data.ts`.
- `node_modules` não está incluído: use `npm install` (ou `bun install`) para restaurar as dependências a partir de `package.json` / `bun.lock`.

---

# Preparação do Ambiente

Dependências:
- `Vitest` — test runner e framework de asserções
- `@testing-library/react` — utilitários para renderizar e interagir com componentes React
- `@testing-library/user-event` — simulação realista de interações do usuário
- `@testing-library/jest-dom` — matchers customizados para o DOM (.toBeInTheDocument(), .toBeVisible(), etc.)
- `jsdom` — ambiente DOM simulado para rodar os testes fora do browser
- `@vitest/coverage-v8` — relatórios de cobertura de código

---
# Scripts do projeto
- Podemos rodar qualquer um com o inicio do comando sendo:
```bash
npm run
```

SCRIPTS:
- `dev` — inicia o servidor de desenvolvimento
- `preview` — visualiza localmente a build de produção
- `test` — executa os testes em modo watch (re-executa ao salvar)
- `test:run` — executa os testes uma vez e sai (ideal para CI)
- `test:coverage` — gera o relatório de cobertura de testes
- `test:ui` — abre a interface visual dos testes no navegador
- `lint` — analisa o código em busca de erros e padrões (ESLint)
- `format` — formata o código automaticamente (Prettier)
- `build` — compila a aplicação para produção com verificação de tipos (tsc)
- `build:dev` — compila a aplicação usando o modo de desenvolvimento

---

# Estrutura dos arquivos de teste
Levando em consideração o porte atual do projeto, optei por adotar a estratégia de deixar os testes localizados junto ao código-fonte. 

Essa abordagem facilita a navegação, melhora a manutenibilidade e torna o desenvolvimento mais ágil no momento inicial, permitindo conhecer e validar as funcionalidades existentes antes de realizar refatorações mais complexas.
```md
src/
  components/
    Button/
      Button.tsx
      Button.test.tsx    ← teste ao lado do componente
      index.ts
  hooks/
    useCounter/
      useCounter.ts
      useCounter.test.t
```