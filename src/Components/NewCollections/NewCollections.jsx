import React from 'react'
import new_collection from '../assets/new_collections'
import Item from '../Item/Item'

function NewCollections() {
  return (
    <div className='new-collection flex flex-col items-center gap-10px mb-[100px] '>
      <h1 className="text-[rgb(23,23,23)] text-[50px] font-semibold ">NEW COLLECTIONS</h1>
      <hr className='w-[200px] mt-[9px] h-[6px] rounded-[10px] pb-[6px] mb-[30px] bg-[#252525] ' />
      <div className="collections pt-[40px]  mt[50px]  grid grid-cols-2 gap-[30px]  ">
        {new_collection.map((item,i)=>{
             return<Item  key ={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections
