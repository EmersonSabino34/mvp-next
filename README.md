<div align='center'>


# FitnessAI – App Inicial com Login e Cadastro (Next.js + TailwindCSS)


</div>

Este projeto é um app web moderno e responsivo para começar uma plataforma de treinos personalizados com IA.  
Inclui login, cadastro e um header bonito e funcional, tudo feito em **Next.js + TailwindCSS**.

---

## 🚀 Tecnologias usadas
- Next.js 14 (App Router)
- React
- TailwindCSS
- React Icons
- TypeScript (opcional)

---

## 📦 Instalação
```bash
git clone seuprojeto
cd seuprojeto
npm install
npm run dev

###

http://localhost:3000

####

/app
 ├── login/page.tsx
 ├── cadastro/page.tsx
 ├── globals.css
/components
 ├── Header.tsx
## Estrutura de componentes

Os componentes reutilizáveis foram organizados em `app/_components` e exportados por `app/_components/index.ts`.

- `Header.tsx` — Cabeçalho com navegação (usa `next/link`).
- `StatCard.tsx` — Cartão de estatísticas reutilizável.
- `ProgressChart.tsx` — Componente de gráfico (usa `chart.js` + `react-chartjs-2`).

Use importações nomeadas a partir do índice, por exemplo:

```ts
import { Header, StatCard, ProgressChart } from './app/_components'
```

## Comandos úteis

Instalar dependências:
```bash
npm install
```

Rodar em modo de desenvolvimento:
```bash
npm run dev
```

Rodar checagem TypeScript:
```bash
npx tsc --noEmit
```

Rodar linter (e aplicar correções automáticas quando possível):
```bash
npm run lint -- --ext .ts,.tsx,.js,.jsx --fix .
```

## Próximos passos sugeridos

- Padronizar rotas para lowercase (opcional).  
- Adicionar testes e CI.  
- Commitar e abrir um PR para revisão.
