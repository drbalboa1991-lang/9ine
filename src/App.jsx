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

function HomePage() {
  return (
    <>
      <Navbar />
      <main id="theme-main">
        <Hero />
        <IconFeatures />
        <FeatureImage />
        <MostWanted />
        <WhySex9ine />
        <Categories />
        <Reviews />
        <FAQ />
        <Photostrip />
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
    </Routes>
  );
}
