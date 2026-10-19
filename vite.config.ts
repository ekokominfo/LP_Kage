import { defineConfig } from 'vite';
export default defineConfig({ base: '/LP_Kage/', esbuild: { jsx: 'automatic' }, optimizeDeps: { entries: ['index.html'] } });
