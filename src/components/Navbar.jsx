import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div id="wrapper-navbar">
      <nav data-bs-theme="dark" className="navbar navbar-expand-lg bg-dark" aria-label="Main Navigation">
        <div className="container">
          <div className="navbar-inner d-flex justify-content-between align-items-center w-100">
            <div id="logo-tagline-wrap">
              <Link to="/" className="custom-logo-link" rel="home" onClick={() => setOpen(false)}>
                <img
                  src="/assets/sex9ine-logo.png"
                  className="custom-logo"
                  alt="Sex9ine by 6ix9ine"
                  width="448"
                  height="192"
                />
              </Link>
            </div>

            {/* Desktop nav */}
            <nav className="desktop-site-nav d-none d-md-block">
              <ul className="desktop-nav-links text-uppercase">
                <li><a href="#shop">Shop</a></li>
                <li><Link to="/product-category/for-him" className="text-primary">For Him</Link></li>
                <li><Link to="/product-category/for-her" className="text-secondary">For Her</Link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>

            {/* Mobile burger */}
            <button
              className="d-md-none"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
            >
              <span style={{ display: 'block', width: 26, height: 2, background: '#fff', marginBottom: 6 }} />
              <span style={{ display: 'block', width: 26, height: 2, background: '#fff', marginBottom: 6 }} />
              <span style={{ display: 'block', width: 26, height: 2, background: '#fff' }} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="d-md-none bg-dark w-100" style={{ borderTop: '1px solid #333' }}>
            <ul className="list-unstyled text-uppercase text-center py-3 mb-0" style={{ fontSize: '1.1rem', lineHeight: '2.5rem' }}>
              <li><a href="#shop" style={{ color: '#fff', textDecoration: 'none' }} onClick={() => setOpen(false)}>Shop</a></li>
              <li><Link to="/product-category/for-him" className="text-primary" style={{ textDecoration: 'none' }} onClick={() => setOpen(false)}>For Him</Link></li>
              <li><Link to="/product-category/for-her" className="text-secondary" style={{ textDecoration: 'none' }} onClick={() => setOpen(false)}>For Her</Link></li>
              <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }} onClick={() => setOpen(false)}>About</a></li>
              <li><a href="#faq" style={{ color: '#fff', textDecoration: 'none' }} onClick={() => setOpen(false)}>FAQ</a></li>
              <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }} onClick={() => setOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
