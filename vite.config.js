import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                services: resolve(__dirname, '/pages/services.html'),
                jobs: resolve(__dirname, '/pages/jobs.html'),
                materials: resolve(__dirname, '/pages/materials.html'),
                industries: resolve(__dirname, '/pages/industries.html'),
                rocblok: resolve(__dirname, '/pages/rocblok.html'),
                supercell: resolve(__dirname, '/pages/supercell.html'),
            },
        },
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
        }),
    ],
})