const cats = [
  { type: 'video', src: '/assets/chews-for-both.mp4', poster: '/assets/chews-for-both.png' },
  { type: 'video', src: '/assets/chews-for-him.mp4', poster: '/assets/chews-for-him.png' },
  { type: 'image', src: '/assets/chews-for-her.png' },
  { type: 'image', src: '/assets/Swag-for-Both-Category.png' },
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
          {cats.map((c, i) => (
            <div key={i} className="col mb-4">
              <a href="#shop">
                {c.type === 'video' ? (
                  <video
                    src={c.src}
                    poster={c.poster}
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    onClick={(e) => e.preventDefault()}
                    style={{ width: '100%', aspectRatio: '425 / 718', height: 'auto', objectFit: 'cover', display: 'block', cursor: 'pointer' }}
                  />
                ) : (
                  <img src={c.src} alt="" />
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
