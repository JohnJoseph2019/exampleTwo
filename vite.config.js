import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    build: {
        outDir: 'build',
    },
    plugins: [react()],
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     open: true
//   }
// })

// vite.config.js
// import {defineConfig} from 'vite';
// import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig(({command}) => {
//     const config = {
//         plugins: [react()],
//         base: '/',
//     };

//     if (command !== 'serve') {
//         config.base = '/example_Two/';
//     }

//     return config;
// });
