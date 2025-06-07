# Dicoding React Expert Submission

Submission project untuk sertifikasi **Menjadi React Web Developer Expert** dari Dicoding Academy.

## 📋 Tentang Project

Project ini dibuat sebagai submission untuk mendemonstrasikan kemampuan dalam pengembangan aplikasi React dengan standar expert level, mencakup:

- Penerapan clean code dan best practices
- Konfigurasi ESLint untuk code quality
- Implementasi Redux untuk state management
- Penggunaan React Strict Mode
- Penanganan asynchronous operations

## 🎯 Learning Objectives

### 1. Code Quality & Best Practices
- [x] Mengetahui pentingnya menuliskan kode yang konsisten
- [x] Menggunakan ESLint sebagai JavaScript Linter
- [x] Mengetahui kaidah penulisan kode yang baik menurut buku Clean Code
- [x] Mengetahui fungsi Strict Mode pada pengembangan aplikasi React
- [x] Menggunakan Strict Mode dan memperbaiki bugs hasil sorotannya

### 2. ESLint Configuration
- [x] Memasang dan mengonfigurasi ESLint untuk proyek React
- [x] Mengaudit kode dengan ESLint menggunakan `npx eslint ./src`
- [x] Mengintegrasikan ESLint dengan VSCode

### 3. Redux Implementation
- [x] Mengenal dan membuat state container (store)
- [x] Mengenal dan membuat action dengan memanfaatkan action creator
- [x] Mengenal dan membuat reducer sebagai pure function untuk perubahan state yang terprediksi
- [x] Menggunakan Redux store pada aplikasi React
- [x] Mengenal dan membuat middleware function
- [x] Menangani proses asynchronous pada Redux store
- [x] Menjabarkan best practices dalam menggunakan Redux

## 🚀 Tech Stack

- **React** - UI Library
- **Vite** - Build Tool & Development Server
- **Redux** - State Management
- **ESLint** - Code Linting
- **JavaScript/TypeScript** - Programming Language

## 📦 Installation

1. Clone repository ini:
```bash
git clone https://github.com/username/dicoding-expert-submission-react.git
cd dicoding-expert-submission-react
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Untuk production build:
```bash
npm run build
```

## 🔧 ESLint Configuration

Project ini menggunakan ESLint untuk menjaga kualitas kode. Untuk mengaudit kode:

```bash
npx eslint ./src
```

### ESLint Rules yang Digunakan

Current setup menggunakan plugins resmi:
- `@vitejs/plugin-react` dengan Babel untuk Fast Refresh
- `@vitejs/plugin-react-swc` dengan SWC untuk Fast Refresh

### Advanced ESLint Configuration

Untuk aplikasi production, disarankan menggunakan type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // Atau untuk rules yang lebih ketat:
    ...tseslint.configs.strictTypeChecked,
    // Opsional untuk stylistic rules:
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

### React-Specific Lint Rules

Untuk rules khusus React, dapat menggunakan:

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## 🏗️ Project Structure

```
dicoding-expert-submission-react/
├── public/
├── src/
│   ├── components/
│   ├── redux/
│   │   ├── actions/
│   │   ├── reducers/
│   │   ├── middleware/
│   │   └── store.js
│   ├── utils/
│   └── App.jsx
├── .eslintrc.js
├── package.json
├── vite.config.js
└── README.md
```

## 📝 Scripts

```bash
npm run dev          # Menjalankan development server
npm run build        # Build untuk production
npm run preview      # Preview production build
npm run lint         # Menjalankan ESLint
npm run lint:fix     # Memperbaiki ESLint errors otomatis
```

## 🎨 Features

- ✅ Clean Code Implementation
- ✅ ESLint Integration
- ✅ Redux State Management
- ✅ React Strict Mode
- ✅ Async Operations Handling
- ✅ Middleware Implementation
- ✅ Best Practices Following

## 🔍 Code Quality Standards

Project ini mengikuti standar kualitas kode yang tinggi:

1. **Consistent Coding Style** - Menggunakan ESLint untuk konsistensi
2. **Clean Code Principles** - Mengikuti prinsip dari buku Clean Code
3. **React Best Practices** - Implementasi pattern dan practices terbaik
4. **Redux Best Practices** - State management yang optimal
5. **Error Handling** - Penanganan error yang proper




