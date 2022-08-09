const initialState = {
	products: localStorage.getItem("cart")
		? JSON.parse(localStorage.getItem("cart"))
		: [],
	loading: false,
	error: null,
};

export const cartProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PRODUCT_TO_CART":
			const products = [...state.products, action.payload];

			localStorage.setItem(
				"cart",
				JSON.stringify([...state.products, action.payload])
			);

			return {
				...state,
				products,
			};
		case "REMOVE_PRODUCT_FROM_CART":
			const newProducts = state.products.filter(
				(item) => item.id !== action.payload
			);

			localStorage.setItem("cart", JSON.stringify(newProducts));

			return {
				...state,
				products: newProducts,
			};
		case "DECREMENT_PRODUCT_FROM_CART": {
			const newProducts = [...state.products].reverse();
			newProducts.splice(
				[...newProducts].findIndex(
					(item) =>
						item.id === action.payload.id &&
						(item.product_variation[0] && action.payload.product_variation[0]
							? item.product_variation[0].id ===
							  action.payload.product_variation[0].id
							: true)
				),
				1
			);
			newProducts.reverse();
			localStorage.setItem("cart", JSON.stringify(newProducts));

			return {
				...state,
				products: newProducts,
			};
		}
		case "CLEAR_CART":
			localStorage.setItem("cart", JSON.stringify([]));
			return { ...state, products: [] };
		default:
			return { ...state };
	}
};
