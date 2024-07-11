import React from 'react'
import './Rectangle.css'

export default function VerticalCards() {
  return (
    <div className='h-140vh w-screen flex justify-center items-center' style={{background:"linear-gradient(96.43deg, #5B53F9 -16.57%, #AC71D6 35.61%, #FF8E57 113.87%)"}}>
      
      <div className="center w-4/5 h-4/5  ">
        <div className="left w-2/5 h-2/5  " style={{float:"left"}}> 
        <div className="upper w-full h-2/6  font-montserrat font-semibold text-3xl text-white">Our bespoke website include the fllowing</div>
        <div className="middle w-full h-2/6  mt-4 font-montserrat font-light text-sm text-white">Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsa</div>
        <div className="lower w-full h-1/5  mt-4"><button className='btn w-40 h-9 text-white border-solid'>Contact us</button></div>
        </div>

        
        <div className="right h-full w-2/4  " style={{float:"right"}}>
            <div className="upper w-10/12 h-1/3 bg-white rounded-lg flex items-center justify-center" style={{margin: "auto", marginTop: "20px"}}>
            <div className="center w-10/12 h-full">
            <div className="left w-14 h-14">
                <img src="f-icon.png" alt="circle-icon" />
            </div>
            <div className="left w-full h-10 mt-2 font-semibold text-xl font-montserrat"> Bespoke Design</div>
            <div className="left w-full h-2/5 mt-5 text-sm font-montserrat"> Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.</div>
            </div>
            </div>
            <div className="upper w-10/12 h-1/3 bg-white rounded-lg flex items-center justify-center" style={{margin: "auto", marginTop: "20px"}}>
            <div className="center w-10/12 h-full">
            <div className="left w-14 h-14">
                <img src="f-icon.png" alt="circle-icon" />
            </div>
            <div className="left w-full h-10  mt-2 font-semibold text-xl font-montserrat"> Mobile Optimised</div>
            <div className="left w-full h-2/5 mt-5 text-sm font-montserrat"> Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.</div>
            </div>
            </div>
            <div className="upper w-10/12 h-1/3 bg-white rounded-lg flex items-center justify-center" style={{margin: "auto", marginTop: "20px"}}>
            <div className="center w-10/12 h-full">
            <div className="left w-14 h-14">
                <img src="f-icon.png" alt="circle-icon" />
            </div>
            <div className="left w-full h-10 mt-2 font-semibold text-xl font-montserrat"> SEO Optimised</div>
            <div className="left w-full h-2/5 mt-5 text-sm font-montserrat"> Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.</div>
            </div>
            </div>

            
        </div>
      </div>


    </div>
  )
}
