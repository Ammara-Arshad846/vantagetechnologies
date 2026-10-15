import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageTransition } from './components/layout/PageTransition';

import { HomePage } from './pages/HomePage';
import { AiAssistantPage } from './pages/AiAssistantPage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Subpage wrapper with standard top navbar
const SubpageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div className="w-full border-b border-white/20 bg-black/80 backdrop-blur-md sticky top-0 z-40 px-5 sm:px-6 md:px-10 lg:px-14">
        <Navbar />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-black text-white flex flex-col justify-between">
              <main className="flex-1">
                <HomePage />
              </main>
              <Footer />
            </div>
          }
        />
        <Route
          path="/ai-assistant"
          element={
            <SubpageWrapper>
              <AiAssistantPage />
            </SubpageWrapper>
          }
        />
        <Route
          path="/services"
          element={
            <SubpageWrapper>
              <ServicesPage />
            </SubpageWrapper>
          }
        />
        <Route
          path="/work"
          element={
            <SubpageWrapper>
              <WorkPage />
            </SubpageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <SubpageWrapper>
              <AboutPage />
            </SubpageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <SubpageWrapper>
              <ContactPage />
            </SubpageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-black text-white flex flex-col justify-between">
              <main className="flex-1">
                <HomePage />
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </PageTransition>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white font-sans antialiased">
        <ScrollToTop />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
