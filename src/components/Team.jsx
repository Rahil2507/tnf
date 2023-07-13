import React, { useState, useEffect } from 'react'

const Team = ({name, image, position, bio, even}) => {
    return (
    <>
      <div className={`flex ${even && 'flex-row-reverse'} justify-center items-end`}>
          <div className={`bg-[#3285bd] p-[20px] pt-[10px] mx-[-1px] mb-[40px] max-w-[700px] ${even ? 'rounded-r-[20px]' : 'rounded-l-[20px]'}`}>
              <h1 className="text-[32px] font-semibold text-white text-center sm:text-start">{name}</h1>
              <p className='hidden sm:flex text-white'>{bio}</p>
          </div>
          <div className={`p-0 sm:p-[10px] border-[#3285bd] rounded-[20px] border-[3px] ${even ? 'border-l-0' : 'border-r-0'}`}>
              <img src={image} alt='logo' className='h-[350px] w-[180px] p-0 sm:px-[25px] object-contain' />
          </div>

      </div>
      <div>

      </div>
    </>
  )
}

export default Team