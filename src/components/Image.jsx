import React from 'react'

const Image = ({image, toggleImage, changeImage}) => {
  const toggle = ['<' , '>']
  return (
    <div className="hidden sm:flex fixed inset-0 z-10 h-screen w-screen bg-[rgba(0,0,0,0.93)] items-center justify-center flex-col">
        <p className='text-white text-[50px] font-semibold hover:text-[#ffd70e] absolute top-[5px] right-[270px] cursor-pointer'  onClick={() => toggleImage()}>X</p>
        <div className='flex items-center'>
        <p className='text-gray-400 text-[60px] font-semibold hover:text-[#ffd70e] cursor-pointer'  onClick={() => changeImage('left')}>{toggle[0]}</p>
          <div>
            <img src={image.url} alt="Image" className="max-w-[900px] max-h-[600px] mx-[20px] object-contain cursor-default"/>
              
              {/* <div className='flex max-w-[850px] overflow-auto'>
                {images.map((image, i) => (
                  <div key={i} className='flex justify-center mx-[7px]' onClick={() => {changeImage(i); console.log(i)}}>
                    <img src={image} alt='logo' className='h-[50px] cursor-pointer object-contain'/>
                  </div>
                ))}
              </div> */}

          </div>
        <p className='text-gray-400 text-[60px] font-semibold hover:text-[#ffd70e] cursor-pointer'  onClick={() => changeImage('right')}>{toggle[1]}</p>
        </div>
    </div>
  )
}

export default Image