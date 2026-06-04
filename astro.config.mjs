// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://theoneistari.github.io',
  base: '/dobbelboer',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
