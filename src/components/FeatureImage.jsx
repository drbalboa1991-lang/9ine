export default function FeatureImage() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img
              src="/assets/6ix9ine-feature-img.jpg"
              alt=""
              style={{ borderRadius: '2rem', maxHeight: '350px', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
