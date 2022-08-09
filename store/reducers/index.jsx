import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";
import { cartProductsReducer } from "./cartProductsReducer";
import { categoriesReducer } from "./categoriesReducer";
import { categoryReducer } from "./categoryReducer";
import { deliveryDetailsReducer } from "./deliveryDetailsReducer";
import { orderReducer } from "./orderReducer";
import { paymentDetailsReducer } from "./paymentDetailsReducer";
import { personalInfoReducer } from "./personlaInfoReducer";
import { productFaqReducer } from "./productFaqReducer";
import { productReducer } from "./productReducer";
import { productsCategoryReducer } from "./productsCategoryReducer";
import { productsReducer } from "./productsReducer";
import { searchResultsReducer } from "./searchResultsReducer";
import { shippingReducer } from "./shippingReducer";

export const rootReducer = combineReducers({
	products: productsReducer,
	productsCategory: productsCategoryReducer,
	product: productReducer,
	productFaq: productFaqReducer,
	categories: categoriesReducer,
	category: categoryReducer,
	basket: basketReducer,
	shipping: shippingReducer,
	personalInfo: personalInfoReducer,
	order: orderReducer,
	deliveryDetails: deliveryDetailsReducer,
	search: searchResultsReducer,
	paymentDetails: paymentDetailsReducer,
	cartProducts: cartProductsReducer,
});
