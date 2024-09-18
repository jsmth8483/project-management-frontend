import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig((mode) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		define: {
			'process.env': env,
		},
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
	};
});
