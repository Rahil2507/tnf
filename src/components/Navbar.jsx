import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { navlinks } from '../constants/index'
import { menu } from '../assets'


const Navbar = ({page, changePage, logo}) => {
  const navigate = useNavigate()
  
  const [toggleDrawer, setToggleDrawer] = useState(false)

  return (
    <div id='navbar' className='z-10'>
      {/* For large devices */}
      <div className='hidden sm:flex justify-between items-center mx-[40px] mt-[15px]'>
        <img src={logo} alt='logo' className='w-[80px] h-[80px] object-contain' />
        <div className='flex gap-8 items-center'>
          {navlinks.map((link) => (
            <div key={link.name} className=''> 
              <Link to={link.link}  onClick={() => {changePage(link.link)}} className={`p-[10px] ${page === link.link ? `text-[#671f19] text-[20px]`: `text-[#e74230] text-[16px]`} py-[10px] font-semibold hover:text-[20px] hover:p-[0px] cursor-pointer`}>{link.name}</Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* For small devices */}
      <div className="sm:hidden flex justify-between items-center relative w-screen py-[5px] z-10">
        <img src={logo} alt='user' className='w-[60px] py-[5px] object-contain' onClick={() => navigate('/')} />
        {/* <p className='text-[#ffd70e] text-[19px] font-semibold'>Together n Forever</p> */}
        <div>
          {toggleDrawer ? <p className='text-[40px] mr-[20px] font-bold text-gray-400' onClick={() => setToggleDrawer((prev) => !prev)}>X</p>:
            <img src={menu} alt='menu' onClick={() => setToggleDrawer((prev) => !prev)} className='w-[35px] mr-[15px] h-[30px] object-contain cursor-pointer' />
          }
      </div>
        <div className={`absolute top-[60px] right-0 left-0 bg-[#4b5264] z-10 shadow-secondary rounded-[15px] ${!toggleDrawer ? '-translate-x-[100vh]' : 'translate-x-0 '} transition-all duration-500`}>
            <ul className='mb-4'>
              {navlinks.map((link) => (
                <li key={link.name} className={`flex p-4 `} onClick={() => {setToggleDrawer(false); navigate(link.link)}} >
                  <p className={`ml-[20px] font-epilogue font-semibold text-[14px] text-white`} >{link.name}</p>
                </li>
              ))}
            </ul>
            {/* <div className="flex mx-4">
            
            </div> */}

        </div>
      </div>
    </div>
  )
}

export default Navbar