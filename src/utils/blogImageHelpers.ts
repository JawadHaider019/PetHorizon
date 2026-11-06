import blogImagesManifest from '../data/blogImagesManifest.json';

export interface ImageMeta {
  src: string;
  srcSet?: string;
  width?: number;
  height?: number;
  alt: string;
  caption?: string;
}

interface ManifestEntry {
  hero: ImageMeta | null;
  sections: Record<string, ImageMeta>;
}

const manifest = blogImagesManifest as Record<string, ManifestEntry>;

export function getBlogHeroImage(slug: string, fallbackUrl?: string): ImageMeta {
  const entry = manifest[slug];
  if (entry?.hero) {
    return entry.hero;
  }
  return {
    src: fallbackUrl || '/3d-pets-hero.webp',
    width: 1200,
    height: 750,
    alt: 'PetHorizon veterinary care guide illustration'
  };
}

export function getBlogSectionImage(slug: string, sectionId: string, fallbackUrl?: string): ImageMeta {
  const entry = manifest[slug];
  const sectionMeta = entry?.sections?.[sectionId];
  if (sectionMeta) {
    return sectionMeta;
  }
  return {
    src: fallbackUrl || '/cute-3d-pets.webp',
    width: 800,
    height: 500,
    alt: 'Veterinary care explanation figure'
  };
}

