import { Route, Routes, useLocation } from 'react-router-dom';
import { CookieConsent, FloatingCta, Footer, Navbar, ScrollToTop } from '@/components/layout';
import { HomePage } from '@/pages/home/HomePage';
import { PetitionPage } from '@/pages/petition/PetitionPage';
import { usePageTracking } from '@/hooks/usePageTracking';

export function App() {
  const { pathname } = useLocation();
  const isPetition = pathname.startsWith('/abaixo-assinado');

  usePageTracking();

  return (
    <>
      <ScrollToTop />
      {!isPetition && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/abaixo-assinado" element={<PetitionPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
      {!isPetition && <FloatingCta />}
      <CookieConsent />
    </>
  );
}
