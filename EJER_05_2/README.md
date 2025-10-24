# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Problemas detectados
- Se usaba `key={index}` en el `.map()` (mala práctica).
- Lógica de filtrado dentro del JSX.
- Todo el código en un solo archivo.
- Estilos inline sin Bootstrap.

## ¿Por qué es fundamental el uso de `key`?
Porque ayuda a React a identificar cada elemento de una lista, optimizando el renderizado y evitando errores visuales.  
Una `key` única permite que React sepa qué elementos han cambiado, añadido o eliminado sin volver a renderizar toda la lista.

## Tecnologías
React · Bootstrap · Vite
