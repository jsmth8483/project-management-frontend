import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
	build: {
		rollupOptions: {
			main: resolve(__dirname, 'index.html'),
			nested: resolve(__dirname, 'public/home.html'),
		},
	},
});
