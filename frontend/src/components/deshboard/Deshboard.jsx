import React from 'react'
import "./deshboard.css"
import {Link} from "react-router-dom"
import {cardItem} from "./data.js"
import Card from './Card.jsx'
import EarnChart from './EarnChart.jsx'
export default function Deshboard() {
  return (
    <div className='deshboard content-center w-100 '>
        <div className="deshboard-content content">
            <div className="deshboard-content-item">
                <div className="deshboard-sidebar">
                    <div className="deshboard-sidebar-title">
                        <span>Ecom-Bazar</span>
                    </div>
                    <div className="deshboard-sidebar-value">
                        <div>
                            <Link to="/">
                             <span><i class="fa-solid fa-landmark"></i></span>
                             <span>Deshboard</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                             <span><i class="fa-solid fa-shirt"></i></span>
                             <span>Product</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                             <span><i class="fa-solid fa-bicycle"></i></span>
                             <span>Order</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                             <span><i class="fa-solid fa-check"></i></span>
                             <span>Sales</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                             <span><i class="fa-solid fa-lock-open"></i></span>
                             <span>Logout</span>
                            </Link>
                        </div>
                    </div>
                </div>
                 <div className="deshboard-item">

                    <div className="deshboard-item-title">
                        <div className="deshboard-item-title-left">
                            <span>Deshboard</span>
                        </div>
                        <div className="deshboard-item-title-right">
                        <div className="deshboard-item-title-right-1">
                            <input type="text" placeholder='Search here' />
                        </div>
                        <div className="deshboard-item-title-right-2">
                            <img src="https://as2.ftcdn.net/v2/jpg/02/14/74/61/1000_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="deshboard-item-value">
                        <div className="deshboard-item-value-1">
                            <div className="deshboard-item-value-1-1">
                                {cardItem.map((value) =>(
                                    <Card key={value.id} value= {value}/>
                                ))}
                            </div>
                            <div className="deshboard-item-value-1-2">
                                <div className="deshboard-item-value-1-2-title">
                                    <div>
                                        <span>Earning Analytics</span>
                                    </div>
                                    <div>
                                        <span>month</span>
                                        <i class="fa-solid fa-angle-down"></i>
                                    </div>
                                </div>
                                <div className="deshboard-item-value-1-2-earn">
                                    <EarnChart/>
                                </div>

                                
                            </div>
                        </div>
                    </div>

                 </div>
            </div>
        </div>
    </div>
  )
}

