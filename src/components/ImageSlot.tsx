import { SLOT_IMAGES } from '@/lib/slot-images';

/**
 * Static port of the design's <image-slot>.
 *
 * The design left every slot empty (a dashed ring + caption). Drop real photos
 * in by adding `slot id -> /images/…` entries to src/lib/slot-images.ts.
 */
export default function ImageSlot({ id, placeholder }: { id: string; placeholder: string }) {
  const src = SLOT_IMAGES[id];

  if (src) {
    return (
      <div className="slot slot-filled">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={placeholder} />
      </div>
    );
  }

  return (
    <div className="slot">
      <div className="slot-empty">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <div className="cap">{placeholder}</div>
      </div>
      <div className="slot-ring" />
    </div>
  );
}
