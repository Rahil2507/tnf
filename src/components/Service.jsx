import React from 'react'

const Service = ({image, text}) => {
  return (
    <div className='flex flex-col items-center m-[10px] py-[20px] w-[160px] sm:w-[220px] rounded-[10px] bg-white hover:shadow-lg hover:cursor-pointer'>
      <img src={image} alt='logo' className='w-[55px] h-[55px] my-[10px] object-cover ' />
      <p className='text-[17px] sm:text-[19px] text-gray-800  my-[5px] text-center'>{text}</p>
    </div>
  )
}

export default Service