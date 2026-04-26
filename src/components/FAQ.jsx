const faqs = [
  { q: 'HOW FAST DOES IT WORK?', a: 'Most users feel effects within 20-30 minutes.' },
  { q: 'HOW MANY SHOULD I TAKE?', a: 'Start with one serving — never exceed two in 24 hours.' },
  { q: 'IS SHIPPING DISCREET?', a: 'Yes, all orders ship in plain, unmarked packaging.' },
  { q: 'ARE THE INGREDIENTS SAFE?', a: 'Our proprietary blend uses clean, organic ingredients.' },
  { q: 'WHERE IS SEX9INE MADE?', a: 'Domestically sourced and manufactured in GMP-certified labs in the USA.' },
  { q: 'WHO SHOULD USE SEX9INE?', a: 'Adults 18+ looking to enhance intimacy. Consult a doctor if pregnant or on medication.' },
];

export default function FAQ() {
  return (
    <section className="hp-faq-container pb-5" id="faq">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="text-uppercase">
              Before it <span className="text-warning">hits...</span>
              <span className="text-secondary">know this</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="hp-faq-accordion">
              <div className="accordion hp-faqs" id="hpFaqsAccordion">
                {faqs.map((f, i) => {
                  const id = `hp-faq-collapse-${i + 1}`;
                  return (
                    <div key={i} className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${id}`}
                          aria-expanded="false"
                          aria-controls={id}
                        >
                          {f.q}
                        </button>
                      </h2>
                      <div id={id} className="accordion-collapse collapse" data-bs-parent="#hpFaqsAccordion">
                        <div className="accordion-body">{f.a}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
