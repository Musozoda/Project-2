import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Pagination } from "swiper";

export default function Swiper2(props) {
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
        className="mySwiper pb-[50px] "
      >
        <SwiperSlide className={`relative p-[20px]   w-[416px] h-[373px] flex flex-col gap-[32px] items-start ${props.className}`}>
            <img src={props.img} alt="" />
            <div className="flex flex-col gap-[16px]">
                <p className="max-w-[310px] font-[400] text-[16px] text-[] leading-[27px]">{props.p}</p>
                <h1 className=" font-[600] text-[16px] text-[] leading-[27px]">{props.h1}</h1>
            </div>
            <img src={props.bgimg} className=" absolute top-0 right-0 w-[100%] h-[100%] z-[-1]" alt="" />
        </SwiperSlide>
        <SwiperSlide className={`relative p-[20px] dark:bg-[gray] dark:shadow-[gray] dark:shadow-[5px_0_2px] w-[416px] h-[373px] flex flex-col gap-[32px] items-start `}>
            <img src={props.img2} alt="" />
            <div className="flex flex-col gap-[16px]">
                <p className="max-w-[310px] font-[400] text-[16px] text-[] leading-[27px]">{props.p2}</p>
                <h1 className=" font-[600] text-[16px] text-[] leading-[27px]">{props.h12}</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide className={`relative p-[20px] dark:bg-[gray] dark:shadow-[gray] dark:shadow-[5px_0_2px] w-[416px] h-[373px] flex flex-col gap-[32px] items-start `}>
            <img src={props.img3} alt="" />
            <div className="flex flex-col gap-[16px]">
                <p className="max-w-[310px] font-[400] text-[16px] text-[] leading-[27px]">{props.p3}</p>
                <h1 className=" font-[600] text-[16px] text-[] leading-[27px]">{props.h13}</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide className={`relative p-[20px] w-[416px] h-[373px] flex flex-col gap-[32px] items-start ${props.className}`}>
            <img src={props.img} alt="" />
            <div className="flex flex-col gap-[16px]">
                <p className="max-w-[310px] font-[400] text-[16px] text-[] leading-[27px]">{props.p}</p>
                <h1 className=" font-[600] text-[16px] text-[] leading-[27px]">{props.h1}</h1>
            </div>
            <img src={props.bgimg} className=" absolute top-0 right-0 w-[100%] h-[100%] z-[-1]" alt="" />
        </SwiperSlide>
        <SwiperSlide className={`relative p-[20px] dark:bg-[gray] dark:shadow-[gray] dark:shadow-[5px_0_2px] w-[416px] h-[373px] flex flex-col gap-[32px] items-start `}>
            <img src={props.img2} alt="" />
            <div className="flex flex-col gap-[16px]">
                <p className="max-w-[310px] font-[400] text-[16px] text-[] leading-[27px]">{props.p2}</p>
                <h1 className=" font-[600] text-[16px] text-[] leading-[27px]">{props.h12}</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide className={`relative p-[20px] dark:bg-[gray] dark:shadow-[gray] dark:shadow-[5px_0_2px] w-[416px] h-[373px] flex flex-col gap-[32px] items-start `}>
            <img src={props.img3} alt="" />
            <div className="flex flex-col gap-[16px]">
                <p className="max-w-[310px] font-[400] text-[16px] text-[] leading-[27px]">{props.p3}</p>
                <h1 className=" font-[600] text-[16px] text-[] leading-[27px]">{props.h13}</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide className={`relative p-[20px] dark:bg-[gray] dark:shadow-[gray] dark:shadow-[5px_0_2px] w-[416px] h-[373px] flex flex-col gap-[32px] items-start ${props.className}`}>
            <img src={props.img} alt="" />
            <div className="flex flex-col gap-[16px]">
                <p className="max-w-[310px] font-[400] text-[16px] text-[] leading-[27px]">{props.p}</p>
                <h1 className=" font-[600] text-[16px] text-[] leading-[27px]">{props.h1}</h1>
            </div>
            <img src={props.bgimg} className=" absolute top-0 right-0 w-[100%] h-[100%] z-[-1]" alt="" />
        </SwiperSlide>
        <SwiperSlide className={`relative p-[20px] dark:bg-[gray] dark:shadow-[gray] dark:shadow-[5px_0_2px] w-[416px] h-[373px] flex flex-col gap-[32px] items-start `}>
            <img src={props.img2} alt="" />
            <div className="flex flex-col gap-[16px]">
                <p className="max-w-[310px] font-[400] text-[16px] text-[] leading-[27px]">{props.p2}</p>
                <h1 className=" font-[600] text-[16px] text-[] leading-[27px]">{props.h12}</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide className={`relative p-[20px]  dark:shadow-[gray]  w-[416px] h-[373px] flex flex-col gap-[32px] items-start `}>
            <img src={props.img3} alt="" />
            <div className="flex flex-col gap-[16px]">
                <p className="max-w-[310px] font-[400] text-[16px] text-[] leading-[27px]">{props.p3}</p>
                <h1 className=" font-[600] text-[16px] text-[] leading-[27px]">{props.h13}</h1>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
