import * as si from 'simple-icons';

export interface BrandIcon {
  path: string;
  hex: string;
  title: string;
}

/** Look up a simple-icons icon by slug (e.g. "cloudflareworkers"). Returns null if unavailable. */
export function getBrandIcon(slug: string | undefined): BrandIcon | null {
  if (!slug) return null;
  const key = 'si' + slug.charAt(0).toUpperCase() + slug.slice(1);
  const icon = (si as Record<string, unknown>)[key] as
    | { path: string; hex: string; title: string }
    | undefined;
  if (!icon || typeof icon.path !== 'string') {
    console.warn(`[icons] no simple-icons entry for slug "${slug}" (key ${key}) — using fallback`);
    return null;
  }
  return { path: icon.path, hex: `#${icon.hex}`, title: icon.title };
}
