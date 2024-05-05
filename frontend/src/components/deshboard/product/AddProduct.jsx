import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  createProduct,
} from "../../../Redux/actions/productAction";
import { useAlert } from "react-alert";
import { NEW_PRODUCT_RESET } from "../../../Redux/constants/productConstants";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.newProduct);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [price, setPrice] = useState(0);
  const [Stock, setStock] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("");
  const [size, setSize] = useState([]);
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

// Function to handle checkbox changes
const handleSizeChange = (event) => {
  const { value, checked } = event.target;
  let updatedSizes = [...size]; // Copy the current size array

  if (checked) {
      // If checkbox is checked, add the value to the size array
      updatedSizes.push(value);
  } else {
      // If checkbox is unchecked, remove the value from the size array
      updatedSizes = updatedSizes.filter(item => item !== value);
  }

  setSize(updatedSizes);
};


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Product Created Successfully");
      navigate("/deshboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, navigate, success]);



  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("description", description);
    myForm.set("price", price);
    myForm.set("discount", discount);
    myForm.set("discountType", discountType);
    myForm.set("gender", gender);
    myForm.set("category", category);
    myForm.set("Stock", Stock);
    
    size.forEach((size) => {
      myForm.append("size", size);
    });

    selectedImages.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProduct(myForm));
  };

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
        reader.readAsDataURL(files[i]);
      }
    }
  };

  return (
    <div className="addproduct">
      <div className="addproduct-title">
        <span>Add New Product</span>
        {/* <span >x</span> */}
      </div>
      <div className="addproduct-item">
        <div className="addproduct-item-1">
          <form action=""
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <span className="addproduct-title">Base Information</span>
            <div className="addproduct-border addproduct-1-1">
              <div className="addproduct-div">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Enter Product Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="addproduct-div">
                <span>Description</span>
                <textarea
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            <span className="addproduct-title">Picture</span>
            <div className="addproduct-border addproduct-1-2">
              {/* <input type="file" accept="image/*" multiple onChange={handleImageChange}  />
                      <span>hii</span> */}

              {selectedImages.length > 0 && (
                <div className="addproduct-1-2-value">
                  {selectedImages.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Preview ${index}`} />
                    </div>
                  ))}
                </div>
              )}

              <div className="addproduct-1-2-input">
                <label class="picture" for="picture__input" tabIndex="0">
                  <span class="picture__image"></span>
                </label>
                <input
                  type="file"
                  name="avatar"
                  id="picture__input"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                />
              </div>
            </div>

            <span className="addproduct-title">Details</span>
            <div className="addproduct-border addproduct-1-1">
              <div className="addproduct-1-1-item">
                <div className="addproduct-price">
                  <span>Price</span>
                  <input
                    type="text"
                    placeholder="Enter the Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="addproduct-price">
                  <span>Stock</span>
                  <input
                    type="text"
                    placeholder="Enter the Stock Number"
                    value={Stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
              </div>
              <div className="addproduct-1-1-item">
                <div className="addproduct-price">
                  <span>Discount</span>
                  <input
                    type="text"
                    placeholder="Enter the Discount"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>
                <div className="addproduct-price">
                  <span>Discount Type</span>
                  <input
                    type="text"
                    placeholder="Enter the Discount Type"
                    value={discountType}
                    onChange={(e) => setDiscountType(e.target.value)}
                  />
                </div>
              </div>

              <div className="addproduct-1-1-item">
                <div className="addproduct-size">
                  <span>Size</span>
                  <div className="addproduct-size-checkobox">
                    {/* <div>
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
                                </div> */}

<div>
                <input 
                    type="checkbox" 
                    id="xxl" 
                    name="size" 
                    value="XXL"
                    checked={size.includes("XXL")}
                    onChange={handleSizeChange}
                />
                <label htmlFor="xxl">XXL</label>
            </div>
            <div>
                <input 
                    type="checkbox" 
                    id="xl" 
                    name="size" 
                    value="XL"
                    checked={size.includes("XL")}
                    onChange={handleSizeChange}
                />
                <label htmlFor="xl">XL</label>
            </div>
            <div>
                <input 
                    type="checkbox" 
                    id="sx" 
                    name="size" 
                    value="SX"
                    checked={size.includes("SX")}
                    onChange={handleSizeChange}
                />
                <label htmlFor="sx">SX</label>
            </div>
            <div>
                <input 
                    type="checkbox" 
                    id="m" 
                    name="size" 
                    value="M"
                    checked={size.includes("M")}
                    onChange={handleSizeChange}
                />
                <label htmlFor="m">M</label>
            </div>
            <div>
                <input 
                    type="checkbox" 
                    id="s" 
                    name="size" 
                    value="S"
                    checked={size.includes("S")}
                    onChange={handleSizeChange}
                />
                <label htmlFor="s">S</label>
            </div>

                  </div>
                </div>
                <div className="addproduct-gender">
                  <span>Gender</span>
                  <div className="addproduct-gender-checkbox">
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        id="men"
                        value="Men"
                        checked={gender === "Men"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label for="men">Men</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        id="women"
                        value="Women"
                        checked={gender === "Women"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label for="women">Women</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span className="addproduct-title">Category</span>
            <div className="addproduct-border addproduct-1-1">
              <select
                name="cars"
                id="cars"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose Category</option>
                {/* <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                        <option value="audi">Audi</option>
                        <option value="audi">Audi</option>
                        <option value="audi">Audi</option>
                        <option value="audi">Audi</option> */}
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="addproduct-item-2"></div>
      </div>
    </div>
  );
}
