import React from 'react'

function Newsletter() {
  return (
    <div className="w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto py-[0px] px-[140px] mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] gap-[30px] ">
      <h1 className=" text-[#454545] pt-[50px] font-extrabold text-[30px]  ">GET Exclusive Offers On Your Email </h1>
      <p className="text-[#454545] text-[20px] "> Subscribe to our newsletter and stay updated </p>
      <div className="flex items-center justify-center bg-white w-[730px] h-[70px] rounded-[80px] border border-[#e3e3e3]">
            <input type="email" placeholder ="Your Email I.D" 
            className='w-[500px] ml-[30px] border-none outline-none text-[#616161] font-poppins text-[16px]' />
            <button className='w-[210px] h-[70px] bg-black text-white text-[16px] cursor-pointer'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
