import { defineConfig } from 'astro/config';

// Añadir configuración para Markdown y colecciones
export default defineConfig({
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'dracula'
    }
  }
});