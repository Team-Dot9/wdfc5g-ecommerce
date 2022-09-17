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
import { productsReducerArrivals } from "./productsReducerArrivals";
import { productsReducerDiscount } from "./productsReducerDiscount";
import { productsReducerFlashDeals } from "./productsReducerFlashDeals";
import { productsReducerLanding } from "./productsReducerLanding";
import { searchResultsReducer } from "./searchResultsReducer";
import { shippingReducer } from "./shippingReducer";

export const rootReducer = combineReducers({
	// Landing page
	productsFlashDeals: productsReducerFlashDeals, // Flash deal products.
	productsDiscount: productsReducerDiscount, // Discount products.
	productsArrivals: productsReducerArrivals, // New arrival products.
	products: productsReducer, // All products. Products for shop page.

	productsCategory: productsCategoryReducer,
	product: productReducer,
	productFaq: productFaqReducer,
	productLanding: productsReducerLanding,
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
