import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const reviews = [
  'I pushed him to the "edge" for hours...',
  "I couldn't walk for days. Can't wait until next week...",
  'Swiped right and had one hell of a night...',
  'Felt so good we had to film it. Follow me to see more...',
];

export default function Reviews() {
  return (
    <section className="hp-reviews pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-uppercase text-center mb-5">
              Nights so wild,{' '}
              <span className="text-secondary">They Couldn't Keep Quiet</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper
              modules={[Navigation, Pagination]}
              loop
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              pagination={{ clickable: true }}
            >
              {reviews.map((q, i) => (
                <SwiperSlide key={i}>
                  <div className="hp-review-item d-flex gap-3 align-items-center justify-content-center text-center">
                    <img src="/assets/review-placeholder.png" alt="" />
                    <div className="review-content">
                      <img src="/assets/stars-placeholder.png" alt="" className="mb-3" />
                      <p className="h6 text-uppercase">{q}</p>
                      <p className="text-warning h6 rfs-8 text-uppercase">Verified Customer</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="cta-btn text-center mt-5">
            <a href="#stories" className="black-69-btn yellow-69-btn">READ MORE STORIES</a>
          </div>
        </div>
      </div>
    </section>
  );
}
