import React from 'react'

export default function Cards() {
  return (
    <div className="h-svh w-screen bg-gray-200 flex items-center justify-center">
  <div className="h-3/4 w-4/5 flex flex-col items-center justify-center">
    <div className='w-72 h-12 flex justify-center items-center mb-4'>
      <div className='text-4xl font-normal font-montserrat'><p>Why Choose Us</p></div>
    </div>
    <div className="w-full h-3/5 flex items-center justify-center flex-col sm:flex-row">
    <div className="basis-2/6 rounded mr-3 bg-white h-full flex flex-col mt justify-center w-full sm:w-auto">
  <div className="w-11/12 h-2/6 relative flex items-center justify-between  mt-4 mx-auto">
    <div className="w-4/12 h-full">
      <img src="left.png" alt="hand-icon" className="w-full h-full"/>
    </div>
    <div className=" w-3/5 h-full font-semibold text-base font-montserrat">
      Take Control of Your Entire Marketing Landscape
    </div>
  </div>

  <div className="w-11/12 h-3/6 flex items-center align-bottom mt-6 font-montserrat mx-auto"> We've curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires. </div>
</div>

      <div className="basis-2/6 rounded mr-3 bg-white h-full flex flex-col mt justify-center w-full sm:w-auto">
      <div className="w-11/12 h-2/6 relative flex items-center justify-between  mt-4 mx-auto">
    <div className="w-4/12 h-full">
      <img src="left.png" alt="hand-icon" className="w-full h-full"/>
    </div>
    <div className="w-3/5 h-full">
      <p className="font-semibold text-base font-montserrat">Your Business's Dedicated Marketing Wing</p>
    </div>
  </div>

  <div className="w-11/12 h-3/6 flex items-center align-bottom mt-6 font-montserrat mx-auto"> Even if your business is modest in size, having a well-versed extension focused on digital marketing provides a distinct competitive edge. </div>
      </div>

      <div className="basis-2/6 rounded mr-3 bg-white h-full flex flex-col mt justify-center w-full sm:w-auto">
  <div className="w-11/12 h-2/6 relative flex items-center justify-between mt-4 mx-auto">
    <div className="w-4/12 h-full">
      <img src="left.png" alt="hand-icon" className="w-full h-full"/>
    </div>
    <div className="w-3/5 h-full">
      <p className="font-semibold text-base font-montserrat">A Reliable Collaborator</p>
    </div>
  </div>

  <div className="w-11/12 h-3/6 flex items-center align-bottom mt-6 font-montserrat mx-auto">
    Our exceptional team members function seamlessly as an integral part of your team, fully committed to your success and the sanctity of your brand.
  </div>
</div>

    </div>
  </div>
</div>





  )
}
