import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Target from './components/Target';
import Protocol from './components/Protocol';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Global SVG Noise Filter */}
      <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
      </svg>

      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Features />
        <Philosophy />
        <Target />
        <Protocol />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

export default App;
