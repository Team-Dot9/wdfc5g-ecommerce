const initialState = {
	products: [],
	loading: false,
	error: null,
};

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_PRODUCTS":
			return { loading: true, error: null, products: [] };
		case "FETCH_PRODUCTS_SUCCESS":
			return { loading: false, error: null, products: action.payload };
		case "FETCH_PRODUCTS_ERROR":
			return { loading: false, error: action.payload, products: [] };
		default:
			return state;
	}
};
