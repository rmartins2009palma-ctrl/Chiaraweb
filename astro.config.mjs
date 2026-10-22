// @ts-check
import { defineConfig } from 'astro/config';

// En GitHub Pages la web vive en /Chiaraweb/: el flujo de publicación define BASE_PATH.
// En local y en Netlify se queda en la raíz.
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'never',
  build: { format: 'file' },
});
