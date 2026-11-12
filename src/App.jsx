import { Suspense, lazy, useEffect } from 'react';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Navbar from './components/layout/Navbar';
import FloatingContactButtons from './components/layout/FloatingContactButtons';
import ScrollToTop from './components/common/ScrollToTop';
import SEOHead from './components/seo/SEOHead';
import Hero from './components/sections/Hero';
import TrustHighlights from './components/sections/TrustHighlights';
import { SECTION_IDS } from './data/navigation';

const loadAbout = () => import('./components/sections/About');
const loadServices = () => import('./components/sections/Services');
const loadWhyChooseUs = () => import('./components/sections/WhyChooseUs');
const loadProcess = () => import('./components/sections/Process');
const loadXeroxServices = () => import('./components/sections/XeroxServices');
const loadFAQ = () => import('./components/sections/FAQ');
const loadContact = () => import('./components/sections/Contact');
const loadFooter = () => import('./components/layout/Footer');

const About = lazy(loadAbout);
const Services = lazy(loadServices);
const WhyChooseUs = lazy(loadWhyChooseUs);
const Process = lazy(loadProcess);
const XeroxServices = lazy(loadXeroxServices);
const FAQ = lazy(loadFAQ);
const Contact = lazy(loadContact);
const Footer = lazy(loadFooter);

function SectionSkeleton({ id, surface = 'white', minHeight = 'min-h-[22rem]' }) {
  const bgClass = surface === 'light' ? 'bg-surface-light' : 'bg-white';
  return (
    <section
      id={id}
      aria-busy="true"
      className={`${bgClass} ${minHeight} section-padding`}
    />
  );
}

export default function App() {
  useEffect(() => {
    const prefetchBelowFold = () => {
      loadAbout();
      loadServices();
      loadWhyChooseUs();
      loadProcess();
      loadXeroxServices();
      loadFAQ();
      loadContact();
      loadFooter();
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(prefetchBelowFold, { timeout: 2000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timerId = window.setTimeout(prefetchBelowFold, 1200);
    return () => window.clearTimeout(timerId);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <SEOHead />

        <div className="flex min-h-screen flex-col bg-white text-ink">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-lic-yellow focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-900"
          >
            Skip to main content
          </a>

          <AnnouncementBar />
          <Navbar />

          <main id="main-content" className="flex-1">
            <Hero />
            <TrustHighlights />

            <Suspense fallback={<SectionSkeleton id={SECTION_IDS.ABOUT} surface="white" />}>
              <About />
            </Suspense>

            <Suspense fallback={<SectionSkeleton id={SECTION_IDS.SERVICES} surface="light" minHeight="min-h-[28rem]" />}>
              <Services />
            </Suspense>

            <Suspense fallback={<SectionSkeleton id={SECTION_IDS.WHY_CHOOSE_US} surface="white" />}>
              <WhyChooseUs />
            </Suspense>

            <Suspense fallback={<SectionSkeleton id={SECTION_IDS.PROCESS} surface="light" />}>
              <Process />
            </Suspense>

            <Suspense fallback={<SectionSkeleton id={SECTION_IDS.XEROX} surface="white" minHeight="min-h-[18rem]" />}>
              <XeroxServices />
            </Suspense>

            <Suspense fallback={<SectionSkeleton id={SECTION_IDS.FAQ} surface="light" minHeight="min-h-[26rem]" />}>
              <FAQ />
            </Suspense>

            <Suspense fallback={<SectionSkeleton id={SECTION_IDS.CONTACT} surface="white" minHeight="min-h-[32rem]" />}>
              <Contact />
            </Suspense>
          </main>

          <Suspense fallback={<div className="h-48 bg-navy-950" aria-hidden="true" />}>
            <Footer />
          </Suspense>

          <FloatingContactButtons />
          <ScrollToTop />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
