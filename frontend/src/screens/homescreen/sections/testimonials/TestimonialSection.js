import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper';

// Datos
import { Data } from './Data';

const TestimonialSection = () => {
  return (
    <section className="d-none testimonial section" id="testimonial">
      <span className="section__subtitle">
        Vea las opiniones de mis clientes.
      </span>

      {/**Main Container */}
      <Swiper
        className="testimonial__container"
        fluid="lg"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, name, description }) => {
          return (
            <SwiperSlide className="testimonial__card">
              <img
                src={image}
                className="testimonial__img"
                alt="Opiniones de clientes"
              />
              <h3 className="testimonial__name">{name}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default TestimonialSection;
