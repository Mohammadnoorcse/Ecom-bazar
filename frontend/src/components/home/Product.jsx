import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import {product} from "./home.js"
import ProductCard from './ProductCard.jsx'

function Product() {
  return (
    <div className='product content-center w-100'>
        <div className="product-content content">
            <div className="product-content-title">
                <span>Hot Product</span>
                 <Link to="/all-product">More Product<i class="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="product-item">
                {/* {product.map((value,index)=>(
                     
                ))} */}
                 {product.slice(0, 12).map((value, index) => (
                    <ProductCard key={index} value={value} />
                 ))}
            </div>
        </div>

    </div>
  )
}

export default Product