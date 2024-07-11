import React from 'react'

export default function HorizontalCards1() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <div className="cen w-4/5 h-4/5 flex flex-col items-center">
        <div className="upper w-3/5 h-11 flex justify-center font-montserrat font-semibold text-3xl">What our clients say about us</div>
        <div className="middle w-full h-4/6 mt-16 flex">
        <div className="left w-72 h-full rounded-lg flex flex-col items-center">
    <div className="pic w-24 h-24"> <img src="profile1.png" alt="A man" /></div>
    <div className="cont w-full h-5/6 flex flex-col items-center">
    <div className="star w-24 h-5  mt-4"><img src="stars.png" alt="Rating" /></div>
    <div className="cont1 w-full h-5/6  font-montserrat text-base ">
    <div className='w-full h-5/6 '>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</div>
    <div className='w-full h-10  font-semibold'>Maria Bend, Director</div>
    </div>
    <div className="remain w-full h-7"></div>
    </div>
</div>
        <div className="left w-72 h-full ml-10 rounded-lg flex flex-col items-center">
    <div className="pic w-24 h-24"> <img src="profile2.png" alt="A man" /></div>
    <div className="cont w-full h-5/6  flex flex-col items-center">
    <div className="star w-24 h-5  mt-4"><img src="stars.png" alt="Rating" /></div>
    <div className="cont1 w-full h-5/6 font-montserrat text-base ">
    <div className='w-full h-5/6 '>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</div>
    <div className='w-full h-10 font-semibold'>Maria Bend, Director</div>
    </div>
    <div className="remain w-full h-7 "></div>
    </div>
</div>
        <div className="left w-72 h-full ml-10 rounded-lg flex flex-col items-center">
    <div className="pic w-24 h-24"> <img src="profile3.png" alt="A man" /></div>
    <div className="cont w-full h-5/6 flex flex-col items-center">
    <div className="star w-24 h-5  mt-4"><img src="stars.png" alt="Rating" /></div>
    <div className="cont1 w-full h-5/6 font-montserrat text-base ">
    <div className='w-full h-5/6'>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</div>
    <div className='w-full h-10 font-semibold'>Maria Bend, Director</div>
    </div>
    <div className="remain w-full h-7"></div>
    </div>
</div>

        
        </div>
    </div>
</div>

  )
}
