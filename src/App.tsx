import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import Community from './components/Community';
import CommunityPage from './components/CommunityPage';
import ConsultingPage from './components/ConsultingPage';
import SpeakingPage from './components/SpeakingPage';
import About from './components/About';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <div key={pathname} className="page">
      <Routes>
      <Route
        path="/"
        element={
          <main>
            <Helmet>
              <title>Russal Arya — Software Engineer</title>
              <meta name="description" content="Sydney-based software engineer. I design and build apps for iOS and the web. Creator of TrackSense, Checkpad, and more." />
              <link rel="canonical" href="https://russal.dev" />
              <meta property="og:title" content="Russal Arya — Software Engineer" />
              <meta property="og:description" content="Sydney-based software engineer. I design and build apps for iOS and the web. Creator of TrackSense, Checkpad, and more." />
              <meta property="og:url" content="https://russal.dev" />
            </Helmet>
            <a href="#work" className="skip-link">skip to content</a>
            <Nav />
            <Hero />
            <Work />
            <About />
            <Community />
            <Footer />
          </main>
        }
      />
      <Route path="/project/:slug" element={<ProjectPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/speaking" element={<SpeakingPage />} />
      <Route path="/consulting" element={<ConsultingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
      </div>
    </>
  );
}
