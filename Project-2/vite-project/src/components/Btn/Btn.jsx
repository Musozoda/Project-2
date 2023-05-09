import React from 'react'

const Btn = (props) => {
  return (
    <div data-aos="fade-up" className='p-[23px] btnbg text-white w-max'>
        {props.text}
    </div>
  )
}

export default Btn