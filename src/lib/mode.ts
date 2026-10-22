import { MODO, TEMA } from 'astro:env/server';

/** true en la web final; false en el prototipo (por defecto). */
export const isFinal = MODO === 'final';

/** Tema fijo de la web final. */
export const finalTheme = TEMA;
