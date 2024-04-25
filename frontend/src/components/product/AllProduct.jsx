import React from 'react'
import "./allproduct.css";
import {product} from "../home/home.js"
import ProductCard from '../home/ProductCard.jsx';

export default function AllProduct() {
  return (
    <div className='allproduct content-center w-100'>
        <div className="allproduct-content content">
            <div className="allproduct-item">
            {product.map((value)=>(
                    <ProductCard  value={value}/>
                ))}
            </div>

            {/* <div className="allproduct-filter">

            </div> */}

        </div>

    </div>
  )
}
