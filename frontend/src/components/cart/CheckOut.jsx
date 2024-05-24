import "./checkout.css"

const CheckOut = () => {
  return (
    <div className="checkout w-100 content-center">
      <div className="checkout-content content">
         <div className="checkout-content-1">
         <h3>Checkout Page</h3>
        <div className="checkout-item">
            <div className="checkout-item-1">
                <div>
                    <span>Name</span>
                    <input type="text" />
                </div>
                 <div>
                    <span>Last Name</span>
                    <input type="text" />
                 </div>
            </div>
            <div className="checkout-item-1">
                <div>
                    <span>Email</span>
                    <input type="email" />
                </div>
                 <div>
                    <span>Phone number</span>
                    <input type="text" />
                 </div>
            </div>
            <div className="checkout-item-1">
                <div>
                    <span>Country</span>
                    <input type="text" />
                </div>
                 <div>
                    <span>City</span>
                    <input type="text" />
                 </div>
            </div>
            <div className="checkout-item-2">
                <div>
                    <span>Street Address</span>
                    <input type="text" />
                </div>
        
            </div>
            <div className="checkout-item-1">
                <div>
                    <span>Area</span>
                    <input type="text" />
                </div>
                 <div>
                    <span>Post Code</span>
                    <input type="text" />
                 </div>
            </div>
            <div className="checkout-item-3">
               <span>Payment Method</span>
               <div className="checkout-checkbox">
                    <div>
                      <input type="radio" id="cashondelivery" name="payment" value="cashondelivery"/>
                      <label for="cashondelivery"> Cash On Delivery</label>
                    </div>
                    <div>
                      <input type="radio" id="Online" name="payment" value="Online"/>
                      <label for="Online"> Online</label>
                    </div>
               </div>
            </div>
        </div>
         </div>
         <div className="checkout-content-2"></div>
      </div>
    </div>
  )
}

export default CheckOut