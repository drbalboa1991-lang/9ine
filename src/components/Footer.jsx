export default function Footer() {
  return (
    <div className="wrapper py-3" id="wrapper-footer-colophon">
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center">
            <footer className="site-footer">
              <div className="site-info small">
                © {new Date().getFullYear()} Sex9ine. All rights reserved.
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
