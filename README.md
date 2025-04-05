# ⚛️ nextgen_template

A **modern, minimal, and scalable** React + TypeScript + Webpack boilerplate built for developers who value performance and clarity.  
Designed from scratch to **include only what's essential**, so you can build fast without bloat.

---

## 🚀 Features

- ✅ **Minimal Setup** — No unnecessary dependencies. Just the essentials.
- 📦 **Custom Webpack 5 Config** — Full control over your dev and production builds.
- 🔠 **TypeScript Ready** — Type-safe development from the start.
- ♻️ **React 19 + React Refresh** — HMR for a smooth developer experience.
- 🧹 **Pre-configured ESLint & Prettier** — Keep your code consistent.
- 📁 **Predefined Folder Structure** — Opinionated but flexible directory layout.
- ⚙️ **Optimized Scripts** — Dev and production commands, formatting, and linting all ready-to-go.
- 📊 **Webpack Bundle Analyzer** — Built-in support to analyze production bundle sizes.

---

## 📁 Folder Structure

```bash
.
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/       
│   ├── hooks/
│   ├── layouts/
│   ├── lib/
│   ├── pages/            
│   ├── routes/
│   ├── store/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── index.tsx         
│   ├── Meta.tsx
│   └── styles.css
├── webpack/
│   ├── webpack.common.js
│   ├── webpack.config.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── .babelrc
├── .env
├── .gitignore
├── .prettierrc
├── .eslintrc.cjs
├── package.json
├── pnpm-lock.yaml
├── README.md
└── tsconfig.json
```

---

## 🧠 Notable Optimizations (Based on `package.json`)

- **Selective Dependencies**: Only includes React, ReactDOM, and React Helmet for HTML management.
- **Efficient Tooling**: Babel + TypeScript presets for fast transpilation.
- **Performance Tools**: Webpack Bundle Analyzer for optimization insights.
- **Fast Pre-commit Hooks**: `lint-staged` handles ESLint and Prettier before every commit.
- **Modular Webpack**: Separate configurations for dev and prod environments.

---

## 🛠️ Getting Started

> Requires [PNPM](https://pnpm.io) globally: `npm i -g pnpm`

```bash
# Create a new app using this template
npm create nextgen my-app

# Navigate into the project directory
cd my-app

# Install dependencies
pnpm install

# Start the dev server
pnpm start
```

### 🔨 Build for Production

```bash
# Build for Production
pnpm build

# Navigate into the project directory
cd ./build/

# Serve the files
npx serve.
```

### ✨ Lint and Format Code

```bash
pnpm lint
pnpm format
```

---

## 📌 Roadmap / Upcoming Features

We’re working on adding support for more file types and tools:

- [ ] ✅ SVG/Asset management
- [ ] ✅ ENV config support
- [ ] ✅ Built-in React Testing Library(to be included in the future versions)

> If you want something to be included already in this template just go over to the [GitHub Issues](https://github.com/visy-ani/nextgen_template/issues) and raise an issue.  
> If it's genuine then we'll definitely include it, otherwise you can also configure it by yourself in your repo — it's built from scratch for full control.

---

## 🤝 Contributing

All contributions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feat/something-cool`)
3. Commit your changes (`git commit -m 'feat: add something cool'`)
4. Push to the branch (`git push origin feat/something-cool`)
5. Open a Pull Request

---

## 📃 License

MIT License

```
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this template and its associated documentation files, to deal in the template
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the template,
and to permit persons to whom the template is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the template.

THE TEMPLATE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM,
OUT OF, OR IN CONNECTION WITH THE TEMPLATE OR THE USE OR OTHER DEALINGS IN THE TEMPLATE.
```

---

## 🌟 Star the repo if you like it!

> Thanks for checking out **nextgen_template**! Let's build better and faster together 🚀

