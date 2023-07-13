import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { collection, getDocs } from 'firebase/firestore'
import { database } from './firebaseConfig'

import Navbar from './components/Navbar'
import { Home, Events, About, Services, Gallery, Contact} from './pages'
import PageNotFound from './pages/PageNotFound'


function App() {
  const [isActive, setIsActive] = useState('')
  const [navImages, setNavImages] = useState({ home: '', about: '', services: '', gallery : '', contact: '', })
  const [compData, setCompData] = useState({logo: '', b1: '', b2: ''})
  const collectionRefComp = collection(database, 'component')

  useEffect(() => {
    getBgData()
    getCompData()
  }, [])
  
  
  const getBgData = () => {
    getDocs(collectionRefComp)
    .then((res) => {
      setNavImages(res.docs[0].data())
    })
    .catch((err) => console.log(err))
  }

  const getCompData = () => {
    getDocs(collectionRefComp)
    .then((res) => {
        setCompData(res.docs[2].data())
    })
    .catch((err) => console.log(err))
  }
    
  const changePage = (page) => {
    setIsActive(page)
  }
 
  return (
    <div className=''>
      <Navbar page={isActive} changePage={changePage} logo={compData.logo} />
      <div className=''>
      <Routes>
          <Route path='/' element={<Home bg={navImages.home} b1={compData.b1} b2={compData.b2} logo={compData.logo} />} />
          <Route path='/events' element={<Events/>} />
          <Route path='/about' element={<About about={navImages.about} logo={compData.logo} />} />
          <Route path='/services' element={<Services services={navImages.services}/>} />
          <Route path='/gallery' element={<Gallery gallery={navImages.gallery} />} />
          <Route path='/contact' element={<Contact contact={navImages.contact} />} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </div>
      <div className='w-full bottom-s flex justify-center border-t-[1px] mt-[50px] border-black'>
        {/* <p className='text-[#171c4a] p-[5px]'>Together N Forever | 2023</p> */}
        <p className="text-[12px] p-[5px]">© 2023 Together N Forever™ | All Rights Reserved</p>
      </div>

    </div>
  )
}

export default App
