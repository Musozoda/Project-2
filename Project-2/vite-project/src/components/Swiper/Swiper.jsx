import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function Swiper1(props) {
  return (
    <>
      <Swiper
data-aos="zoom-up"
      data-aos-duration="2000"
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
            spaceBetween: 100,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper pb-[50px]"
      >
        <SwiperSlide className="w-[100%]">
            <div className="relative w-[420px] h-[313px] mx-auto flex flex-col items-center justify-center text-white gap-[32px]">
            <img src={props.img1} alt="" />
            <div className="flex flex-col gap-[16px]">
                <h1 className="font-[700] text-center text-[20px] leading-[34px]">{props.h11}</h1>
                <p className="font-[400] max-w-[230px] text-center text-[] text-[16px] leading-[27px]">{props.p1}</p>
            </div>
            </div>
            <img src={props.bgimage1} className=" absolute top-0 right-0 w-[100%] h-[100%] z-[-1]" alt="" />
        </SwiperSlide>
        
        <SwiperSlide >
            <div className="relative w-[420px] h-[313px] flex flex-col items-center justify-center text-white gap-[32px]">
            <img src={props.img2} alt="" />
            <div className="flex flex-col gap-[16px]">
                <h1 className="font-[700] text-center text-[20px] leading-[34px]">{props.h12}</h1>
                <p className="font-[400] max-w-[230px] text-center text-[] text-[16px] leading-[27px]">{props.p2}</p>
            </div>
            </div>
            <img src={props.bgimage2} className=" absolute top-0 right-0 w-[100%] h-[100%] z-[-1]" alt="" />
        </SwiperSlide>
        <SwiperSlide >
            <div className="relative w-[420px] h-[313px] flex flex-col items-center justify-center text-white gap-[32px]">
            <img src={props.img3} alt="" />
            <div className="flex flex-col gap-[16px]">
                <h1 className="font-[700] text-center text-[20px] leading-[34px]">{props.h13}</h1>
                <p className="font-[400] max-w-[230px] text-center text-[] text-[16px] leading-[27px]">{props.p3}</p>
            </div>
            </div>
            <img src={props.bgimage3} className=" absolute top-0 right-0 w-[100%] h-[100%] z-[-1]" alt="" />
        </SwiperSlide>

        <SwiperSlide >
            <div className="relative w-[420px] h-[313px] flex flex-col items-center justify-center text-white gap-[32px]">
            <img src={props.img1} alt="" />
            <div className="flex flex-col gap-[16px]">
                <h1 className="font-[700] text-center text-[20px] leading-[34px]">{props.h11}</h1>
                <p className="font-[400] max-w-[230px] text-center text-[] text-[16px] leading-[27px]">{props.p1}</p>
            </div>
            </div>
            <img src={props.bgimage1} className=" absolute top-0 right-0 w-[100%] h-[100%] z-[-1]" alt="" />
        </SwiperSlide>
        
        <SwiperSlide >
            <div className="relative w-[420px] h-[313px] flex flex-col items-center justify-center text-white gap-[32px]">
            <img src={props.img2} alt="" />
            <div className="flex flex-col gap-[16px]">
                <h1 className="font-[700] text-center text-[20px] leading-[34px]">{props.h12}</h1>
                <p className="font-[400] max-w-[230px] text-center text-[] text-[16px] leading-[27px]">{props.p2}</p>
            </div>
            </div>
            <img src={props.bgimage2} className=" absolute top-0 right-0 w-[100%] h-[100%] z-[-1]" alt="" />
        </SwiperSlide>
        <SwiperSlide >
            <div className="relative w-[420px] h-[313px] flex flex-col items-center justify-center text-white gap-[32px]">
            <img src={props.img3} alt="" />
            <div className="flex flex-col gap-[16px]">
                <h1 className="font-[700] text-center text-[20px] leading-[34px]">{props.h13}</h1>
                <p className="font-[400] max-w-[230px] text-center text-[] text-[16px] leading-[27px]">{props.p3}</p>
            </div>
            </div>
            <img src={props.bgimage3} className=" absolute top-0 right-0 w-[100%] h-[100%] z-[-1]" alt="" />
        </SwiperSlide>

        <SwiperSlide >
            <div className="relative w-[420px] h-[313px] flex flex-col items-center justify-center text-white gap-[32px]">
            <img src={props.img1} alt="" />
            <div className="flex flex-col gap-[16px]">
                <h1 className="font-[700] text-center text-[20px] leading-[34px]">{props.h11}</h1>
                <p className="font-[400] max-w-[230px] text-center text-[] text-[16px] leading-[27px]">{props.p1}</p>
            </div>
            </div>
            <img src={props.bgimage1} className=" absolute top-0 right-0 w-[100%] h-[100%] z-[-1]" alt="" />
        </SwiperSlide>
        
        <SwiperSlide >
            <div className="relative w-[420px] h-[313px] flex flex-col items-center justify-center text-white gap-[32px]">
            <img src={props.img2} alt="" />
            <div className="flex flex-col gap-[16px]">
                <h1 className="font-[700] text-center text-[20px] leading-[34px]">{props.h12}</h1>
                <p className="font-[400] max-w-[230px] text-center text-[] text-[16px] leading-[27px]">{props.p2}</p>
            </div>
            </div>
            <img src={props.bgimage2} className=" absolute top-0 right-0 w-[100%] h-[100%] z-[-1]" alt="" />
        </SwiperSlide>
        <SwiperSlide >
            <div className="relative w-[420px] h-[313px] flex flex-col items-center justify-center text-white gap-[32px]">
            <img src={props.img3} alt="" />
            <div className="flex flex-col gap-[16px]">
                <h1 className="font-[700] text-center text-[20px] leading-[34px]">{props.h13}</h1>
                <p className="font-[400] max-w-[230px] text-center text-[] text-[16px] leading-[27px]">{props.p3}</p>
            </div>
            </div>
            <img src={props.bgimage3} className=" absolute top-0 right-0 w-[100%] h-[100%] z-[-1]" alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
