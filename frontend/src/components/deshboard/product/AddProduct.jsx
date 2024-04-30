import React, { useState } from 'react';

export default function AddProduct() {
    const [selectedImages, setSelectedImages] = useState([]);

    // const handleImageChange = (e) => {
    //     const files = e.target.files;
    //     if (files) {
    //       const imagesArray = [];
    //       for (let i = 0; i < files.length; i++) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //           imagesArray.push(reader.result);
    //           if (imagesArray.length === files.length) {
    //             setSelectedImages(imagesArray);
    //           }
    //         };
    //         reader.readAsDataURL(files[i]);
    //       }
    //     }
    //   };

    const handleImageChange = (e) => {
        const files = e.target.files;
        if (files) {
          const imagesArray = [];
          for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onloadend = () => {
              imagesArray.push(reader.result);
              if (imagesArray.length === files.length) {
                setSelectedImages(imagesArray);
              }
            };
            reader.onerror = (error) => {
              console.error('File reading error:', error);
            };
            reader.readAsDataURL(files[i]);
          }
        }
      };

    console.log(selectedImages);
  return (
    <div className='addproduct'>
        <div className="addproduct-title">
            <span>Add New Product</span>
             <span>x</span>
        </div>
         <div className="addproduct-item">
            <div className="addproduct-item-1">
                
                 <form action="">
                    <span className='addproduct-title'>Base Information</span>
                     <div className='addproduct-border addproduct-1-1'>
                        <div className="addproduct-div">
                           <span>Name</span>
                            <input type="text"  placeholder='Enter Product Name'/>
                        </div>
                        <div className="addproduct-div">
                           <span>Description</span>
                            <textarea type="text"></textarea>
                        </div>
                    </div>

                    <span className='addproduct-title'>Picture</span>
                    <div className="addproduct-border addproduct-1-2">
                     {/* <input type="file" accept="image/*" multiple onChange={handleImageChange}  />
                      <span>hii</span> */}

                     {selectedImages.length > 0 && (
                        <div className="addproduct-1-2-value">
                            {selectedImages.map((image, index) => (
                            <div key={index} >
                                <img src={image} alt={`Preview ${index}`}  />
                            </div>
                            ))}
                        </div>
                      )} 
    
                      <div className='addproduct-1-2-input'>
                      <label class="picture" for="picture__input" tabIndex="0">
                        <span class="picture__image"></span>
                        </label>
                        <input type="file" name="picture__input" id="picture__input" accept="image/*" multiple onChange={handleImageChange}/>
                      </div>
                    </div>

                    <span className='addproduct-title'>Details</span>
                    <div className="addproduct-border addproduct-1-1">
                       <div className="addproduct-1-1-item">
                           <div className="addproduct-price">
                            <span>Price</span>
                            <input type="text" placeholder='Enter the Price' />
                           </div>
                           <div className="addproduct-price">
                            <span>Stock</span>
                            <input type="text" placeholder='Enter the Stock Number' />
                           </div>
                           
                       </div>
                       <div className="addproduct-1-1-item">
                           <div className="addproduct-price">
                            <span>Discount</span>
                            <input type="text" placeholder='Enter the Discount' />
                           </div>
                           <div className="addproduct-price">
                            <span>Discount Type</span>
                            <input type="text" placeholder='Enter the Discount Type' />
                           </div>
                           
                       </div>

                       <div className="addproduct-1-1-item">
                        <div className="addproduct-size">
                            <span>Size</span>
                            <div className='addproduct-size-checkobox'>
                                <div>
                                <input type="checkbox" id="xxl" name="vehicle1" value="XXL"/>
                                <label for="xxl">XXL</label>
                                </div>
                                <div>
                                <input type="checkbox" id="xl" name="vehicle1" value="XL"/>
                                <label for="xl">XL</label>
                                </div>
                                <div>
                                <input type="checkbox" id="sx" name="vehicle1" value="SX"/>
                                <label for="sx">SX</label>
                                </div>
                                <div>
                                <input type="checkbox" id="m" name="vehicle1" value="M"/>
                                <label for="m">M</label>
                                </div>
                                <div>
                                <input type="checkbox" id="s" name="vehicle1" value="S"/>
                                <label for="s">S</label>
                                </div>
                            
                            </div>

                        </div>
                        <div className="addproduct-gender">
                            <span>Gender</span>
                            <div className="addproduct-gender-checkbox">
                                <div>
                                <input type="radio" name="gender" id="men" value="Men"/>
                                <label for="men">Men</label>
                                </div>
                                <div>
                                <input type="radio" name="gender" id="women" value="Women"/>
                                <label for="women">Women</label>
                                </div>
                            </div>
                        </div>
                       </div>
                        
                    </div>

                    <span className='addproduct-title'>Category</span>
                    <div className="addproduct-border addproduct-1-1">
                    <select name="cars" id="cars" >
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                        <option value="audi">Audi</option>
                        <option value="audi">Audi</option>
                        <option value="audi">Audi</option>
                        <option value="audi">Audi</option>
                        </select>
                    </div>

                    <button type='submit'>Submit</button>

                 </form>
            </div>
            <div className="addproduct-item-2">

            </div>
         </div>
    </div>
  )
}
