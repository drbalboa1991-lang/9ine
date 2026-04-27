const icons = [
  { gif: '/assets/energy-icon.gif', label: ['Fast', 'Energy'] },
  { gif: '/assets/genders-icon.gif', label: ['For Him', '& Her'] },
  { gif: '/assets/chemistry-icon.gif', label: ['Clean', 'Formula'] },
  { gif: '/assets/usa-icon.gif', label: ['Made in', 'the USA'] },
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
                style={{ height: '320px', width: '100%', maxWidth: '320px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
