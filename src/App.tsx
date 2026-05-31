import { Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route
        path="/"
        element={
          <main>
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
    </Routes>
    </>
  );
}
