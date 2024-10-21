import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

function Hero() {
  return (
    <div className='hero h-[100vh] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]
    flex '
    >

        {/* hero left */}
        <div className="hero-left flex flex-1 flex-col justify-center gap-[20px] pl-[180px] leading-[1.1]">
            <h2 className="text-[#090909] text-[26px] font-semibold">NEEW ARRIVALS ONLY</h2>
            <div className="">
                <div className="hand-hand-icon flex items-center gap-[20px]">
                    <p className='text-[#171717] text-[60px] font-bold' >new</p>
                    <img src={hand_icon} alt="" className='w-[105px]' />
                </div>
                <p className='text-[#171717] text-[60px] font-bold'>collections</p>
                <p className='text-[#171717] text-[60px] font-bold'>for everyone</p>
            </div>
            <div className="hero-latest-btn flex justify-center items-center gap-[15px] w-[310px] h-[70px] border rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[22px] font-medium">
                <div className="">Latest Collection </div>
                <img src={arrow_icon}  alt="" />
            </div>
        </div>

        {/* hero right  */}
        <div className="hero-right flex flex-1 items-center justify-center">
            <img src={hero_image} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
