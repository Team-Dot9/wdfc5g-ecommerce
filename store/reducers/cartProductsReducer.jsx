const initialState = {
	// products: localStorage?.getItem("cart")
	// 	? JSON.parse(localStorage?.getItem("cart"))
	// 	: [],
	products: [],
	loading: false,
	error: null,
};

export const cartProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PRODUCT_TO_CART": {
			let products;

			// Checking product existence in the cart. If exist? Storing it to the variable.
			const productExist = state.products.find(
				(item) => item._id === action.payload._id
			);

			// If product exist in the cart? Just increasing the quantity.
			// Otherwise adding it to cart as new item and giving it a quantity value of 1.
			if (productExist) {
				products = state.products.map((item) =>
					item._id === action.payload._id
						? { ...productExist, qty: productExist.qty + 1 }
						: item
				);
			} else {
				// Updating the localStorage.
				products = [...state.products, { ...action.payload, qty: 1 }];
			}

			// Updating localStorage with updated contents.
			localStorage.setItem("cart", JSON.stringify(products));

			return {
				...state,
				products,
			};
		}
		case "REMOVE_PRODUCT_FROM_CART":
			const newProducts = state.products.filter(
				(item) => item._id !== action.payload._id
			);

			localStorage.setItem("cart", JSON.stringify(newProducts));

			return {
				...state,
				products: newProducts,
			};
		case "DECREMENT_PRODUCT_FROM_CART": {
			let products;

			// Checking product existence in the cart. If exist? Storing it to the variable.
			const productExist = state.products.find(
				(item) => item._id === action.payload._id
			);

			// If product exist in the cart? Just increasing the quantity.
			// Otherwise adding it to cart as new item and giving it a quantity value of 1.
			if (productExist) {
				if (productExist.qty > 1) {
					products = state.products.map((item) =>
						item._id === action.payload._id
							? { ...productExist, qty: productExist.qty - 1 }
							: item
					);
				} else {
					products = state.products.splice(
						[...state.products].findIndex(
							(item) => item._id === action.payload._id
						),
						1
					);
				}
			}

			// Updating localStorage with updated contents.
			localStorage.setItem("cart", JSON.stringify(products));

			return {
				...state,
				products,
			};
		}
		case "CLEAR_CART":
			localStorage.setItem("cart", JSON.stringify([]));
			return { ...state, products: [] };
		default:
			return { ...state };
	}
};
