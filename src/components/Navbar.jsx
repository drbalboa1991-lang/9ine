export default function Navbar() {
  return (
    <div id="wrapper-navbar">
      <nav data-bs-theme="dark" className="navbar navbar-expand-lg bg-dark" aria-label="Main Navigation">
        <div className="container">
          <div className="navbar-inner d-flex justify-content-between align-items-center w-100">
            <div id="logo-tagline-wrap">
              <a href="/" className="custom-logo-link" rel="home">
                <img
                  src="/assets/sex9ine-logo.png"
                  className="custom-logo"
                  alt="Sex9ine by 6ix9ine"
                  width="448"
                  height="192"
                />
              </a>
            </div>
            <nav className="desktop-site-nav d-none d-md-block">
              <ul className="desktop-nav-links text-uppercase">
                <li><a href="#shop">Shop</a></li>
                <li><a href="#for-him" className="text-primary">For Him</a></li>
                <li><a href="#for-her" className="text-secondary">For Her</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
}
