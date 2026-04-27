const icons = [
  { gif: '/assets/energy-icon.gif', label: ['Fast', 'Energy'] },
  { gif: '/assets/usa-icon.gif', label: ['Made in', 'the USA'] },
  { gif: '/assets/chemistry-icon.gif', label: ['Clean', 'Formula'] },
  { gif: '/assets/genders-icon.gif', label: ['For Him', '& Her'] },
];

export default function IconFeatures() {
  return (
    <section className="hp-icon-features py-5">
      <div className="container overflow-hidden">
        <div className="row g-5 row-cols-2 row-cols-lg-4 text-center text-uppercase">
          {icons.map((i, idx) => (
            <div key={idx} className="hp-icon col">
              <img
                src={i.gif}
                alt={i.label.join(' ')}
                style={{ width: '240px', height: '240px', objectFit: 'cover', borderRadius: '1.75rem', display: 'block', margin: '0 auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
