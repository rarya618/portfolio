import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import Community from './components/Community';
import CommunityPage from './components/CommunityPage';
import Consulting from './components/Consulting';
import ConsultingPage from './components/ConsultingPage';
import About from './components/About';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route
        path="/"
        element={
          <main>
            <Helmet>
              <title>Russal Arya — Full-Stack &amp; Mobile Product Builder</title>
              <meta name="description" content="Sydney-based full-stack and mobile product builder. I design and engineer. Creator of TrackSense, GDG Check-In App, and more." />
              <link rel="canonical" href="https://russal.dev" />
              <meta property="og:title" content="Russal Arya — Full-Stack & Mobile Product Builder" />
              <meta property="og:description" content="Sydney-based full-stack and mobile product builder. I design and engineer. Creator of TrackSense, GDG Check-In App, and more." />
              <meta property="og:url" content="https://russal.dev" />
            </Helmet>
            <a href="#work" className="skip-link">skip to content</a>
            <Nav />
            <Hero />
            <Work />
            <Consulting />
            <Community />
            <About />
            <Footer />
          </main>
        }
      />
      <Route path="/project/:slug" element={<ProjectPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/consulting" element={<ConsultingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}
