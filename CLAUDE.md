# Prototipo web TFG · Infarto en la mujer

## Contexto

Web divulgativa para un Trabajo de Fin de Grado de Enfermería. Objetivo: que una mujer reconozca que sus síntomas pueden ser un infarto (distintos a los del hombre, a menudo confundidos con ansiedad) y llame a emergencias en segundos.

Este repositorio es un **prototipo navegable para enseñar a la clienta**, no la web final. Prioridad: que se vea y se use como la web real en un móvil. Todo el contenido es provisional hasta que la clienta entregue el definitivo (principios de noviembre).

## Stack

- **Astro** (última versión estable) + CSS propio con variables. Sin frameworks de UI ni Tailwind.
- JavaScript vanilla solo donde haga falta interacción (test, pestañas, acordeones, selector de tema).
- Sin backend, sin base de datos, sin analítica, sin cookies.
- Despliegue estático (Netlify o similar). `npm run build` debe generar `dist/` publicable.

## Reglas para el contenido provisional

- Todo texto provisional va marcado visualmente con la etiqueta `PROVISIONAL` (componente `<Draft>`), para que nadie lo confunda con contenido validado.
- Los síntomas pueden usar información general ampliamente aceptada, pero sin cifras ni referencias inventadas. Donde iría un dato o una cita, poner `[Dato pendiente]` o `[Ref. pendiente]`.
- El test de riesgo usa una **lógica de puntuación ficticia** y lo dice en pantalla. No implementar SCORE2, REGICOR ni ninguna escala real hasta que la clienta la entregue. No presentar nunca el resultado como diagnóstico.
- Testimonios: 4 relatos inventados, cortos y marcados como ejemplo.
- Todo el contenido vive en `src/content/` (JSON o Markdown), nunca escrito a mano dentro de los componentes, para poder sustituirlo después sin tocar código.

## Rutas

| Ruta | Página |
| --- | --- |
| `/` | Portada |
| `/sintomas` | Síntomas en la mujer |
| `/diferencias` | Comparativa mujer / hombre |
| `/test` | Test de riesgo cardiovascular |
| `/testimonios` | Testimonios y comunidad |
| `/que-hacer` | Qué hacer ante un infarto |
| `/bibliografia` | Recursos bibliográficos |
| `/quienes-somos`, `/aviso-legal`, `/privacidad` | Páginas de pie (texto de relleno) |

## Diseño

Tono: sanitario cálido. Confianza, no miedo. Nada de rosa dominante ni fotos de stock.

### Tokens (en `src/styles/tokens.css`)

Dos temas para que la clienta elija, conmutables con un selector flotante visible solo en el prototipo (y con `?tema=a` / `?tema=b` en la URL):

| Token | Tema A · Ciruela | Tema B · Petróleo |
| --- | --- | --- |
| `--color-primary` | `#6B2D5C` | `#1F5F6B` |
| `--color-primary-soft` | `#F4EAF1` | `#E6F1F2` |
| `--color-bg` | `#FBF8F5` | `#F8FAF9` |
| `--color-surface` | `#FFFFFF` | `#FFFFFF` |
| `--color-text` | `#22201F` | `#1C2326` |
| `--color-text-muted` | `#5E5955` | `#55605F` |
| `--color-border` | `#E4DDD6` | `#DCE3E2` |
| `--color-emergency` | `#C62828` | `#C62828` |

- El rojo `--color-emergency` se usa **solo** en el botón de emergencias y en la pantalla «Qué hacer». En ningún otro sitio.
- Tipografía (cambiada el 22/10/2026 a petición del usuario, tras analizar webs sanitarias reales: Maven Clinic, One Medical, Parsley, NHS): **Newsreader** para titulares (serif editorial) y **Hanken Grotesk** para texto e interfaz, ambas servidas desde la propia web (@fontsource-variable). Cuerpo 18 px, peso 450, interlineado 1.6. Títulos 28 / 22 / 19 px en móvil.
- Espaciado en múltiplos de 8 px. Radios de 12 px en tarjetas, 999 px en botones.
- Iconos: Lucide (SVG en línea), **solo funcionales** (teléfono, menú, cerrar, desplegar, atrás). Nada de iconos decorativos en círculos de color: las secciones se apoyan en fotos y tipografía.
- Ilustraciones: formas simples en SVG propias. Fotos generadas con IA (sin bancos de imágenes) en src/assets/fotos/, con aviso «generadas con IA»; prompts en docs/prompts-fotos.md.

### Accesibilidad (obligatorio)

- WCAG 2.2 AA: contraste ≥ 4,5:1 (comprobar el blanco sobre el rojo y sobre ambos primarios).
- Zonas táctiles ≥ 48 px.
- Navegable con teclado; el botón de emergencias es el primer elemento enfocable de cada página (después del enlace «Saltar al contenido»).
- HTML semántico, `lang="es"`, foco visible, `prefers-reduced-motion` respetado.
- Ninguna información solo por color.

## Componentes

- `EmergencyButton`: enlace `tel:061`, texto «Llamar al 061» + icono de teléfono, 56 px de alto. En móvil fijo abajo a lo ancho de la pantalla; en escritorio fijo arriba a la derecha. Debajo del botón en la portada: «Si estás fuera de tu comunidad o no puedes hablar, llama al 112» (enlace `tel:112`). En escritorio, al pulsar, mostrar el número en grande en un diálogo en lugar de solo intentar llamar. El contenido de la página nunca queda tapado por el botón fijo.
- `Header` con menú (hamburguesa en móvil) y `Footer` con aviso sanitario breve y enlaces legales.
- `Disclaimer`: «Esta web es informativa y no sustituye la valoración de un profesional. Ante la duda, llama al 061.»
- `SymptomCard` (icono + título + una frase), `Accordion`, `Tabs`, `Draft` (etiqueta PROVISIONAL).
- `BodyCompare`: dos siluetas humanas neutras en SVG lado a lado con las zonas de dolor marcadas (círculos semitransparentes con número), y leyenda debajo. Las zonas también listadas en texto.
- `QuizStep`, `ProgressBar`, `ResultCard`.
- `TestimonialCard`, `ReferenceItem`.

## Páginas

### Portada
1. Titular corto: «Un infarto en la mujer no siempre duele en el pecho» (provisional).
2. Bloque «¿Te está pasando ahora?» con 6 señales en tarjetas compactas y el botón 061 grande.
3. Accesos a las secciones como tarjetas.
4. Una frase del mensaje central: «No es ansiedad hasta que se descarte el corazón».

### Síntomas
Tarjetas de síntomas arriba; debajo, un acordeón por síntoma con explicación, «por qué se confunde con ansiedad» y `[Ref. pendiente]`. Bloque destacado «Señales que no esperas».

### Diferencias
`BodyCompare` + tabla de dos columnas Mujer / Hombre. En pantallas < 640 px, la tabla se convierte en pestañas «Mujer» / «Hombre».

### Test
- Pantalla inicial: qué mide, cuánto tarda (2 min), aviso de que **no se guarda ni se envía ningún dato** y de que la lógica es provisional.
- 10 preguntas, una por pantalla, con barra de progreso y botón «Atrás». Preferir botones de opción grandes a campos de texto. Incluir: edad, tabaco, tensión alta, colesterol alto (con opción «No lo sé»), diabetes, antecedentes familiares, actividad física, menopausia, medicación actual (casillas: antihipertensivos, estatinas, antidiabéticos, anticonceptivos hormonales, otra, ninguna), peso y altura opcionales.
- Puntuación ficticia sumando puntos por respuesta; tres niveles: bajo, moderado, alto. Cada resultado con qué significa y qué hacer (siempre recomienda consultar en su centro de salud). Botón «Repetir test».
- Todo el estado en memoria; nada en `localStorage`.

### Testimonios
Listado de 4 `TestimonialCard` (nombre o seudónimo, edad, síntomas que tuvo, extracto, «Leer más»). Formulario «Comparte tu experiencia» con casilla de consentimiento obligatoria; al enviar, no manda nada: muestra «Gracias. Tu relato se revisará antes de publicarse». Normas de la comunidad en un acordeón.

### Qué hacer
Pasos numerados grandes (siéntate, no conduzcas, llama, abre la puerta, ten a mano tu medicación) marcados `PROVISIONAL`, con el botón 061 repetido.

### Bibliografía
6 referencias de ejemplo con formato Vancouver de relleno y filtro por tipo (Guías clínicas / Artículos / Para pacientes).

## Orden de trabajo

Haz un commit al terminar cada paso y para tras los pasos 1 y 3 para que revisemos.

1. Proyecto Astro, tokens, ambos temas y su selector, layout base, `Header`, `Footer`, `EmergencyButton`.
2. Portada.
3. Síntomas y Diferencias.
4. Test.
5. Testimonios, Qué hacer, Bibliografía y páginas de pie.
6. Repaso de accesibilidad y de 360 px a 1440 px.

## Terminado cuando

- `npm run dev` y `npm run build` funcionan sin errores ni avisos.
- Todas las rutas existen y se navega entre ellas.
- Se ve bien a 360, 768 y 1440 px, sin scroll horizontal.
- Lighthouse Accesibilidad ≥ 95 en todas las páginas.
- El botón de emergencias está visible en todas las páginas y no tapa contenido.
- Todo el contenido provisional está marcado y vive en `src/content/`.

## Fuera de alcance (no hacer)

WordPress, backend, base de datos, foro con registro, escalas de riesgo reales, geolocalización o llamada automática (Fase 2), analítica, banner de cookies, contenido médico con cifras o referencias inventadas.
