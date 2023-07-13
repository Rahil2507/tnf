import React, { useEffect, useState } from "react";

import { collection, addDoc, getDocs } from 'firebase/firestore'
import { database } from '../firebaseConfig'

import { c1,c2,c3,c4 } from "../assets";

const Contact = ({contact}) => {  

  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "", });
  const [contactData, setContactData] = useState({ address: '', phone: '', mail: '', time: '', instagram: '', linkedin: ''})
  const [submited, setSubmited] = useState('')

  const collectionRef = collection(database, 'contact')

  useEffect(() => {
    getData()
  },[])

const submitting = () => {
  setSubmited('Data Submited')
  setTimeout(() => {
    setSubmited('')
  }, 5000);
}

const getData = () => {
  const collectionRefComp = collection(database, 'component')
  getDocs(collectionRefComp)
  .then((res) => {
    setContactData(res.docs[1].data())

  })
  .catch((err) => console.log(err))
}

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value,});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    uploadData()
  };

  const uploadData = () => {
    let currentdate = new Date(); 
    let timestamp = '+' + currentdate.getFullYear() + (currentdate.getMonth()+1) + currentdate.getDate() + currentdate.getHours() + currentdate.getMinutes() + currentdate.getSeconds()
    let date = currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear()
    let time = currentdate.getHours() + ":" + currentdate.getMinutes()

    addDoc(collectionRef, {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
      date: date,
      time: time,
      timestamp: timestamp
    })
    .then(() => {submitting(); setFormData({ name: "", phone: "", email: "", message: "", })})
    .catch((err) => console.log(err.message))
  }

  return (
    <div>
      <div className='min-h-[50px] md:min-h-[200px] lg:min-h-[300px]'>
        <img className='min-w-full object-cover brightness-[0.5]' src={contact} alt="" />
      </div>
      <div className="flex flex-col sm:flex-row justify-evenly mt-[20px]">
        <div className="max-w-[600px] m-[10px] mb-[20px] sm:m-[20px] p-[15px] sm:p-[20px] bg-[#171c4a] rounded-[25px]">
          <div className="flex flex-col text-center m-[10px]">
            <h1 className="text-[30px] mb-4 font-semibold text-white">Get in Touch</h1>
            <p className="sm:text-[16px] text-[15px] text-white">We would love to hear from you.</p>
            <p className="sm:text-[16px] text-[15px] text-white">To get started planning your wedding or event, please reach out to us and we will get back to you.</p>
          </div>
          <form className="flex flex-col items-center max-w-[500px] sm:mx-[20px] p-[20px]" onSubmit={handleSubmit}>
              <input className="w-full m-[10px] px-3 py-3 rounded-md"
                placeholder="Name" type="text" name="name" id="name" required value={formData.name} onChange={handleChange} />

              <input className="w-full m-[10px] px-3 py-3 rounded-md" 
              placeholder="Phone" type="number" name="phone" id="phone" required value={formData.phone} onChange={handleChange} />

              <input className="w-full m-[10px] px-3 py-3 rounded-md" 
              placeholder="Email" type="email" name="email" id="email" required value={formData.email} onChange={handleChange} />

              <textarea className="w-full m-[10px] px-3 pt-[12px] pb-[75px] rounded-md"
                placeholder="Message" maxLength={1000} name="message" id="message" required value={formData.message} onChange={handleChange} ></textarea>

            <button className="w-[100px] mt-[10px] px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-amber-500" type="submit" > Submit </button>
          </form>
          <p className="text-red-500 text-center">{submited}</p>
        </div>

        <div className=" border-[#171c4a] border-[3px] max-w-[600px] min-w-[350px] h-[500px] m-[10px] sm:m-[20px] p-[15px] sm:px-[30px] rounded-[25px]">
          <h1 className="text-[30px] font-semibold text-center m-4 text-[#171c4a]">Contact Info</h1>
          <div className="p-[10px]">
            <div className="flex items-center p-[10px]">
              <img src={c1} alt="A" className="w-[40px] h-[40px] mt-[3px] mx-[15px]" />
              <div>
              <p className="font-bold">Address</p>
                <p>{contactData.address}</p>
              </div>
            </div>
            <div className="flex items-center p-[10px]">
              <img src={c2} alt="P" className="w-[40px] h-[40px] mt-[3px] mx-[15px]" />
              <div>
              <p className="font-bold">Phone</p>
              <p>{contactData.phone}</p>
              </div>
            </div>
            <div className="flex items-center p-[10px]">
            <img src={c3} alt="M" className="w-[40px] h-[40px] mt-[3px] mx-[15px]" />
              <div>
              <p className="font-bold">Mail</p>
              <p>{contactData.mail}</p>
              </div>
            </div>
            <div className="flex items-center p-[10px]">
            <img src={c4} alt="O" className="w-[40px] h-[40px] mt-[3px] mx-[15px]" />
              <div>
              <p className="font-bold">Office Time</p>
              <p>{contactData.time}</p>
              </div>
            </div>
            <div className="flex w-full my-[20px] justify-center">
              <p className="m-[5px] text-[#e92156] hover:cursor-pointer " onClick={() => window.open(`https://instagram.com/${contactData.instagram}`)}>Instagram</p>
              <p className="m-[5px] text-[#1a39d1] hover:cursor-pointer " onClick={() => window.open(`https://linkedin.com/in/${contactData.linkedin}`)}>LinkedIn</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
