import './Rectangle.css'
import React from 'react'


export default function rectangle1() {
  return (
    <div className="mycolor w-full h-screen flex justify-center items-center">
  <div className="w-4/5 h-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="flex flex-col justify-center border-b-4 sm:border-b-0 sm:border-r-4 p-4">
      <div className="text-3xl mb-4 font-semibold font-montserrat">Welcome to web magnetism</div>
      <div className="text-sm font-montserrat mb-4">
        Your hub for bespoke web design and digital marketing success. We seamlessly merge 
        creativity and SEO expertise to craft visually stunning websites that magnetize audiences.
        Our digital marketing, from SEO mastery to impactful campaigns, ensures your brand's resonance online. 
        At Web Magnetism, we're not just designers; we're digital architects, sculpting unique online experiences
        that elevate your brand.
        Navigate the digital landscape with confidence – choose Web Magnetism for tailored web design and strategic 
        digital marketing, where innovation meets results for a compelling online journey.
      </div>
      <button className='btn w-36 h-10'>About us</button>
    </div>

    <div className="flex justify-center items-center">
      <img src="fourimg.png" alt="Four-images" />

    </div>
  </div>
</div>

  )
}
