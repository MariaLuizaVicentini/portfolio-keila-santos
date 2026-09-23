# Guia de Arquitetura de Roteamento (TanStack Start)

> **Resumo Geral:** Este diretório (`src/routes/`) é o **coração do roteamento da aplicação**. O TanStack Start utiliza **Roteamento Baseado em Arquivos (File-Based Routing)** totalmente tipado. A estrutura de pastas e arquivos definida aqui gera automaticamente a árvore de URLs e navegação da aplicação.

---

## Papel na Arquitetura do Projeto

1. **Estrutura Declarativa de URLs:** Não existe um arquivo de configuração centralizado manual (como `routes.ts` ou `App.tsx` com `<Route>`). A hierarquia de pastas **é** a hierarquia de URLs.
2. **Type Safety End-to-End:** Cada rota criada aqui é compilada e tipada no arquivo `routeTree.gen.ts`. Isso impede que qualquer desenvolvedor crie links quebrados (`<Link to="...">`) no código.
3. **Divisão de Responsabilidades (Layouts vs. Páginas):** 
   - Arquivos com prefixo `_` ou `__` definem a **estrutura visual** (menus, cabeçalhos, rodapés).
   - Arquivos comuns definem o **conteúdo específico** de cada página.

> ⚠️ **Atenção (Migração / Vindo de outros frameworks):**
> Se você vem do **Next.js** ou **Remix**, **esqueça as convenções** `src/pages/`, `src/routes/_app/index.tsx` ou `app/layout.tsx`. 
> O TanStack Start possui suas próprias convenções (detalhadas abaixo).

---

## Como Funciona o Fluxo de Renderização?

Quando o usuário acessa uma URL como `/users/123`:

```ts
[ Requisição: /users/123 ]
          │
          ▼
1. src/routes/__root.tsx      ──> (Layout Global: HTML, Head, Providers)
          │
          ▼ <Outlet/>
2. src/routes/users/$id.tsx   ──> (Página de Detalhes do Usuário id=123)
```

# Convenções

| Arquivo | URL |
| --- | --- |
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` (dinâmico — apenas `$`, sem chaves) |
| `posts/{-$category}.tsx` | `/posts/:category?` (segmento opcional) |
| `files/$.tsx` | `/files/*` (splat — lido via parâmetro `_splat`, nunca `*`) |
| `_layout.tsx` | rota de layout (renderiza os filhos via `<Outlet/>`) |
| `__root.tsx` | shell do app — envolve cada página; mantenha o `<Outlet/>` |

O arquivo `routeTree.gen.ts` é gerado automaticamente. Não o edite manualmente. 

----

# Dicas Rápidas ( dev )
 
Adicionar uma nova página simples: 
- Crie `src/routes/minha-pagina.tsx`
- Ela ficará disponível em `/minha-pagina`.

Criar uma área protegida / dashboard com menu: 
- Crie uma pasta `dashboard/` com um arquivo `_layout.tsx` (para o menu) e arquivos `index.tsx`, `settings.tsx` dentro dela.

Navegação Tipada:
```ts
import { Link } from '@tanstack/react-router'

// O autocomplete vai sugerir apenas rotas válidas!
<Link '123' id: params="{{" to="/users/$id" }}>Ver Usuário</Link>
```
