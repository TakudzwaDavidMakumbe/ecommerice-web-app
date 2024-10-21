import React from 'react'
import exclusive_image from '../assets/exclusive_image.png'

function Offers() {
  return (
    <div className="offers w-[70%] h-[60vh] flex m-auto px-[140px] py-[0px] mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] justify-between ">
        <div className="offers-left flex flex-1 flex-col justify-center  pr-[30px]">
            <h1 className="text-[#171717] text-[80px] font-semibold">Exclusive</h1>
            <h1 className="text-[#171717] flex-wrap text-[40px] font-semibold">Offers For You</h1>
            <p className="text-[#171717] font-semibold text-[20px] ">ONLY ON BEST SELLERS PRODUCTS</p>
            <button className="w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-medium mt-[30px] cursor-pointer">Check Now</button>
        </div>
        <div className="offers-right flex items-center justify-end  pt-[50px] flex-1 ">
            <img src={exclusive_image} alt="" />
        </div>
      
    </div>
  )
}

export default Offers
