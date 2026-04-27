import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const products = [
  {
    img: '/assets/Sex9ine_1TpkChew_549d8d48-3b15-419a-a0da-efc93862d23c-300x360.png',
    name: 'Chews For Him (1ct)',
    price: '$9.99',
    href: '#shop',
  },
  {
    img: '/assets/Sex9ine_4TpkChewHIM-300x360.png',
    name: 'Chews For Him (4ct)',
    price: '$29.99',
    href: '#shop',
  },
  {
    img: '/assets/Sex9ineGummiesUnitHIM-300x360.png',
    name: 'Gummies For Him (2ct)',
    price: '$18.99',
    href: '#shop',
  },
  {
    img: '/assets/69-royal-honey-for-him-300x360.png',
    name: '69 Royal Honey For Him',
    price: '$9.99',
    href: '#shop',
  },
];

export default function ForHim() {
  return (
    <>
      <Navbar />
      <main id="theme-main">

        {/* Hero */}
        <section className="mb-5">
          <div style={{ borderRadius: '0 0 2rem 2rem', overflow: 'hidden' }}>
            <video
              src="/assets/for-him-hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', display: 'block', maxHeight: '85vh', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </section>

        {/* Products grid */}
        <section className="py-5">
          <div className="container">
            <div className="row mb-4">
              <div className="col-12 text-center">
                <h2 className="text-primary text-uppercase">Shop For Him</h2>
              </div>
            </div>
            <div className="row row-cols-2 row-cols-md-4 g-4">
              {products.map((p, i) => (
                <div key={i} className="col">
                  <div className="product-card text-center">
                    <a href={p.href}>
                      <img
                        src={p.img}
                        alt={p.name}
                        style={{ width: '100%', height: 'auto', borderRadius: '0.75rem', marginBottom: '0.75rem', transition: 'transform 0.3s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </a>
                    <h3 style={{ fontFamily: 'Chewy, cursive', fontSize: '1.2rem', color: '#fff', marginBottom: '0.25rem' }}>{p.name}</h3>
                    <p className="text-primary fw-bold" style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{p.price}</p>
                    <a href={p.href} className="black-69-btn" style={{ width: '100%', maxWidth: '220px', fontSize: '1.1rem', padding: '12px 20px' }}>
                      Add to Cart
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
