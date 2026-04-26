const left = [
  { img: '/assets/bolt-icon.png', cls: 'text-success', h: 'FAST ACTING', p: "Ready when the moment strikes - kicks in fast so the fun doesn't wait" },
  { img: '/assets/lips-icon.png', cls: 'text-info', h: 'LIBIDIO BOOST', p: 'Feel the vibes and lock in to your most passionate desires' },
  { img: '/assets/burst-icon.png', cls: 'text-secondary', h: 'ENHANCED MOOD', p: "With confidence & energy like this, you'll control the night" },
];

const right = [
  { img: '/assets/rocket-icon.png', cls: 'text-primary', h: 'ENERGY & STAMINA', p: "Louder, Faster, Longer - it's not over until you're both fully satisfied" },
  { img: '/assets/leaves-icon.png', cls: 'text-danger', h: 'CLEAN INGREDIENTS', p: 'Our proprietary formula contains the finest organic ingredients.' },
  { img: '/assets/usa-flag.png', cls: 'text-warning', h: 'MADE IN THE USA', p: 'Domestically sourced and manufactured in GMP certified labs.' },
];

function Block({ item, mirror }) {
  return (
    <div className={`key-feature-block ${mirror ? 'key-feature-col-2' : ''} mb-4`}>
      <img src={item.img} alt="" />
      <div className="key-feature-content">
        <h3 className={item.cls}>{item.h}</h3>
        <p>{item.p}</p>
      </div>
    </div>
  );
}

export default function WhySex9ine() {
  return (
    <section className="why-sex9ine">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-5">
              <h2 className="text-center text-uppercase">
                <span className="text-warning">Why Sex</span>
                <span className="text-secondary">9</span>
                <span className="text-warning">ine Hits </span>
                <span className="text-secondary">Different</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 fw-bold align-items-center">
          <div className="col order-lg-1">
            {left.map((it, i) => <Block key={i} item={it} />)}
          </div>
          <div className="col order-lg-3 text-lg-end">
            {right.map((it, i) => <Block key={i} item={it} mirror />)}
          </div>
          <div className="col order-lg-2 text-center">
            <img src="/assets/why-sex9ine-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
