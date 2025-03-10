import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import * as path from 'path'

export default defineConfig({
    plugins: [
        react(),
        dts(),
        svgr({
            svgrOptions: {exportType: "default", ref: true, svgo: false, titleProp: true}, include: "**/*.svg",
        })
    ],
    build: {
        minify: 'terser',  // Включение Terser для сжатия
        chunkSizeWarningLimit: 500, // Увеличение лимита для больших чанков
    },
    resolve: {
        alias: [
            {find: '@', replacement: path.resolve(__dirname, 'src')},
            {find: '@svg', replacement: path.resolve(__dirname, 'src/shared/svg')},
        ],
    }
})