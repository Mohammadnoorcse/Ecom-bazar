
import "./cart.css"
export default function Cart() {
  return (
    <div className="cart content-center w-100">
      <div className="cart-content content">
        <div className="cart-content-1">
          <h3>Your shopping cart</h3>
          <div className="cart-item">
             <div className="cart-item-1">
              <div>
                <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
              </div>
              <div>
                <span>Winter jacket for men and lady</span>
                <span>Yellow, Jeans</span>
              </div>
             </div>
             <div className="cart-item-2">
              <div>
                <button>+</button>
                <span>1</span>
                <button>-</button>
              </div>
              <div></div>
             </div>
             <div className="cart-item-3"></div>
          </div>
        </div>
        <div className="cart-content-2"></div>
      </div>

    </div>
  )
}
