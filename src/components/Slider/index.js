import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SliderPagination from "./SliderPagination";

const Slider = ({
  slides,
  children,
  showPagination = false,
  paginationComponent,
  ...props
}) => {
  return (
    <div>
      <Swiper {...props}>
        {slides && slides.length > 0
          ? slides.map((slide, index) => (
              <SwiperSlide key={index}>{slide()}</SwiperSlide>
            ))
          : children}
        {showPagination
          ? paginationComponent
            ? paginationComponent
            : slides && <SliderPagination slideLength={slides.length} />
          : null}
      </Swiper>
    </div>
  );
};

export default Slider;
