import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Nav />
            <Hero />
            <Work />
            <About />
            <Footer />
          </main>
        }
      />
      <Route path="/project/:slug" element={<ProjectPage />} />
    </Routes>
  );
}
