import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/metaPixel';

// Dispara PageView do Meta Pixel a cada troca de rota (SPA),
// ignorando o primeiro render — esse já é rastreado em initMetaPixel().
export function usePageTracking() {
  const { pathname } = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    trackPageView();
  }, [pathname]);
}
