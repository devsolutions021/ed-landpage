import { useCallback, useState } from 'react';

export type ConsentStatus = 'pending' | 'accepted' | 'declined';

const STORAGE_KEY = 'edinho:consent:v1';

function readStored(): ConsentStatus {
  if (typeof window === 'undefined') return 'pending';
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === 'accepted' || value === 'declined' ? value : 'pending';
}

// Consentimento de cookies/rastreamento (LGPD), persistido no localStorage.
export function useCookieConsent() {
  const [status, setStatus] = useState<ConsentStatus>(readStored);

  const update = useCallback((next: ConsentStatus) => {
    setStatus(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ambientes sem localStorage disponível: mantém apenas em memória.
    }
  }, []);

  const accept = useCallback(() => update('accepted'), [update]);
  const decline = useCallback(() => update('declined'), [update]);

  return { status, accept, decline };
}
