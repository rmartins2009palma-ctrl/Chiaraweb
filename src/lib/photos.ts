import type { ImageMetadata } from 'astro';

/** Fotos de src/assets/fotos/, indexadas por nombre de archivo sin extensión. */
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

const byName = new Map(
  Object.entries(files).map(([path, mod]) => [path.replace(/^.*\/|\.[^.]+$/g, ''), mod.default]),
);

export function getPhoto(name: string): ImageMetadata | undefined {
  return byName.get(name);
}

export function hasAnyPhoto(names: string[]): boolean {
  return names.some((n) => byName.has(n));
}
