import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { initMetaPixel } from '@/lib/metaPixel';

// Banner de consentimento (LGPD). O Meta Pixel só é carregado após o aceite.
export function CookieConsent() {
  const { status, accept, decline } = useCookieConsent();

  useEffect(() => {
    if (status === 'accepted') initMetaPixel();
  }, [status]);

  return (
    <AnimatePresence>
      {status === 'pending' && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Aviso de privacidade"
          className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-md"
        >
          <div className="rounded-2xl border border-white/10 bg-ink/95 p-5 shadow-card backdrop-blur-lg">
            <p className="text-sm leading-relaxed text-white/75">
              Usamos cookies para medir o alcance da campanha e melhorar sua experiência. Ao aceitar, você concorda com o
              uso de dados de navegação, conforme a LGPD.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={accept}
                className="rounded-full bg-gold-gradient px-5 py-2.5 text-xs font-extrabold uppercase tracking-wide text-ink shadow-gold transition-transform hover:-translate-y-0.5"
              >
                Aceitar
              </button>
              <button
                type="button"
                onClick={decline}
                className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white/75 transition-colors hover:text-white"
              >
                Recusar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
