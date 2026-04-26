const cats = [
  '/assets/chews-for-both.gif',
  '/assets/chews-for-him.gif',
  '/assets/chews-for-her.gif',
  '/assets/swag-for-both.gif',
];

export default function Categories() {
  return (
    <section className="hp-categories py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center text-uppercase mb-4">
            <h2>
              Pick Your{' '}
              <span className="text-secondary">V</span>
              <span className="text-primary">i</span>
              <span className="text-warning">b</span>
              <span className="text-success">e</span>
            </h2>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-md-4 text-center">
          {cats.map((src, i) => (
            <div key={i} className="col mb-4">
              <a href="#shop">
                <img
                  src={src}
                  alt=""
                  style={{ width: '100%', aspectRatio: '425 / 718', objectFit: 'cover', display: 'block' }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
