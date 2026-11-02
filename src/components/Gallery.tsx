'use client';

import { galleryImages } from '@/data/travelData';
import type { LightboxState } from '@/types';

interface Props {
  onOpen: (state: Omit<LightboxState, 'isOpen'>) => void;
}

export default function Gallery({ onOpen }: Props) {
  return (
    <section className="gal" id="gallery">
      <div className="wrap">
        <div className="eyebrow r">Gallery</div>
        <h2 className="r">Moments, <em>framed.</em></h2>

        <div className="mas" id="mas">
          {galleryImages.map(img => (
            <button
              key={img.id}
              className="r"
              style={{ '--d': img.delay } as React.CSSProperties}
              aria-label={`Open photo: ${img.alt}`}
              onClick={() =>
                onOpen({ mediaSrc: img.src, mediaType: 'image', title: img.alt })
              }
            >
              <img src={img.src} loading="lazy" alt={img.alt} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

