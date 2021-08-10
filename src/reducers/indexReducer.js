import { combineReducers } from "redux";
import selectCustomer from "./selectedOption";
import visibility from "./searchvisible";
import getQuery from "./getQuery";
import productDetail from "./productDetail";

const rootReducer = combineReducers({
  selectCustomer: selectCustomer,
  visibility: visibility,
  getQuery: getQuery,
  productDetail: productDetail,
});

export default rootReducer;
