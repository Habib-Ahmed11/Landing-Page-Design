import React from 'react'
import './Rectangle.css'

export default function HorizontalCards() {
  return (
    <>
    <div className='h-screen w-screen flex items-center justify-center'>
    <div className="center h-5/6 w-5/6  flex flex-col justify-center items-center"> 
        <div className="upper w-2/5 h-16  mx-auto font-montserrat font-semibold text-3xl text-center"> Overview of Services</div>
        <div className="lower w-full h-full  flex"> 
            <div className="left w-1/4 h-full ml-12">
            <div className="pic w-full h-2/4 "><img src="img1.png" alt="laptop" /></div>
            <div className=" w-full h-10 mt-4 font-montserrat font-semibold text-lg">Bespoke Web Design</div>
            <div className="para w-full h-28 mt-2 font-montserrat text-xs">Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat </div>
            <div className="w-full h-10 mt-2"><button className='btn w-52 h-7 text-white border-solid text-xs'>Bespoke Web Design</button></div>
            </div>
            <div className="left w-1/4 h-full ml-12">
            <div className="pic w-full h-2/4"><img src="img2.png" alt="laptop" /></div>
            <div className=" w-full h-10 mt-4 font-montserrat font-semibold text-lg">App Development</div>
            <div className="para w-full h-28 mt-2 font-montserrat text-xs">Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat </div>
            <div className="w-full h-10 mt-2"><button className='btn w-52 h-7 text-white border-solid text-xs'>App Development</button></div>
            </div>
            <div className="left w-1/4 h-full  ml-12">
            <div className="pic w-full h-2/4"><img src="img3.png" alt="laptop" /></div>
            <div className=" w-full h-10 mt-4 font-montserrat font-semibold text-lg">Digital Marketing</div>
            <div className="para w-full h-28 mt-2 font-montserrat text-xs">Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat </div>
            <div className="w-full h-10 mt-2"><button className='btn w-52 h-7 text-white border-solid text-xs'>Digital Marketing</button></div>
            </div>
            
        </div>
    </div>
</div>
<div className="img h-48 w-screen flex flex-col items-center relative">
    <img src="img4.png" alt="Image 1" className="w-full h-auto"/>
    <img src="img5.png" alt="Image 2" className="w-full h-auto absolute top-1/2 transform -translate-y-1/2"/>
</div>
</>



  )
}
