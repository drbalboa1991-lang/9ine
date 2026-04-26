const icons = [
  { src: '/assets/energy-icon.png', cls: 'text-warning', label: ['Fast', 'Energy'] },
  { src: '/assets/usa-icon.png', cls: 'text-primary', label: ['Made in', 'the USA'] },
  { src: '/assets/chemistry-icon.png', cls: 'text-success', label: ['Clean', 'Formula'] },
  { src: '/assets/genders-icon.png', cls: 'text-secondary', label: ['For Him', '& Her'] },
];

export default function IconFeatures() {
  return (
    <section className="hp-icon-features py-5">
      <div className="container overflow-hidden">
        <div className="row g-5 row-cols-2 row-cols-lg-4 text-center text-uppercase">
          {icons.map((i, idx) => (
            <div key={idx} className="hp-icon col">
              <img src={i.src} alt="" />
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
