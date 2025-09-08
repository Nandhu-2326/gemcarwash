import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="container-fluid">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-2xl "
      >
        <SwiperSlide>
          <img src="car1.jpg" alt="" className="img-fluid w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="car4.jpg" alt="" className="img-fluid w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="car2.jpg" alt="" className="img-fluid w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="car3.jpg" alt="" className="img-fluid w-100" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
