import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function Swiper3(props) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper pb-[50px]"
      >
        <SwiperSlide className="w-[420px] h-[260px]">
            <img src={props.img} className="w-[100%] h-[100%]" alt="" />
        </SwiperSlide>

        <SwiperSlide className="w-[420px] h-[260px]">
            <img src={props.img} className="w-[100%] h-[100%]" alt="" />
        </SwiperSlide>

        <SwiperSlide className="w-[420px] h-[260px]">
            <img src={props.img} className="w-[100%] h-[100%]" alt="" />
        </SwiperSlide>

        <SwiperSlide className="w-[420px] h-[260px]">
            <img src={props.img} className="w-[100%] h-[100%]" alt="" />
        </SwiperSlide>

        <SwiperSlide className="w-[420px] h-[260px]">
            <img src={props.img} className="w-[100%] h-[100%]" alt="" />
        </SwiperSlide>

        <SwiperSlide className="w-[420px] h-[260px]">
            <img src={props.img} className="w-[100%] h-[100%]" alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
