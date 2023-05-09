import React from 'react'

const Card = (props) => {
  return (
    <div className={`${props.className} dark:bg-[lightgray] dark:text-black w-[300px] h-[240px] p-[20px_37px_44px_40px] flex flex-col gap-[16px] relative items-start`}>
        <img src={props.img} alt=""/>
        <h1 className='font-[700] text-[] text-[20px] leading-[34px]'>{props.h1}</h1>
        <p className='font-[400] text-[] text-[16px] leading-[27px]'>{props.p}</p>
    </div>
  )
}

export default Card