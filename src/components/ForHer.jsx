import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const products = [
  {
    img: '/assets/Sex9ine_1TpkHERChew-300x360.png',
    name: 'Chews For Her (1ct)',
    price: '$9.99',
    href: '#shop',
  },
  {
    img: '/assets/Sex9ine_4TpkChewHER-300x360.png',
    name: 'Chews For Her (4ct)',
    price: '$29.99',
    href: '#shop',
  },
  {
    img: '/assets/Sex9ineGummiesUnitHER-300x360.png',
    name: 'Gummies For Her (2ct)',
    price: '$18.99',
    href: '#shop',
  },
  {
    img: '/assets/69-royal-honey-for-her-300x360.png',
    name: '69 Royal Honey For Her',
    price: '$9.99',
    href: '#shop',
  },
];

export default function ForHer() {
  return (
    <>
      <Navbar />
      <main id="theme-main">

        {/* Hero */}
        <section className="mb-5">
          <div className="position-relative" style={{ borderRadius: '0 0 2rem 2rem', overflow: 'hidden' }}>
            <img
              src="/assets/for-her-hero.gif"
              alt="Sex9ine For Her"
              style={{ width: '100%', display: 'block', maxHeight: '85vh', objectFit: 'cover', objectPosition: 'center top' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)',
              padding: '2rem 2rem 1.5rem',
            }}>
              <nav style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', marginBottom: '0.5rem' }}>
                <a href="/" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Home</a>
                {' / '}Sex9ine For Her
              </nav>
              <h1 className="text-uppercase" style={{ fontFamily: 'Chewy, cursive', color: '#fff', fontSize: 'clamp(2.2rem,5vw,4.5rem)', lineHeight: 1.05, marginBottom: '0.4rem' }}>
                Sex9ine <span className="text-secondary">For Her</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem,1.5vw,1.3rem)', margin: 0 }}>
                Designed for her pleasure — enhance mood, libido &amp; intimacy.
              </p>
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section className="py-5">
          <div className="container">
            <div className="row mb-4">
              <div className="col-12 text-center">
                <h2 className="text-secondary text-uppercase">Shop For Her</h2>
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
                    <p className="text-secondary fw-bold" style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{p.price}</p>
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
