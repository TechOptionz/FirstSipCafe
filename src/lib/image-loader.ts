import { IMAGE_WIDTHS } from './image-manifest';

/**
 * next/image loader that serves the pre-generated static sizes written by
 * scripts/optimize-images.mjs instead of encoding images at request time.
 * Picks the smallest available width that covers the requested one.
 */
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  const widths = IMAGE_WIDTHS[src];
  if (!widths) return src;
  const max = widths[widths.length - 1];
  const w = widths.find((x) => x >= width) ?? max;
  if (w === max) return src;
  return src.replace(/\.[a-z]+$/i, `-${w}.webp`);
}
