# Prompts para las fotos (Gemini)

Los prompts están en inglés: los generadores de imagen suelen seguirlos con más precisión y de forma más coherente entre fotos. Si alguna sale rara, se puede repetir pidiendo en español «hazla más natural» o «sin dramatismo».

## Cómo usarlos

1. Pega **siempre el bloque de estilo común** al final de cada prompt. Así todas las fotos parecen de la misma sesión.
2. Genera 3 o 4 versiones de cada una y quédate con la más natural. Revisa las manos: es donde más falla la IA.
3. Descárgalas en la mejor calidad (mínimo 1600 px de ancho) y **ponles exactamente el nombre de archivo indicado**.
4. Déjalas en `src/assets/fotos/` (o envíamelas). La web las detecta sola. Mientras falte alguna, se ve un recuadro «Foto pendiente».

## Bloque de estilo común (pegar al final de cada prompt)

```
Style: candid documentary photograph for a public health campaign, as if taken by a photojournalist. Natural soft daylight, warm neutral palette (cream, sand, muted plum accents), realistic skin texture with no retouching, 35mm lens, shallow depth of field, eye-level framing. Ordinary contemporary Spanish home or city setting, lived-in and uncluttered. The woman looks real and relatable, not a model. Mood: calm and serious, never dramatic or frightening. Leave some empty space around the subject.
Avoid: dramatic chest clutching, hospitals, ambulances, stethoscopes, heart symbols, pink color schemes, glossy stock-photo look, text, logos, watermarks, legible screens, extra or distorted fingers.
```

---

## Página «Síntomas» (formato 4:3, horizontal)

### 1. `sintoma-pecho.jpg`: presión en el pecho
```
Aspect ratio 4:3 landscape. A Spanish woman in her mid-50s sitting at her kitchen table in the morning, pausing mid-task with her palm resting flat on the center of her chest, eyes slightly unfocused, a subtle expression of discomfort and uncertainty, as if she is noticing a heavy pressure she doesn't recognise. A cup of coffee and a half-written shopping list in front of her.
```

### 2. `sintoma-irradiado.jpg`: dolor en espalda, cuello, mandíbula o brazos
```
Aspect ratio 4:3 landscape. A woman around 60 with short grey hair, standing by a living-room window, gently pressing her fingertips against the left side of her jaw while her other hand rubs her left upper arm. Her shoulders are slightly raised with tension. She looks puzzled rather than in agony, as if it feels like a toothache or a stiff muscle.
```

### 3. `sintoma-falta-aire.jpg`: falta de aire
```
Aspect ratio 4:3 landscape. A woman in her early 50s with curly dark hair, in a residential stairwell with a shopping bag, stopped halfway up the stairs, one hand on the banister, lips slightly parted, breathing with visible effort. Soft light from a stairwell window. The moment feels quiet and ordinary, but something is clearly not right.
```

### 4. `sintoma-estomago.jpg`: náuseas o malestar de estómago
```
Aspect ratio 4:3 landscape. A woman in her mid-60s sitting on the edge of a sofa, leaning slightly forward with one hand on her upper stomach just below the ribs, a glass of water on the coffee table beside her. Her face is a little pale and she looks queasy, as if she thinks it is indigestion.
```

### 5. `sintoma-sudor-frio.jpg`: sudor frío
```
Aspect ratio 4:3 landscape. Close-medium shot of a woman in her mid-50s at an office desk, with fine beads of sweat on her forehead and upper lip, her skin slightly pale and clammy, dabbing her forehead with a paper tissue. The office is cool and calm; nobody else around her is warm, which makes the sweating look out of place. Laptop slightly out of focus.
```

### 6. `sintoma-cansancio.jpg`: cansancio intenso y repentino
```
Aspect ratio 4:3 landscape. A woman around 58 sitting on the edge of an unmade bed next to a basket of folded laundry, shoulders dropped, eyes closed, one hand on her forehead, completely drained by a simple household task. Late-afternoon light through a linen curtain.
```

### 7. `sintoma-mareo.jpg`: mareo o sensación de desmayo
```
Aspect ratio 4:3 landscape. A woman in her early 60s in a neighbourhood grocery shop aisle, steadying herself with one hand on a shelf, the other hand near her temple, eyes half closed, slightly off balance. The background is softly blurred to suggest dizziness, but the woman stays sharp. Product packaging has no legible text.
```

### 8. `senales-no-esperas.jpg`: «Señales que no esperas» (formato 4:5, vertical)
```
Aspect ratio 4:5 portrait. A woman in her late 50s lying awake in bed at night, on her side, eyes open, looking at the ceiling, lit only by a small warm bedside lamp. The bed beside her is empty and the room is quiet. She looks tired and uneasy, as if she has slept badly for several nights without knowing why.
```

---

## Página «Qué hacer» (formato 1:1, cuadrado)

Pasos sencillos, casi sin personas: se entienden mejor y la IA falla menos.

### 9. `paso-sentarse.jpg`: siéntate
```
Aspect ratio 1:1 square. A woman in her 60s sitting down carefully in a comfortable armchair, back supported, both feet on the floor, one hand on the armrest, taking a slow breath. Calm, controlled, safe. Shot from a slight distance, face partly turned away.
```

### 10. `paso-no-conducir.jpg`: no conduzcas
```
Aspect ratio 1:1 square. Still life: a set of car keys left on a wooden hallway table next to a handbag, with the front door softly out of focus in the background. No people. Clean, quiet composition that suggests "leave the keys, don't drive".
```

### 11. `paso-llamar.jpg`: llama
```
Aspect ratio 1:1 square. Close-up of a woman's hand holding a smartphone to her ear, the other hand resting on her knee, sitting on a sofa. Only the lower half of her face is visible, mouth speaking calmly. The phone screen is not visible.
```

### 12. `paso-abrir-puerta.jpg`: abre la puerta
```
Aspect ratio 1:1 square. A front door of a Spanish apartment left slightly ajar, a hand releasing the door handle, warm light coming from the landing outside. No face visible. It should feel like making it easy for help to come in.
```

### 13. `paso-medicacion.jpg`: ten a mano tu medicación
```
Aspect ratio 1:1 square. Still life on a kitchen counter: a few unbranded medicine boxes and a blister pack, a pair of reading glasses and a small handwritten list placed together in a clear pouch, ready to take. No legible text on any label. Soft daylight.
```

---

## Página «Testimonios» (formato 1:1, cuadrado). Sin caras

Los testimonios son inventados. Por eso es mejor **no poner caras realistas** junto a ellos, para no dar a entender que son personas reales. Proponemos detalles que evocan a cada mujer:

### 14. `testimonio-1.jpg`
```
Aspect ratio 1:1 square. Close-up of a mature woman's hands wrapped around a cup of tea on a windowsill, morning light, a wedding ring and a simple watch. Face not visible.
```

### 15. `testimonio-2.jpg`
```
Aspect ratio 1:1 square. A woman in her 50s walking alone along a seaside promenade in Spain, seen from behind, light jacket, early morning, calm sea. Face not visible.
```

### 16. `testimonio-3.jpg`
```
Aspect ratio 1:1 square. Still life: reading glasses resting on an open notebook with handwritten notes (not legible) on a kitchen table, next to a pen and a small plant. No people.
```

### 17. `testimonio-4.jpg`
```
Aspect ratio 1:1 square. Two women in their 60s walking arm in arm in a sunny city park, seen from behind, relaxed and close, autumn leaves. Faces not visible.
```
