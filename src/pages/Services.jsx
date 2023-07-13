import { useEffect, useState } from 'react'

import { collection, getDocs } from 'firebase/firestore'
import { database } from '../firebaseConfig'

import {cake, caterer, decore, dj, hospitality, makeup, mehndi, photography, planer, weddingcard} from '../assets'
import Service from '../components/Service'

const s1 = [
  {text: 'Cinematography', image: photography},
  {text: 'DJ', image: dj},
  {text: 'Wedding Planner', image: planer},
  {text: 'Decor & Florists', image: decore},
  {text: 'Mehndi', image: mehndi},
]

const s2 = [
  {text: 'Hospitality', image: hospitality},
  {text: 'Caterers', image: caterer},
  {text: 'Birthday Party', image: cake},
  {text: 'Wedding Cards', image: weddingcard},
  {text: 'Makeup', image: makeup},
]

const Services = ({services}) => {
  const [images, setImages] = useState({e1: '', e2: '', s3: '', e4: '', })
  const collectionRefComp = collection(database, 'component')


  useEffect(() => {
    getData()
  }, [])
  
  
  const getData = () => {
    getDocs(collectionRefComp)
    .then((res) => {
      setImages(res.docs[3].data())
    })
    .catch((err) => console.log(err))
  }

  return (
    <>
      <div className='min-h-[50px] md:min-h-[200px] lg:min-h-[300px]'>
        <img className='min-w-full object-cover brightness-[0.5]' src={services} alt="" />
      </div>
      <div className='flex flex-col items-center'>
        <h2 className="text-[30px] mt-[20px] sm:mt-[-10px] font-semibold">Our Services</h2>
        <div className='text-center py-0 sm:py-[30px] px-[30px] md:mx-[100px] my-[20px] sm:my-[30px]  border-gray-300 border-y-0 sm:border-y-[2px]'>
          <p className='text-[14px] text-gray-500'>No matter what kind of event you are celebrating, from a momentous wedding or a 50th Birthday Party to a Coming of Age extravaganza or a backyard summer shining, we will help you create memories you and your loved ones will cherish for years to come.</p>
        </div>

        <div className='flex flex-col items-center'>
        <h2 className="text-[30px] mt-[20px] font-semibold text-[#3285bd]">EVENTS</h2>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col items-center m-[10px] p-[10px]'>
            <p className='text-[25px] font-semibold my-[10px]'>WEDDINGS</p>
            <img src={images.e1} alt='logo' className='w-[300px] rounded-[25px] object-contain hover:brightness-[0.5] hover:cursor-pointer' />
            <p className='text-[14px] text-gray-600 max-w-[300px] my-[5px] text-center'>Make the day you've always dreamed of, the day you'll never forget.</p>
          </div>
          <div className='flex flex-col items-center m-[10px] p-[10px]'>
            <p className='text-[25px] font-semibold my-[10px]'>CORPORATE EVENTS</p>
            <img src={images.e2} alt='logo' className='w-[300px] rounded-[25px] object-contain hover:brightness-[0.5] hover:cursor-pointer' />
            <p className='text-[14px] text-gray-600 max-w-[300px] my-[5px] text-center'>Wow your guests with a unique event that aligns with your company's vision.</p>
          </div>
          <div className='flex flex-col items-center m-[10px] p-[10px]'>
            <p className='text-[25px] font-semibold my-[10px]'>SOCIAL GATHERINGS</p>
            <img src={images.e3} alt='logo' className='w-[300px] rounded-[25px] object-contain hover:brightness-[0.5] hover:cursor-pointer' />
            <p className='text-[14px] text-gray-600 max-w-[300px] my-[5px] text-center'>Receptions, rehearsal dinners, birthday parties and more. Plan your next social gathering with us.</p>
          </div>
          <div className='flex flex-col items-center m-[10px] p-[10px]'>
            <p className='text-[25px] font-semibold my-[10px]'>OUTDOORS</p>
            <img src={images.e4} alt='logo' className='w-[300px] rounded-[25px] object-contain hover:brightness-[0.5] hover:cursor-pointer' />
            <p className='text-[14px] text-gray-600 max-w-[300px] my-[5px] text-center'>Turn your party into an unforgettable outdoor adventure with exciting and engaging activities</p>
          </div>
        </div>

        </div>

        <div className='flex flex-col items-center bg-gray-100 min-w-full mt-[20px] py-[10px]'>
          <h2 className="text-[30px] mt-[20px] font-semibold text-[#3285bd]">Additional Services</h2>
          <div className='flex flex-row md:flex-col my-[20px]'>
            <div className='flex flex-col md:flex-row'>
              {s1.map((comp, i) => (
                <Service key={i} image={comp.image} text={comp.text} />
              ))}
            </div>
 
            <div className='flex flex-col md:flex-row'>
            {s2.map((comp, i) => (
                <Service key={i} image={comp.image} text={comp.text} />
              ))}
            </div>
 

          </div>
        </div>

      </div>
    </>
  )
}

export default Services