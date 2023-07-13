import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate()

  return (
    <>
        <div className='h-[65px] sm:h-[100px] bg-[#d8c3a5]'></div>
        <div className='h-[500px] sm:h-[560px] flex flex-col items-center justify-center '>
            <p className='text-red-600 text-[18px] sm:text-[22px]'>No Page Found</p>
            <p className='text-red-600 text-[18px] sm:text-[22px] mb-[100px]'> Are you sure you entered the right URL ??</p>
            <p className='text-[22px]'>Let's explore the home page</p>
            <button onClick={() => navigate('/')} className="w-[100px] mt-[20px] mb-[200px] px-4 py-2 text-white bg-[#d8c3a5] rounded-md hover:bg-red-300" > Home </button>
        </div>
    </>
  )
}

export default PageNotFound