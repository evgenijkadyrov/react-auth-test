import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@constants': path.resolve(__dirname, './src/constants'),
		},
	},
	assetsInclude: ['.eslintrc.cjs'],
});
