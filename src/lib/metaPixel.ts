import { META_PIXEL_ID } from '@/config/analytics';

// Tipagem mínima do objeto `fbq` injetado pelo Meta Pixel.
type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  push: Fbq;
  queue: unknown[];
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

// Injeta o script oficial do Meta Pixel (equivalente ao snippet do Facebook).
function loadPixelScript() {
  if (window.fbq) return;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue.push(args);
    }
  } as unknown as Fbq;

  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];

  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode?.insertBefore(script, firstScript);
}

// Inicializa o pixel e registra o primeiro PageView. Idempotente.
export function initMetaPixel() {
  if (typeof window === 'undefined' || !META_PIXEL_ID) return;
  loadPixelScript();
  window.fbq?.('init', META_PIXEL_ID);
  window.fbq?.('track', 'PageView');
}

// Dispara um PageView — usar em navegações SPA (troca de rota).
export function trackPageView() {
  window.fbq?.('track', 'PageView');
}
