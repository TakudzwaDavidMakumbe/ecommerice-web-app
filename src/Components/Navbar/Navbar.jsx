import React, { useState } from 'react';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';


function Navbar() {

    const [menu, setMenu] = useState("shop");


  return (
    <div className=" flex justify-around p-[16px] shadow-md ">
      <div className='flex items-center gap-[10px]' >
        <img src={logo} alt="" />
        <p className="text-[#171717] text-[38px] font-semibold">SHOPPER</p>
      </div>
      <ul className="nav-menu cursor-pointer flex items-center text-[20px] text-[#626262] gap-[50px] font-medium">
        <li onClick={()=>{setMenu("shop")}}className=""  >Shop {menu==="shop" ? <hr className=' border bg-red-600 border-none rounded-[10px] w-[80%] h-[3px]'/>:<></>}<Link style={{textDecoration: `none`}} to={'/'}>Shop</Link></li>
        <li onClick={()=>{setMenu("mens")}} className="">Men {menu==="mens" ? <hr className=' border bg-red-600 border-none rounded-[10px] w-[80%] h-[3px]'/>:<></>} <Link style={{textDecoration: `none`}} to={'/mens'}>Men</Link></li>
        <li onClick={()=>{setMenu("womens")}} className="">Woman {menu==="womens" ? <hr className=' border bg-red-600 border-none rounded-[10px] w-[80%] h-[3px]'/>:<></>} <Link style={{textDecoration: `none`}} to={'/womens'}>Women</Link></li>
        <li onClick={()=>{setMenu("kids")}} className="">Kids {menu==="kids" ? <hr className=' border bg-red-600 border-none rounded-[10px] w-[80%] h-[3px]'/>:<></> } <Link style={{textDecoration: `none`}} to={'/kids'}>Kids</Link></li><></>
      </ul>
      <div className="flex items-center gap-[45px]">
        <Link to={'/login'}> <button className="w-[157px] h-[58px] outline-none border-[#7a7a7a] border rounded-[75px] text-[#515151] font-medium text-[20px] bg-white cursor-pointer active:bg-[#f3f3f3]">Login</button></Link>
        <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>
        <div 
        className=" w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] rounded-[11px] text-[14px] bg-red-700 text-white">0</div>
      </div>
    </div>
  )
}

export default Navbar
