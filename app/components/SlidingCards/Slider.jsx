"use client";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode, A11y } from "swiper/modules";

import { situations } from "@/constants";
import SliderCard from "./SliderCard";

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[FreeMode, Mousewheel, A11y]}
        mousewheel
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
      >
        {situations.map((item) => (
          <SwiperSlide key={item.id} className="py-8 px-2">
            <SliderCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
