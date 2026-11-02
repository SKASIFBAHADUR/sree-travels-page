'use client';

import { videos } from '@/data/travelData';
import type { LightboxState } from '@/types';

interface Props {
  onOpen: (state: Omit<LightboxState, 'isOpen'>) => void;
}

export default function VideoShowcase({ onOpen }: Props) {
  return (
    <section className="vid" id="videos">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="eyebrow r">Trip films</div>
            <h2 className="r">Watch the <em>journeys</em> unfold.</h2>
          </div>
          <p className="r">Real films from Sree Travel Deals guests. Tap any reel to play.</p>
        </div>

        <div className="vg">
          {videos.map(v => (
            <button
              key={v.id}
              className="vc r"
              style={v.delay ? ({ '--d': v.delay } as React.CSSProperties) : undefined}
              onClick={() =>
                onOpen({ mediaSrc: v.src, mediaType: 'video', title: v.lightboxTitle || v.title })
              }
            >
              <img src={v.poster} loading="lazy" alt={v.alt} />
              <div className="pl" />
              <span>
                <b>{v.title}</b>
                {v.subtitle}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

