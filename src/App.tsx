import { useMode, ModeProvider } from './components/ModeContext';
import ModeToggle from './components/ModeToggle';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';

function PortfolioInner() {
  const { isDesigner } = useMode();

  return (
    <div
      className="min-h-screen transition-colors duration-700 relative"
      style={{
        background: isDesigner ? '#f5f0e8' : '#080808',
        color: isDesigner ? '#1a1714' : '#e8e4db',
      }}
    >
      {/* Noise overlay — engineer mode only */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
        style={{
          opacity: isDesigner ? 0 : 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      <div className="relative z-10">
        <ModeToggle />

        <main style={{ paddingTop: '52px' }}>
          <Hero />
          <Marquee />
          <Work />
          <About />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ModeProvider>
      <PortfolioInner />
    </ModeProvider>
  );
}
