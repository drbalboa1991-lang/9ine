const icons = [
  { type: 'video', src: '/assets/energy-icon.mp4', poster: '/assets/energy-icon.png', cls: 'text-warning', label: ['Fast', 'Energy'] },
  { type: 'video', src: '/assets/usa-icon.mp4', poster: '/assets/usa-icon.png', cls: 'text-primary', label: ['Made in', 'the USA'] },
  { type: 'video', src: '/assets/chemistry-icon.mp4', poster: '/assets/chemistry-icon.png', cls: 'text-success', label: ['Clean', 'Formula'] },
  { type: 'image', src: '/assets/genders-icon.png', cls: 'text-secondary', label: ['For Him', '& Her'] },
];

export default function IconFeatures() {
  return (
    <section className="hp-icon-features py-5">
      <div className="container overflow-hidden">
        <div className="row g-5 row-cols-2 row-cols-lg-4 text-center text-uppercase">
          {icons.map((i, idx) => (
            <div key={idx} className="hp-icon col">
              {i.type === 'video' ? (
                <video
                  src={i.src}
                  poster={i.poster}
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  style={{ height: '175px', width: 'auto', marginBottom: '1.5rem', objectFit: 'contain', cursor: 'pointer' }}
                />
              ) : (
                <img src={i.src} alt="" />
              )}
              <h2 className={i.cls}>
                {i.label[0]}<br />{i.label[1]}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
