## Referência

Os estudos e exemplos deste projeto têm como base o artigo:

>  **[Testes Unitários com Vitest e React: do Zero ao Pipeline de CI/CD](https://medium.com/@pf.souza15/testes-unit%C3%A1rios-com-vitest-e-react-do-zero-ao-pipeline-de-ci-cd-f1fe898a07cd)**  
> *Por Paulo Souza*

---

## Observações importantes

- `src/routeTree.gen.ts` é gerado automaticamente pelo TanStack Start,
- Dados editáveis do portfólio ficam em `src/lib/portfolio-data.ts`.

---

## Dependências:

- `Vitest` - test runner e framework de asserções
- `@testing-library/react` - utilitários para renderizar e interagir com componentes React
- `@testing-library/user-event` - simulação realista de interações do usuário
- `@testing-library/jest-dom` - matchers customizados para o DOM (.toBeInTheDocument(), .toBeVisible(), etc.)
- `jsdom` - ambiente DOM simulado para rodar os testes fora do browser
- `@vitest/coverage-v8` - relatórios de cobertura de código

---
## Scripts do projeto
- Podemos rodar qualquer um com o inicio do comando sendo:
```bash
npm run
```

SCRIPTS:
- `dev` - inicia o servidor de desenvolvimento
- `preview` - visualiza localmente a build de produção
- `test` - executa os testes em modo watch (re-executa ao salvar)
- `test:run` - executa os testes uma vez e sai (ideal para CI)
- `test:coverage` - gera o relatório de cobertura de testes
- `test:ui` - abre a interface visual dos testes no navegador
- `lint` - analisa o código em busca de erros e padrões (ESLint)
- `format` - formata o código automaticamente (Prettier)
- `build` - compila a aplicação para produção com verificação de tipos (tsc)
- `build:dev` - compila a aplicação usando o modo de desenvolvimento

---

## Estrutura dos arquivos de teste
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

----

## Boas Práticas

Princípio fundamental: 
- teste comportamento, não implementação!!!
- O maior erro ao testar componentes React é testar detalhes de implementação...
- Isso quebra seus testes a cada refactor,mesmo quando o comportamento permanece correto..

```ts
// ❌ Ruim - testa implementação interna
it('should set isLoading to true', () => {
  const { result } = renderHook(() => useMyHook());
  expect(result.current.isLoading).toBe(true);
});
  
// ✅ Bom - testa o que o usuário enxerga
it('should show a loading spinner while fetching', async () => {
  render(<MyComponent />);
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});
```