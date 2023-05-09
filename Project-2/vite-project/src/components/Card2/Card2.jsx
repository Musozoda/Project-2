import React from 'react'
import Btn from '../Btn/Btn'

const Card2 = (props) => {
  return (
    <div data-aos-duration="1500"
    data-aos="fade-up"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" className={`shadow-[0_8px_30px_0] shadow-[#02395726] dark:shadow-[white] max-w-[420px] ${props.className}`}>
        <img src={props.img} alt="" />
        <div className='p-[30px] flex flex-col gap-[32px]'>
            <div className='flex flex-col gap-[16px]'>
                <h1 className='font-[700] text-[24px] text-[#056088] leading-[41px]'>
                    {props.h1}
                </h1>
                <p className='font-[400] text-[16px] text-[#434343] leading-[27px]'>
                    {props.p}
                </p>
            </div>
            <Btn text={props.btntext}/>
        </div>
    </div>
  )
}

export default Card2