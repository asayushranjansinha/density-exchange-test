"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import SliderCard from "./SliderCard";
import { situations } from "@/constants";

function Slider() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      modules={[FreeMode]}
      className="my-10 p-4 h-full"
    >
      {situations.map((item) => (
        <SwiperSlide key={item.id}>
          <SliderCard
            title={item.title}
            body={item.body}
            image={item.image}
            classNames={item.styles}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
