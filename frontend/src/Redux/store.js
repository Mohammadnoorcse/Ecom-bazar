import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import{
userReducer
} from "./reducers/userReducer";
import{
newProductReducer
} from "./reducers/productReducer"


const reducer = combineReducers({
    userdata:userReducer,
    newProduct: newProductReducer
});

const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
  
let initialState = {
  userdata: { user: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;