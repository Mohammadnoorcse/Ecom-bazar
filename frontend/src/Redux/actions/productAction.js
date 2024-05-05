import{
    CLEAR_ERRORS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_RESET,
    NEW_PRODUCT_SUCCESS
} from "../constants/productConstants"
import axios from "axios";

// Create Product
export const createProduct = (productData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_PRODUCT_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/admin/product/new`,
        productData,
        config
      );
  
      dispatch({
        type: NEW_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };