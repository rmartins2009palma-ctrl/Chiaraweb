/**
 * Enlaces internos con la base del sitio. En local la base es «/»; en GitHub Pages es
 * «/Chiaraweb/» (ver astro.config.mjs). El contenido guarda rutas como «/sintomas».
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${base}${path}`;
}

/** Ruta actual sin la base ni la extensión, para marcar la página activa del menú. */
export function currentPath(pathname: string): string {
  const withoutBase = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return withoutBase.replace(/\.html$/, '').replace(/\/$/, '') || '/';
}
