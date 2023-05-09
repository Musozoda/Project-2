import React from 'react'
import img1 from '../../Pages/Career/Images/img1.png'
import img2 from '../../Pages/Career/Images/img2.png'
import img3 from '../../Pages/Career/Images/img3.png'
import Btn from '../Btn/Btn'

const Card3 = (props) => {
  return (
    <div data-aos-duration="1500"
    data-aos="fade-down"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" className='p-[30px] dark:bg-white dark:shadow-white dark:text-black flex flex-col gap-[32px] shadow-[0_8px_30px_0] shadow-[#02395726] w-[420px]'>
        <div className='flex flex-col gap-[16px]'>
            <h1 className='font-[700] text-[24px] text-[#056088] leading-[41px]'>{props.h1}</h1>
            <div className='flex flex-col gap-[6px]'>
                <div className='flex items-center gap-[8px]'>
                    <img src={img1} alt="" />
                    <p>5+ years experience</p>
                </div>

                <div className='flex items-center gap-[8px]'>
                    <img src={img2} alt="" />
                    <p>Full-time</p>
                </div>

                <div className='flex items-center gap-[8px]'>
                    <img src={img3} alt="" />
                    <p>$9000/month</p>
                </div>
            </div>
        </div>
        <Btn text="Details"/>
    </div>
  )
}

export default Card3