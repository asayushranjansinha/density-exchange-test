"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

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
      className="flex items-center z-10 mb-10"
    >
      {situations.map((item) => (
        <SwiperSlide key={item.id} className="z-50 py-10">
          {<SliderCard data={item}  />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
