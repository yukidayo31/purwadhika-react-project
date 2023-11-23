import React from "react";
import "./testimonials.css";
import Client1 from "../../assets/c1.jpg";
import Client2 from "../../assets/c2.jpg";
import Client3 from "../../assets/c3.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    ava: Client1,
    name: "Tomomi Ogawa",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    ava: Client2,
    name: "Davie504",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    ava: Client3,
    name: "Mina",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ ava, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={ava} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
