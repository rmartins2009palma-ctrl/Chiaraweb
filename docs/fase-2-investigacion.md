# Fase 2: investigación inicial

*22 de octubre de 2026. Documento de trabajo para decidir el alcance de la Fase 2 con la autora del TFG.*

La Fase 2 recoge lo que el prototipo dejó fuera a propósito: **geolocalización** y **llamada automática**. Este documento resume qué se puede hacer, qué no, qué riesgos hay y qué decisiones necesitamos de la autora antes de construir nada.

## Resumen

1. **Llamar automáticamente desde una web no es posible**, y tampoco sería deseable. Los navegadores solo marcan un número cuando la persona lo pulsa. Además, una llamada automática generaría llamadas falsas a emergencias.
2. **La localización exacta ya la envía el propio móvil al 112.** Con el sistema AML (Localización Móvil Avanzada), al llamar al 112 desde un smartphone el centro de emergencias recibe la posición con unos 15–30 m de precisión, sin que la persona haga nada. La web no necesita enviarla.
3. **Lo que sí aporta la geolocalización es mostrar el número correcto según la comunidad autónoma.** En unas comunidades la urgencia sanitaria se atiende en el 061 y en otras en el 112. Se puede hacer sin enviar la ubicación a ningún servidor.
4. **Hay una duda importante que confirmar:** no hemos encontrado ninguna fuente que confirme que AML funcione al llamar al **061**; todas hablan del 112. Afecta al botón principal de la web.

## 1. ¿Llamada automática?

**No se puede, y conviene no intentarlo.**

- En una web, un enlace `tel:` solo abre el marcador del teléfono cuando la persona lo pulsa. Ningún navegador permite que una página llame por su cuenta.
- Aunque fuera posible, una web que llama sola provocaría llamadas por error a emergencias y sería un riesgo para el servicio.

**Lo que sí se puede ofrecer:**

| Propuesta | Qué es | Esfuerzo |
| --- | --- | --- |
| Guía «Prepara tu móvil» | Página paso a paso para activar la **Emergencia SOS** del propio teléfono. En iPhone: pulsar 5 veces el botón lateral, llamada automática y aviso con ubicación a los contactos. En Android: Ajustes → Seguridad y emergencia → Emergencia SOS. Es lo más parecido a una «llamada automática» y lo hace el teléfono, no la web. | Bajo (contenido) |
| Mensaje tranquilizador | En «Qué hacer» y junto al botón: «Al llamar desde el móvil, emergencias recibe tu ubicación automáticamente». Pendiente de confirmar si también es así con el 061 (ver apartado 3). | Muy bajo |
| «Si no puedes hablar» | Orientar hacia las apps oficiales **My112** (envía la ubicación al 112 y avisa a contactos) y **112 Accesible** (personas sordas o con dificultades del habla). Su disponibilidad y el alta varían según la comunidad. | Bajo, pero requiere verificar por comunidad |
| La web funciona sin conexión | Convertir la web en instalable (PWA), para que «Qué hacer» y el botón de llamada abran aunque no haya datos. Llamar no necesita internet. | Medio |

## 2. Geolocalización: mostrar el número correcto

### El problema

El prototipo dice «Llama al 061» y, como alternativa, «fuera de tu comunidad, llama al 112». Pero el número de la urgencia sanitaria **depende de la comunidad autónoma**:

| Comunidad | Número sanitario | Servicio | Fiabilidad del dato |
| --- | --- | --- | --- |
| Andalucía | 061 | Centro de Emergencias Sanitarias 061 | Alta (web oficial del SAS) |
| Cataluña | 061 | SEM 061 | Media (Wikipedia y blog 2025) |
| Galicia | 061 | Urxencias Sanitarias 061 | Media |
| Aragón | 061 | 061 Aragón | Baja (fuente de 2011) |
| Illes Balears | 061 | SAMU 061 | Baja (fuente de 2017) |
| Región de Murcia | 061 | 061 Murcia | Baja (fuente de 2011) |
| Cantabria | 061 | 061 Cantabria | Baja (fuente de 2010) |
| Comunidad de Madrid | 112 | SUMMA 112 (antes 061) | Alta (web oficial) |
| Asturias | 112 | SAMU Asturias | Alta (web oficial) |
| Resto, Ceuta y Melilla | 112 (probable) | Integrado en el 112 | Baja: no hay lista oficial única |

**Esta tabla no se puede publicar sin validar.** No existe una lista oficial única y actualizada, y varias fuentes tienen más de diez años. Hay que confirmarla con cada servicio de salud o con la autora.

En todas las comunidades, **el 112 siempre funciona**: si el sanitario es otro número, el 112 deriva la llamada.

### Cómo hacerlo respetando la privacidad

| Opción | Cómo funciona | Privacidad | Recomendación |
| --- | --- | --- | --- |
| **A. Selector manual** | «¿En qué comunidad estás?» con una lista. Se recuerda en el propio navegador. | Ningún dato sale del dispositivo, y no salta ningún aviso de permisos. | **Recomendada como base**: sencilla, rápida y sin riesgos. |
| **B. Botón «Detectar mi ubicación»** | Solo si la persona lo pulsa, el navegador pide permiso, obtiene las coordenadas y la propia web calcula en qué comunidad está, con un mapa de límites guardado en la web. | Las coordenadas **no se envían a ningún servidor**: se usan y se descartan en el dispositivo. | **Complemento opcional** de la A. |
| C. Detectar por la IP | Un servicio externo deduce la región por la conexión. | Envía la IP a un tercero, falla con datos móviles y VPN y obliga a añadir un aviso legal. | **Descartada.** |

Datos técnicos de la opción B:
- Los límites oficiales de las comunidades autónomas los publica el **Centro Nacional de Información Geográfica (CNIG)** en shapefile y GML. Hay que convertirlos y simplificarlos para que ocupen poco, y **revisar la licencia** en su ficha antes de usarlos.
- La API de geolocalización del navegador solo funciona en webs con HTTPS (GitHub Pages y Netlify lo son) y siempre pide permiso.
- La ubicación es un **dato personal** (art. 4 RGPD). Aunque no salga del dispositivo, hay que explicarlo en la política de privacidad y pedirla solo cuando la persona lo decide.

**Importante:** la geolocalización nunca debe retrasar la llamada. El botón de emergencias debe seguir llamando al instante, y la detección debe ser algo que la persona elige hacer antes, con calma, por ejemplo en «Prepara tu móvil».

## 3. Duda que hay que resolver: AML y el 061

- **Confirmado:** AML funciona en las llamadas al **112** desde móviles Android e iPhone, sin que el usuario haga nada, con 15–30 m de precisión, y está operativo en los 112 autonómicos (Protección Civil, 2021–2022).
- **No confirmado:** que AML se active al llamar al **061**. Ninguna fuente oficial lo menciona.
- **Por qué importa:** la web recomienda llamar al 061. Si AML solo funciona con el 112, una mujer que no pueda decir dónde está podría ser localizada mejor llamando al 112.

**Propuesta:** consultarlo con el 061 y el 112 de la comunidad de la autora antes de decidir qué número ofrece el botón principal, y si «Si no puedes hablar, llama al 112» debe ir más destacado.

## 4. Contenido que encaja en la Fase 2

- **Código Infarto.** Prácticamente todas las comunidades tienen una red «Código Infarto». Al llamar, la ambulancia activa el circuito y lleva a la paciente directamente a un hospital que puede hacer un cateterismo. Es un buen argumento para «llama, no vayas por tu cuenta». Hacen falta referencias validadas: registro ACI-SEC y RECALCAR de la Sociedad Española de Cardiología.
- **Accesibilidad de la llamada.** Información sobre 112 Accesible y el sistema por SMS para personas sordas, según la comunidad.

## 5. Decisiones que necesitamos de la autora

1. ¿La Fase 2 forma parte del TFG o es una mejora futura?
2. Validar la tabla de números por comunidad, o indicar a qué fuente oficial acudir.
3. Consultar con los servicios de emergencias si AML funciona con el 061, y decidir el número del botón principal.
4. ¿Selector manual solo (A) o selector más detección (A + B)?
5. ¿Incluimos la guía «Prepara tu móvil» y la sección sobre Código Infarto?

## 6. Estimación orientativa

| Bloque | Esfuerzo |
| --- | --- |
| Guía «Prepara tu móvil» y mensajes sobre AML | 1 día (más validación del contenido) |
| Selector manual de comunidad y número dinámico en toda la web | 1–2 días |
| Detección por ubicación sin enviar datos (mapa simplificado y cálculo en el navegador) | 2–3 días |
| Web instalable y que funciona sin conexión (PWA) | 1–2 días |
| Revisión de privacidad, accesibilidad y pruebas en móviles reales | 1–2 días |

## Fuentes

- Protección Civil: [Los 112 incorporan el sistema AML](https://www.proteccioncivil.es/-/los-112-incorporan-el-sistema-aml-que-permite-geolocalizar-con-precisi%C3%B3n-las-llamadas-realizadas-desde-un-tel%C3%A9fono-m%C3%B3vil) (2021) y [precisión máxima de 30 m](https://x.com/proteccioncivil/status/1573385164209926144)
- [112 Cantabria adopta AML](https://112.cantabria.es/noticias/112-cantabria-adopta-el-sistema-de-localizacion-movil-avanzada--aml-) · [112 Comunitat Valenciana](https://www.112cv.gva.es/es/inicio/-/asset_publisher/OriTjHiopH9w/content/el-sistema-de-geolocalizaci%C3%B3n-de-llamadas-del-1%C2%B71%C2%B72-comunitat-valenciana-identifica-la-ubicaci%C3%B3n-de-la-emergencia-con-una-precisi%C3%B3n-de-10-metros) · [Navarra](https://www.navarra.es/es/-/nota-prensa/precision-de-hasta-15-metros-en-la-geoposicion-de-llamadas-al-112-gracias-al-sistema-de-localizacion-movil-avanzada)
- [Bandaancha: AML envía la ubicación al llamar al 112](https://bandaancha.eu/articulos/112-empieza-utilizar-datos-localizacion-9921) · [Xataka: límites de AML sin SIM](https://www.xataka.com/seguridad/puedes-llamar-al-112-cobertura-tarjeta-sim-que-no-puedes-dar-hecho-que-sepan-donde-estas)
- [Google: Emergency Location Service](https://www.android.com/safety/emergency-help/emergency-location-service/) · [EENA: preguntas frecuentes sobre AML](https://eena.org/wp-content/uploads/2018_12_11_AML_faq-1.pdf)
- Números por comunidad: [Wikipedia: 061](https://es.wikipedia.org/wiki/061) · [Canal UGR: 112 y 061](https://canal.ugr.es/noticia/112-y-061-asi-funcionan-los-telefonos-de-emergencias-sanitarias/) · [SUMMA 112](https://www.comunidad.madrid/hospital/summa112/comunicacion/contacto) · [Emergencias 061 Andalucía](https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/emergencias061/ciudadania/atencion-a-la-ciudadania) · [SAMU Asturias](https://www.samuasturias.es/) · [Salvavidas (2025)](https://salvavidas.com/blog/a-que-numero-llamar-en-caso-de-emergencia-en-espana-guia-completa-actualizada-2025/)
- Apps: [My112 y 112 Accesible (112 Castilla-La Mancha)](https://112.castillalamancha.es/112/comunicacion/las-nuevas-aplicaciones-my-112-y-112-accesible-enviaran-al-1-1-2-la-ubicacion) · [Xataka Móvil: My112](https://www.xatakamovil.com/aplicaciones/ocupa-muy-poco-espacio-puede-ser-gran-ayuda-112-recomienda-instalar-esta-app-tu-movil)
- Emergencia SOS: [El Faro de Ceuta](https://elfarodeceuta.es/emergencia-sos-activa-ayuda-automatica-iphone-android/amp/) · [Moncloa.com](https://www.moncloa.com/2024/06/01/movil-llame-emergencia-2631930/)
- Geolocalización web: [MDN: Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) · [CNIG: divisiones administrativas](https://datos.gob.es/es/catalogo/e00125901-spaignllm) · [Atico34: geolocalización y RGPD](https://protecciondatos-lopd.com/empresas/geolocalizacion-normativa/)
- Código Infarto: [Registro ACI-SEC, diferencias regionales](https://produccioncientifica.usal.es/documentos/645d28b365ed332dc9f80b81?lang=de) · [Redacción Médica](https://www.redaccionmedica.com/secciones/cardiologia/la-escasez-de-sanitarios-lastra-la-plena-implantacion-del-codigo-infarto-1486)
