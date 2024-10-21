import React from 'react'

function Item(props) {
  return (
    <div className="item hover:scale-[1.05] hover:transition-[0.6s] w-[350px]">
        <img src={props.image} alt=""/>
        <p className="my-[6px] mx-[0px]">{props.name}</p>
        <div className="item-prices flex gap-[20px]">
            <div className="item-price-new textt-[#374151] text-[18px] font-semibold">
                ${props.new_price}
            </div>
            <div className="item-price-old text-[#8c8c8c] text-[18px] font-medium line-through">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item
