import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'), // your main export
      name: 'AnarockWidgets',
      fileName: (format) => `index.${format}.js`, // dist/index.esm.js and dist/index.umd.js
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // peer dependencies
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
