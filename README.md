# Late distinto · Prototipo web TFG

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
