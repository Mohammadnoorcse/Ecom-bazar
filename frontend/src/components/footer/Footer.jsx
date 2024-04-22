import React from 'react'
import "./footer.css"
import {Link} from "react-router-dom"
export default function Footer() {
  return (
    <>
    <div className="top-footer content-center w-100">
        <div className="top-footer-content content">
            <div className="top-footer-content-1">
                <div>
                    <i class="fa-regular fa-envelope"></i>
                </div>
                <div>
                    <span>SUBSCRIBE TO OUR NEWSLETTER</span>
                    <span>Get all the latest information on Events, Sales and Offers.</span>
                </div>
            </div>
            <div className="top-footer-content-2">
                <div>
                    <span>DOWNLOAD OUR NEW APP TODAY!</span>
                    <span>Dont Miss our mobile-only offers and shop with Android Play.</span>
                </div>
                <div>
                    <Link to="/">
                        Download
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
