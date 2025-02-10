# Next.js Boilerplate with ShadCN UI

Este é um boilerplate para projetos utilizando Next.js App Router, TailwindCSS e ShadCN UI. Inclui uma estrutura organizada, ferramentas de linting e formatação, e suporte para temas.

## 🚀 Tecnologias

- [Next.js 15](https://nextjs.org/) - Framework React
- [React 19](https://react.dev/) - Biblioteca para UI
- [ShadCN UI](https://ui.shadcn.com/) - Componentes estilizados
- [TailwindCSS](https://tailwindcss.com/) - Estilização utilitária
- [Zod](https://zod.dev/) - Validação de esquemas
- [React Hook Form](https://react-hook-form.com/) - Gerenciamento de formulários
- [Axios](https://axios-http.com/) - Cliente HTTP
- [Husky](https://typicode.github.io/husky/) - Git hooks
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Linting e formatação

## 📂 Estrutura do Projeto

```plaintext
.
├── commitlint.config.js
├── components.json
├── env.example
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── global.css
│   │   ├── global-error.tsx
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   └── core
│       ├── components
│       │   ├── atoms
│       │   │   └── index.ts
│       │   ├── molecules
│       │   │   └── index.ts
│       │   ├── organisms
│       │   │   └── index.ts
│       │   ├── pages
│       │   │   └── index.ts
│       │   ├── template
│       │   │   └── index.ts
│       │   ├── theme
│       │   │   ├── index.ts
│       │   │   ├── mode-toggle.tsx
│       │   │   └── theme-provider.tsx
│       │   └── ui
│       │       ├── button.tsx
│       │       ├── checkbox.tsx
│       │       ├── dropdown-menu.tsx
│       │       ├── form.tsx
│       │       ├── input.tsx
│       │       ├── label.tsx
│       │       ├── radio-group.tsx
│       │       ├── select.tsx
│       │       ├── separator.tsx
│       │       ├── skeleton.tsx
│       │       └── textarea.tsx
│       ├── hooks
│       │   ├── useFetch.ts
│       │   └── useMediaQuery.ts
│       ├── lib
│       │   ├── axios.ts
│       │   ├── cn
│       │   │   └── index.ts
│       │   └── index.ts
│       └── schemas
│           └── index.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠️ Configuração

1. Clone o repositório:

   ```sh
   git clone https://github.com/PedroCamargo-dev/next-js-boilerplate-shadcn-ui.git
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Copie o arquivo de variáveis de ambiente:

   ```sh
   cp env.example .env.local
   ```

4. Inicie o servidor de desenvolvimento:

   ```sh
   npm run dev
   ```

## 🚀 Subindo para um Novo Repositório

Se deseja criar um novo repositório para este boilerplate, siga os passos abaixo:

1. No GitHub, crie um novo repositório.
2. No terminal, remova o repositório original (caso tenha clonado de outro lugar):

   ```sh
   rm -rf .git
   ```

3. Inicialize um novo repositório Git:

   ```sh
   git init
   ```

4. Adicione os arquivos ao controle de versão:

   ```sh
   git add .
   ```

5. Faça o primeiro commit:

   ```sh
   git commit -m "chore: initial commit"
   ```

6. Adicione o repositório remoto criado no GitHub:

   ```sh
   git remote add origin https://github.com/seu-usuario/novo-repositorio.git
   ```

7. Envie os arquivos para o repositório remoto:

   ```sh
   git push -u origin main
   ```

## 🔥 Comandos Disponíveis

- `npm run dev` - Inicia o ambiente de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint-staged` - Executa lint e formatação

## 📝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m "feat: adiciona nova feature"`
4. Envie um PR

## 📄 Licença

Este projeto está sob a [licença](LICENSE) MIT.
