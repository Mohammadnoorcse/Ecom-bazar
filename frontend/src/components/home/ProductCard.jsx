import React from 'react'
import { Link } from 'react-router-dom'
import "./productcard.css"
export default function({value}) {
  return (
    <div className='product-card' key={value.id}>
        <Link to={`/product/${value.id}`}>
          <img src={value.img} alt="" srcset="" />
           <span className='product-name'>{value.name}</span>
           <span className='product-price'>৳{value.price}</span>
           <div className='product-card-1'>
            <span className='product-past'><del>{value.past_price}</del></span>
            <span className='product-discount'>-{value.discount}%</span>
           </div>
        </Link>
    </div>
  )
}
