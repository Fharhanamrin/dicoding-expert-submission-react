# Menjadi React Web Developer Expert
1. Mengetahui pentingnya menuliskan kode yang konsisten.
2. Menggunakan ESLint sebagai JavaScript Linter.
3. Mengetahui kaidah penulisan kode yang baik menurut buku Clean Code.
4. Mengetahui fungsi Strict Mode pada pengembangan aplikasi React.
5. Menggunakan Strict Mode dan memperbaiki bugs hasil sorotannya.

## Latihan 1 Konfigurasi ESLint
1. Mengetahui cara memasang dan mengonfigurasi ESLint untuk proyek React
2. Mengetahui cara mengaudit kode dengan ESLint
3. Mengetahui cara mengintegrasikan ESLint dengan VSCode

npx eslint ./src => show code yang tidak sesuai aturan main

## Latihan 2 redux
1. Mengenal dan membuat state container (store)
2. Mengenal dan membuat action dengan memanfaatkan action creator
3. Mengenal dan membuat reducer sebagai pure function untuk perubahan state yang terprediksi
4. Menggunakan Redux store pada aplikasi React
5. Mengenal dan membuat middleware function
6. Menangani proses asynchronous pada Redux store
7. Menjabarkan best practices dalam menggunakan Redux



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
# dicoding-expert-submission-react
