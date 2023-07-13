import React, { useEffect, useState } from 'react'

import { database } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

import Team from '../components/Team';

const About = ({about, logo}) => {
  const collectionRef = collection(database, 'team')
  const [teams, setTeams] = useState([])

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

    let even = false
    for(let i = 0; i < data.length; i++){
      data[i] = {...data[i], even: even }
      even = !even
    }

    setTeams(data)
  }

  return (
    <div>
      <div className='min-h-[50px] md:min-h-[200px] lg:min-h-[300px]'>
        <img className='min-w-full object-cover brightness-[0.5]' src={about} alt="" />
      </div>
      <div className='sm:flex m-[20px] justify-center'>
        <div className='p-[20px] max-w-[600px]'>
          <h1 className="text-[36px] mb-4 font-semibold text-[#3285bd]">Welcome to Together N Forever</h1>
          <p className='text-[17px] my-[10px] text-gray-500'>
          Since the start, we have been driven by a purpose and directed by the values we tend to treasure. Connecting people in ways in which area unit purposeful are associate impressive responsibility, and that we take it to heart. Though our company is often evolving to satisfy the dynamical demands of our business, our values stay constant and supply all India with a variable from that to navigate.
          </p>
          <ul className='ml-[25px] list-disc'>
            <li>Corporate & social events</li>
            <li>Cultural Affairs & Traditional events</li>
            <li>Branding & Promotion</li>
            <li>Indoor & Outdoor Activity</li>
            <li>Manpower Supply</li>
            <li>Conferences & Exhibitions</li>
          </ul>
        </div>
        <img src={logo} alt='logo' className='hidden sm:flex w-[350px] h-[350px] mt-[15px] object-contain' />
      </div>
      
      <div className='p-[20px]'>
        <h1 className="text-[40px] mb-4 font-semibold text-[#3285bd] text-center">Meet the Team</h1>
        <div className=''>
        {teams.map((team, i) => (
              <Team key={i} name={team.name} image={team.url} position={''} bio={team.bio} even={team.even} />
            ))
            }
        </div>
      </div>

      <div className='my-[20px]'>
        <h1 className="text-[40px] my-4 font-semibold text-[#3285bd] text-center">Join Us</h1>
        <div className='flex justify-center'>
          <p className='max-w-[800px] mx-[30px]'>Want to be a part of our  team ? We are also always looking for cheery future event creators who want more experience in event planning to join our program. Please email tnf_hire@tnf.com with your cover letter and resume to apply.</p>
        </div>
      </div>
    </div>
  )
}

export default About