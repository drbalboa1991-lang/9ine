import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import IconFeatures from './components/IconFeatures.jsx';
import FeatureImage from './components/FeatureImage.jsx';
import MostWanted from './components/MostWanted.jsx';
import WhySex9ine from './components/WhySex9ine.jsx';
import Categories from './components/Categories.jsx';
import Reviews from './components/Reviews.jsx';
import FAQ from './components/FAQ.jsx';
import Photostrip from './components/Photostrip.jsx';
import Footer from './components/Footer.jsx';
import ForHer from './components/ForHer.jsx';
import ForHim from './components/ForHim.jsx';
import { useScrollReveal } from './hooks/useScrollReveal.js';

function HomePage() {
  useScrollReveal();
  return (
    <>
      <Navbar />
      <main id="theme-main">
        <Hero />
        <div data-reveal data-reveal-delay="0"><IconFeatures /></div>
        <div data-reveal data-reveal-delay="0"><FeatureImage /></div>
        <div data-reveal data-reveal-delay="0"><MostWanted /></div>
        <div data-reveal data-reveal-delay="0"><WhySex9ine /></div>
        <div data-reveal data-reveal-delay="0"><Categories /></div>
        <div data-reveal data-reveal-delay="0"><Reviews /></div>
        <div data-reveal data-reveal-delay="0"><FAQ /></div>
        <div data-reveal data-reveal-delay="0"><Photostrip /></div>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-category/for-her" element={<ForHer />} />
      <Route path="/product-category/for-her/" element={<ForHer />} />
      <Route path="/product-category/for-him" element={<ForHim />} />
      <Route path="/product-category/for-him/" element={<ForHim />} />
    </Routes>
  );
}
