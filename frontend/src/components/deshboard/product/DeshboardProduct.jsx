import React from 'react'
import "./deshboardproduct.css"
import DeshboardSidebar from '../DeshboardSidebar'
import AddProduct from './AddProduct'
export default function DeshboardProduct() {
  return (
    <div className='deshboard-product content-center w-100'>
        <div className="deshboard-product-content content">
            <div className="deshboard-product-content-item">
                <DeshboardSidebar/>
                <div className="deshboard-product-item-value">
                    <div className="deshboard-product-item-value-title">
                        <div className="product-title-left">
                            <span>Product</span>
                        </div>
                         <div className="product-title-right">
                            <span className='header'>Add Product</span>
                            <div className="product-title-right-child">
                              <AddProduct/>   
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
