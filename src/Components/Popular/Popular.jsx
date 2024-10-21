import React from 'react'
import data_product from '../assets/data'
import Item from '../Item/Item'

function Popular() {
  return (
    <div className="popular mt-[50px]  flex flex-col items-center h-[90vh] gap-[10px]  ">
      <h1 className='text-[#171717] text-[50px] font-semibold'>POPULAR IN WOMAN</h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
      <div className="popular-item pt-[40px] mt[50px] w-[85%] flex gap-[30px] ">
        {data_product.map((item,i)=>{
            return<Item  key ={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular
