import React from 'react'

export default function HorizontalCards2() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className="center w-11/12 h-5/6">
      <div className="upper w-full h-40 flex">
        <div className="left w-3/6 h-full">
        <div className="cont w-48 h-14 font-montserrat font-semibold text-4xl">Our work</div>
        <div className="para w-full h-24 font-montserrat text-sm">We don’t claim to be gurus or wizards. We’re just a super experienced, passionate team who knows how to get results for our clients. All our work is custom and thoughtfully designed, written, and developed with your business goals in mind.</div>
        </div>
        <div className="right w-3/6 h-full">ome Content...</div>
      </div>
      <div className="lower w-full h-80 flex">
        <div className="left w-1/5 h-ful ml-16 rounded-lg">
        <div className="upper w-full h-4/5"> <img src="img6.png" className="w-full h-full object-cover" alt="img" /></div>
        <div className="middle w-full h-10 font-montserrat font-semibold text-lg"> Redesign of b2b website</div>
        <div className="lower w-full h-8 font-montserrat font-normal text-sm"> Web design </div>
        </div>
        <div className="left w-1/5 h-full ml-16 rounded-lg">
        <div className="upper w-full h-4/5"> <img src="img7.png" className="w-full h-full object-cover" alt="img" /></div>
        <div className="middle w-full h-10 font-montserrat font-semibold text-lg"> Mobile application</div>
        <div className="lower w-full h-8 font-montserrat font-normal text-sm"> App development </div>
        </div>
        <div className="left w-1/5 h-full ml-16 rounded-lg">
        <div className="upper w-full h-4/5"> <img src="img8.png" className="w-full h-full object-cover" alt="img" /></div>
        <div className="middle w-full h-10 font-montserrat font-semibold text-lg"> E-commerce shop</div>
        <div className="lower w-full h-8 font-montserrat font-normal text-sm"> Web development </div>
        </div>
        
        
      </div>
      </div>
      
      
    </div>
  )
}
