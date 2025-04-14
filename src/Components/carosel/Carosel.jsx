import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carosel.css"

const slides = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYjWDVfb_FGmiDW06Ezt1O4k7RzAXSP8PCRQ&s",
      title: "Delicious & Fresh Pizza",
      description: "Savor the taste of freshly baked, cheesy perfection!",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ANxYJIWCQPcPRtRAiMJkUlFPHAIPPyWD9w&s",
      title: "Made with Quality Ingredients",
      description: "Only the best for our pizzas — every slice counts!",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ucTSZDhsaqi6Ro91hlzgNCX2Y9bTn3OFzQ&s",
      title: "Order Your Favorite Pizza Now",
      description: "Fast delivery. Hot and delicious. Just a click away!",
    },
  ];
  

const BannerSlider = () => {
  return (
    <div className="banner-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="swiper-container"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide">
              <img src={slide.image} alt={slide.title} className="slide-image" />
              <div className="slide-overlay">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-description">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
