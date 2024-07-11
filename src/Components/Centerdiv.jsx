import React from 'react'

export default function Centerdiv() {
    
  return (
    <div className="flex flex-col items-center justify-center h-screen  space-y-8 pb-11">
    <div className="w-3/5 h-52 flex justify-center items-center  mt-20 mx-auto">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-full h-2/4  flex justify-center items-center">
          <p className="text-4xl text-center font-montserrat">An Integrated Team for unique Web design and strategic digital marketing</p>
        </div>
        <div className="w-4/5 h-2/4  flex justify-center items-center">
          <p className="text-center font-montserrat">
            Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit.
            Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan.
          </p>
        </div>
      </div>
    </div>

    <div className="funnel w-2/6 h-3/6  flex items-center justify-center">
      <img src="funnel.png" alt="Funnel img" className="max-w-full max-h-full object-contain" />
    </div>
  </div>
  )
}


