const items = [
  '/assets/hp-gummies-for-him.png',
  '/assets/hp-gummies-for-her.png',
  '/assets/hp-gummies-for-him.png',
  '/assets/hp-honey-for-her.png',
];

export default function MostWanted() {
  return (
    <section className="py-5">
      <div className="container overflow-hidden">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="text-primary">FUEL YOUR FANTASIES</h2>
            <h3 className="rfs-11">
              Shop Sex9ine's <span className="text-success">Most Wanted</span> List
            </h3>
          </div>
        </div>
        <div className="row g-4 row-cols-2 row-cols-lg-4">
          {items.map((src, i) => (
            <div key={i} className="col">
              <img src={src} alt="" style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
