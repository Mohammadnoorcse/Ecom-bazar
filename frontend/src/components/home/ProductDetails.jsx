
import React, { useState } from 'react';

import "./productdetails.css"

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Rating } from "@material-ui/lab"



export default function ProductDetails() {

    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);

    const images = [
        { original: 'https://picsum.photos/id/1018/1000/600/', thumbnail: 'https://picsum.photos/id/1018/250/150/' },
        { original: 'https://picsum.photos/id/1015/1000/600/', thumbnail: 'https://picsum.photos/id/1015/250/150/' },
        { original: 'https://picsum.photos/id/1019/1000/600/', thumbnail: 'https://picsum.photos/id/1019/250/150/' }
     
      ];
    
      const galleryItems = images.map((image, index) => ({
        original: image.original,
        thumbnail: image.thumbnail,
        originalWidth: 200, // Set original width
        originalHeight: 250,
        // description: `Image ${index + 1}`
      }));
   
      const options = {
        size: "small",
        // value: product.ratings,
        value:3.5,
        readOnly: true,
        precision: 0.5,
      };

     
      const increaseQuantity = () => {
        // if (product.Stock <= quantity) return;
    
        const qty = quantity + 1;
        setQuantity(qty);
      };
    
      const decreaseQuantity = () => {
        // if (1 >= quantity) return;
    
        const qty = quantity - 1;
        setQuantity(qty);
      };
      const submitReviewToggle = () => {
        open ? setOpen(false) : setOpen(true);
      };
   
    return (
        <div className='product-detail content-center w-100'>
            <div className="product-detail-content content">
                <div className="product-detail-1">
                    <div className="product-detail-1-1">
                      <ImageGallery 
                       items={galleryItems}  
                       showNav={false} // Set to false to hide both left and right arrows
                       showFullscreenButton={false}
                       showPlayButton={false}
                      
                       />;
                    </div>
                    <div className="product-detail-1-2">
                        {/* <span>Meat vegetable</span> */}
                        <div className='product-detail-1-2-1'>
                         <span>Meat vegetable</span>
                          <p>12395960060-777666</p>
                        </div>
                        <div className='product-detail-1-2-2'>
                        <Rating {...options} />
                        <span className='rating-reviews'>(42 Reviews)</span>
                        </div>
                        <div className="product-detail-1-2-3">
                            <span>৳120</span>
                            <div>
                                <del>৳200</del>
                                <span>-50%</span>
                            </div>
                        </div>

                        <div className="product-detail-1-2-4">
                            <div className="product-detail-1-2-4-1">
                              <button onClick={decreaseQuantity}>-</button>
                              {/* <input readOnly type="number" value={quantity} /> */}
                              <span>{quantity}</span>
                              <button onClick={increaseQuantity}>+</button>
                            </div>
                            <button className='cart-button'
                    // disabled={product.Stock < 1 ? true : false}
                            // onClick={addToCartHandler}
                            >
                              Add to Cart
                            </button>
                        </div>

                        <div className="product-detail-1-2-5">
                            <span>Size :</span>
                            <div className="product-detail-1-2-5-1">
                            <div>
                                <input type="checkbox" id="xxl" name="vehicle1" value="XXL"/>
                                <label for="xxl">XXL</label>
                            </div>
                            </div>
                        </div>

                        <div className="product-detail-1-2-6">
                            <span>Product Type :</span>
                            <span>Women</span>
                        </div>
                        <div className="product-detail-1-2-6">
                            <span>Category :</span>
                            <span>is simply dummy text of the printing </span>
                        </div>
                        <div className="product-detail-1-2-6">
                            <span>Stock :</span>
                            <span>is simply dummy text of the printing </span>
                        </div>
                        <div className="product-detail-1-2-7">
                            <span>Description :</span>
                            <span>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                                 PageMaker including versions of Lorem Ipsum </span>
                        </div>
                        <div className="product-detail-1-2-8">
                         <button onClick={submitReviewToggle}>Submit Review</button>
                        </div>
                        <div className={open?"product-detail-1-2-9":"product-detail-1-2-9-display"}>
                         <form action="">
                            <span className='review-header'>Submit Review</span>
                            <Rating
                                onChange={(e) => setRating(e.target.value)}
                                value={rating}
                                size="small"
                            />
                            <textarea name="" id=""></textarea>
                            <div>
                                <button>submit</button>
                                <button onClick={submitReviewToggle}>cancel</button>
                                
                            </div>
                         </form>
                        </div>
                        
                    </div>
                     
               
                </div>
            </div>
        </div>
    );
}