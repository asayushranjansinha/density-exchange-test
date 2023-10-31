import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/pagination";

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
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          350: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        {situations.map((item) => (
          <SwiperSlide key={item.id} className="py-8 px-4">
            <SliderCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
