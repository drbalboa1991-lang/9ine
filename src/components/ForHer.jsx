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
          <div className="container">
            <div className="row">
              <div className="col-12 position-relative px-0">
                <div className="hp-hero pt-lg-5 px-4 px-lg-5 bg-secondary position-relative">
                  <div className="hp-hero-col-1 pt-5 pb-3 pb-lg-5 text-center text-lg-start">
                    <nav className="mb-2" aria-label="Breadcrumb" style={{ fontSize: '0.9rem', opacity: 0.8, color: '#fff' }}>
                      <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
                      {' / '}
                      Sex9ine For Her
                    </nav>
                    <h1 className="text-black text-uppercase rfs-37">
                      <span className="hp-hero-heading-small d-block rfs-18">Sex9ine</span>
                      For <span className="text-white">Her</span>
                    </h1>
                    <p className="text-black rfs-9 fw-medium">
                      Designed for her pleasure — enhance mood, libido &amp; intimacy.
                    </p>
                  </div>
                  <div className="hp-hero-col-2">
                    <img src="/assets/for-her-hero.gif" alt="Sex9ine For Her" />
                  </div>
                </div>
              </div>
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
