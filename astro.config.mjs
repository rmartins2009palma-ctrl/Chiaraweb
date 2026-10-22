// @ts-check
import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineConfig, envField } from 'astro/config';

/**
 * En modo final, avisa al compilar de las páginas que aún tienen marcas «[… pendiente]»,
 * para que el contenido provisional no se publique sin darse cuenta.
 */
const pendingCheck = {
  name: 'aviso-contenido-pendiente',
  hooks: {
    /** @param {{ dir: URL, logger: import('astro').AstroIntegrationLogger }} options */
    'astro:build:done': async ({ dir, logger }) => {
      const root = fileURLToPath(dir);
      const files = (await readdir(root)).filter((f) => f.endsWith('.html'));
      const pending = [];
      for (const file of files) {
        const html = await readFile(root + file, 'utf8');
        if (!html.includes('data-modo="final"')) return;
        // Cualquier marca entre corchetes que diga «pendiente»: [Ref. pendiente], [Texto pendiente: …]…
        const count = (html.match(/\[[^\]]*pendiente[^\]]*\]/gi) ?? []).length;
        if (count) pending.push(`${file} (${count})`);
      }
      if (pending.length) {
        logger.warn(`Modo final con contenido pendiente de sustituir: ${pending.join(', ')}`);
      }
    },
  },
};

// En GitHub Pages la web vive en /Chiaraweb/: el flujo de publicación define BASE_PATH.
// En local y en Netlify se queda en la raíz.
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'never',
  build: { format: 'file' },
  env: {
    schema: {
      // «prototipo» (por defecto) o «final». Con `--mode final` se lee .env.final.
      MODO: envField.enum({
        context: 'server',
        access: 'public',
        values: ['prototipo', 'final'],
        default: 'prototipo',
      }),
      // Tema fijo de la web final: «a» (Ciruela) o «b» (Petróleo).
      TEMA: envField.enum({ context: 'server', access: 'public', values: ['a', 'b'], default: 'a' }),
    },
  },
  integrations: [pendingCheck],
});
