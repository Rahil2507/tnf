import React from 'react'

const Home = ({bg, b1, b2, logo}) => {
return (
    <>
    <div>
      <div className='min-h-[200px] sm:min-h-screen'>
        <img className='max-h-screen min-w-full object-cover brightness-[0.5]' src={bg} alt="" />
      </div>
      <div className='absolute sm:mt-[-600px] mt-[-200px] w-full flex flex-col items-center text-white'>
        <p className='sm:text-[28px] text-[16px] font-semibold sm:mb-[10px] mb-[4px]'>We are</p>
        <p className='sm:text-[56px] text-[22px] font-bold'>ARCHITECTS</p>
        <p className='sm:text-[56px] text-[22px] font-bold'>OF ENGAGEMENT</p>
        <p className='sm:text-[30px] text-[11px] font-semibold sm:mt-[10px] mt-[4px]'>Delivering magic in events, strategy, timeliness and production</p>
        <p className='sm:text-[64px] text-[32px] text-amber-500 font-semibold sm:mt-[55px] mt-[10px]'>Together n Forever</p>
      </div>
    </div>

    <div className='bg-[#eae7dc] b-blue-900 p-[30px] m-[10px] sm:m-[30px] rounded-[25px]'>
      <p className='sm:text-[20px] text-[18px] font-semibold mt-[10px]  text-center'>
        Welcome to our event company! We are a team of passionate event planners who specialize in creating unique and unforgettable experiences for our clients and their guests.
      </p>
      <div className='sm:flex'>
        <div className='p-[3px] sm:p-[20px] text-justify sm:text-left'>
          <p className='mt-[20px] '>
            Our experienced team of planners works with you every step of the way to ensure that your event is personalized, polished, and stress-free. From conceptualization to execution, we take care of every detail so that you can relax and enjoy your event.
          </p>
          <p className='mt-[30px] '>
            We pride ourselves on our ability to listen to your needs and collaborate with you to bring your vision to life. Whether you're planning a wedding, corporate event, or private party, we work closely with you to create an event that is tailored to your preferences, budget, and goals.
          </p>
        </div>
        <img src={logo} alt='logo' className='w-[300px] h-[300px] mt-[15px] object-contain' />
        <div className='p-[3px] sm:p-[20px] text-justify sm:text-right'>
          <p className='mt-[20px] '>
            With a keen eye for design and a commitment to exceptional service, we go above and beyond to deliver a flawless event that exceeds your expectations. Our team is always on the lookout for the latest trends and innovations in event planning, so that we can bring fresh and exciting ideas to your event.
          </p>          
          <p className='mt-[30px] '>
            At our event company, we believe that each event is a unique opportunity to create something extraordinary. Contact us today to learn more about how we can help you plan your next unforgettable event.
          </p>    
        </div>
      </div>
    </div>

    <div className='flex items-center ml-0 sm:ml-[180px] mt-[-20px] sm:mt-[110px] mb-[50px]'>
      <div className='bg-[#f2f2cb] m-[15px] max-w-[600px] px-[50px] py-[60px] z-[2] flex flex-col justify-center '>
        <div className='text-[54px] mb-[30px] font-serif'>
          <p>Effortless</p>
          <p>Elegance</p>
        </div>
        <p className='text-[18px]'> We create bespoke weddings and events that are inspired by our clients. We work collaboratively to ensure your event is cohesive and thoughtful. At Brilliant Event Planning, we believe that even the smallest details can have a huge impact. </p>
      </div>
      <img src={b1} alt='logo' className='hidden sm:flex absolute h-[480px] ml-[450px] object-contain' />
    </div>

    <div className='text-center py-0 sm:py-[30px] px-[30px] sm:mx-auto my-[50px] sm:my-[70px] max-w-[1000px] border-gray-300 border-y-0 sm:border-y-[2px]'>
      <p className='text-[16px]'>UNPARALLELED, STRESS-FREE</p>
      <h2 className="text-[30px] my-[20px] mt-[5px] font-semibold   ">EVENT PLANNING & DESIGN</h2>
      <p className='text-[14px] my-[10px] text-gray-500'>The experience is unlike any other. Our full-service event planning and design team will guide you every step of the way, ensuring a stress-free experience from start to finish.</p>
      <p className='text-[14px] my-[10px] text-gray-500'>With us, customization is guaranteed. From the very beginning, we will create a custom proposal tailored to your specific wants and needs. You'll be paired with a Team who will collaborate with you to bring your vision to life. We will team up with some of the best vendors and take care of all the details like meeting scheduling, delivery dates, payments, day-of setup, and more.</p>
      <p className='text-[14px] my-[10px] text-gray-500'>When it's showtime, our staff will work tirelessly to guarantee your event is effortless and unforgettable.</p>
    </div>

    <div className='flex ml-0 sm:ml-[150px] mt-[-20px] sm:mt-[110px] mb-[50px]'>
      <div className='bg-[#171c4a] m-[15px] max-w-[600px] px-[50px] py-[60px] z-[2] flex flex-col justify-center '>
        <div className='text-[54px] mb-[20px] font-serif text-white'>
          <p>Flawless</p>
          <p>Excecution</p>
        </div>
        <p className='text-[18px] text-white'> We specialize in planning and designing weddings and events in private homes and raw spaces. We pride ourselves on flawless execution with high level touches. Weekend affairs, multiple days of tent installation, ferries and travel logistics are a typical day at the office. </p>
      </div>
      <img src={b2} alt='logo' className='hidden sm:flex absolute w-[650px] mt-[-50px] ml-[550px] object-contain' />
    </div>

    <div className='border-t-[3px] border-b-[3px] mx-[20px] lg:mx-[200px] py-[20px] rounded-[25px] border-[#3285bd]'>
      <h2 className="text-[18px] sm:text-[23px] text-center my-[20px] mt-[5px] font-semibold text-[#3285bd]">Why Choose Together N Forever ?</h2>
      <div className='flex flex-col px-[20px] sm:px-0 sm:flex-row justify-evenly items-start'>
        <div className='max-w-[700px]'>
          <p className='text-[14px] my-[10px] text-gray-500'>We know how much important worth for the individual while performing an event, as the successful event would improve your image & value in the society.</p>
          <p className='text-[14px] my-[10px] text-gray-500'>Here, we pride ourselves on delivering exceptional event planning services that leave our clients delighted and impressed. Our team of experienced planners is dedicated to creating unique and unforgettable events that exceed expectations. With a focus on attention to detail, creativity, and strong communication, we work closely with our clients to bring their vision to life. Our track record of success is evidenced by our satisfied clients, industry recognition, and professional affiliations. </p>
          <p className='text-[14px] my-[10px] text-gray-500'>Choose us for your next event and experience the difference that our exceptional service and expertise can make.</p>
        </div>
        <div className='mx-[10px] my-[20px] sm:my-0'>
          <p className='text-[18px] font-semibold mb-[10px]'>Some key factors:</p>
          <ol className='text-[15px] list-disc ml-[30px]'>
            <li>Value for money</li>
            <li>Vision to Reality</li>
            <li>Venue Management</li>
            <li>Timeliness and Flexibility</li>
            <li>Attention to detail</li>
            <li>Good client testimonials</li>
          </ol>
        </div>
      </div>
    </div>

    </>
  )
}

export default Home