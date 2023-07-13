import React, { useEffect, useState } from 'react'

import { database } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

import Image from '../components/Image';



const Gallery = ({gallery}) => {
  const collectionRef = collection(database, 'gallery')

  const [imageToggle, setImageToggle] = useState(false)
  const [image, setImage] = useState(0)
  const [images, setImages] = useState([])

  useEffect(() => {
    getData()
  },[])

  const getData = () => {
    getDocs(collectionRef)
    .then((res) => {
      let data = []
      res.docs.forEach((item) => {data.push({...item.data(), id: item.id})})
      assignData(data)
      
    })
    .catch((err) => console.log(err))
  }

  const assignData = (data) => {
    data.sort((a, b) => {
      let fa = +a.timestamp
      let fb = +b.timestamp
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    setImages(data)
  }

  const toggleImage = () => {
    setImageToggle(!imageToggle)
  }

  const changeImage = (direction) => {
    if(direction === 'left' && image !== 0) {
      setImage(image-1)
    }
    else if(direction === 'right' && image !== images.length - 1) {
      setImage(image+1)
    }
  }

  return (
    <div>
      <div className='min-h-[50px] md:min-h-[200px] lg:min-h-[300px]'>
        <img className='min-w-full object-cover brightness-[0.5]' src={gallery} alt="" />
      </div>
      <h1 className="text-[32px] mt-[50px] mb-[-30px] font-semibold text-[#3285bd] text-center">BROWSE OUR PROJECT GALLERIES</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 min-h-screen m-[15px]'>
        {images.map((image, i) => (
          <div key={i} className='flex justify-center rounded-[25px] items-center h-[320px] mb-[-50px]' onClick={() => {toggleImage(); setImage(i)}}>
                <img src={image.url} alt='logo' className='p-[10px] h-[250px] sm:h-[225px] rounded-[25px] cursor-pointer object-contain sm:hover:h-[260px] sm:hover:brightness-50' />
          </div>
        ))}
      </div>
    { imageToggle && <Image className='' image={images[image]} toggleImage={toggleImage} changeImage={changeImage} />

    }
    </div>
  )
}

export default Gallery