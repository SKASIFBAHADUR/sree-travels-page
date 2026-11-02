'use client';

import { useEffect, useRef } from 'react';
import type { LightboxState } from '@/types';

interface Props {
  state: LightboxState;
  onClose: () => void;
}

export default function Lightbox({ state, onClose }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocusRef = useRef<Element | null>(null);

  useEffect(() => {
    if (state.isOpen) {
      lastFocusRef.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = '';
      (lastFocusRef.current as HTMLElement | null)?.focus();
    }
  }, [state.isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      id="lb"
      className={`lb${state.isOpen ? ' on' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Media viewer"
      onClick={handleBackdropClick}
    >
      <button
        id="lc"
        ref={closeBtnRef}
        className="lb-close"
        aria-label="Close"
        onClick={onClose}
      >
        ×
      </button>

      <div id="lm">
        {state.isOpen && state.mediaType === 'video' && (
          <video
            src={state.mediaSrc}
            controls
            autoPlay
            playsInline
          />
        )}
        {state.isOpen && state.mediaType === 'image' && (
          <img src={state.mediaSrc} alt={state.title} />
        )}
      </div>

      <p id="lt" className="lb-title">{state.isOpen ? state.title : ''}</p>
    </div>
  );
}

