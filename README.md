# TFGCambiar · Prototipo web TFG

Prototipo navegable de la web divulgativa sobre el infarto en la mujer (TFG de Enfermería).
Las especificaciones completas están en [CLAUDE.md](CLAUDE.md).

## Arrancar

Requiere Node.js 22 o superior.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/, publicable en Netlify
```

## Temas

Hay dos paletas para elegir: **A · Ciruela** y **B · Petróleo**. Se cambian con el botón «Tema»
(solo visible en el prototipo) o con `?tema=a` / `?tema=b` en la URL.

## Dónde está cada cosa

- `src/content/`: todo el texto (JSON). Se sustituye aquí cuando llegue el contenido definitivo.
- `src/styles/tokens.css`: colores, tipografía y espaciado de ambos temas.
- `src/components/`: componentes (`EmergencyButton`, `Header`, `Footer`, `Draft`…).
- `src/pages/`: una página por ruta.

El texto provisional se marca con la etiqueta `PROVISIONAL` (componente `Draft`).

## Fotos

Las fotos se generan con IA a partir de los prompts de [docs/prompts-fotos.md](docs/prompts-fotos.md).
Basta con dejar cada archivo en `src/assets/fotos/` con el nombre indicado (por ejemplo `sintoma-sudor-frio.jpg`).
Astro las optimiza al compilar. Mientras falte alguna, la web muestra un recuadro «Foto pendiente».

## Prototipo o web final

La web tiene dos modos. El **prototipo** es el de siempre (`npm run dev`, `npm run build`).

La **web final** se genera con:

```sh
npm run dev:final    # verla en local
npm run build:final  # generar dist/ para publicar
```

Lee `.env.final`, donde se elige el tema definitivo (`TEMA=a` Ciruela o `TEMA=b` Petróleo). En modo final:

- desaparecen el botón «Tema», el parámetro `?tema=` y la etiqueta `noindex` (la web podrá aparecer en buscadores);
- no se muestran las etiquetas PROVISIONAL ni la nota de prototipo del pie;
- si falta una foto, no aparece el recuadro «Foto pendiente»;
- el formulario de testimonios se sustituye por un aviso de «muy pronto», porque aún no envía los relatos a ningún sitio.

Al compilar en modo final se avisa de las páginas que todavía tienen marcas `[… pendiente]`. Antes de publicar la web final, ese aviso debería desaparecer.
