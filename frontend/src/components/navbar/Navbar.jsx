import Topnavbar from "./Topnavbar";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <Topnavbar />
      <div className="navbar content-center w-100">
        <div className="navbar-content content">
          <div className="navbar-content-1">
            <Link to="/">Ecom-Bazar</Link>
          </div>
          <div className="navbar-content-2">
            <form action="">
              <input type="text" />
              <button type="submit">
                <i class="fas fa-search" style={{ color: "white" }}></i>
              </button>
            </form>
            <div className="search-result">
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
            </div>
          </div>
          <div className="navbar-content-3">
            <div className="navbar-content-3-1">
              <i class="fa-regular fa-user"></i>
              <Link to="/">sign in</Link>
            </div>
            <div className="navbar-content-3-2">
              <div>
                <Link to="/">
                  <i class="fa-regular fa-heart"></i>
                  <span>wishList</span>
                </Link>
              </div>
              <div>
                <Link to="/">
                  <i class="fa-solid fa-code-compare"></i>
                  <span>compare</span>
                </Link>
              </div>
              <div className="navbar-content-3-2-3">
                <Link to="/">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span>cart</span>
                  <span className="items">0</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-navbar content-center w-100">
        <div className="mobile-navbar-content content">
          <div className="mobile-navbar-content-1">
            <div className="navbar-content-1">
              <Link to="/">Ecom-Bazar</Link>
            </div>
            <div className="navbar-content-3">
              <div className="navbar-content-3-1">
                <i class="fa-regular fa-user"></i>
                <Link to="/">sign in</Link>
              </div>
              <div className="navbar-content-3-2">
                <div>
                  <Link to="/">
                    <i class="fa-regular fa-heart"></i>
                    <span>wishList</span>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <i class="fa-solid fa-code-compare"></i>
                    <span>compare</span>
                  </Link>
                </div>
                <div className="navbar-content-3-2-3">
                  <Link to="/">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>cart</span>
                    <span className="items">0</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-navbar-content-2">
          <form action="">
              <input type="text" />
              <button type="submit">
                <i class="fas fa-search" style={{ color: "white" }}></i>
              </button>
            </form>
            <div className="search-result">
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
