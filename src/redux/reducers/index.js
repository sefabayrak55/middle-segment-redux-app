import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    //changeCategoryReducer: changeCategoryReducer
    categoryListReducer,
    //categoryListReducer: categoryListReducer
    productListReducer,
    //productListReducer: productListReducer
    cartReducer
    //cartReducer:cartReducer
});

export default rootReducer;