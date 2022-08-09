const initialState = {
	product: null,
	loading: false,
	error: null,
};

export const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_PRODUCT":
			return { loading: true, error: null, product: null };
		case "FETCH_PRODUCT_SUCCESS":
			return { loading: false, error: null, product: action.payload };
		case "FETCH_PRODUCT_ERROR":
			return { loading: false, error: action.payload, product: null };
		case "CLEAR_PRODUCT":
			return { ...state, product: null };
		default:
			return state;
	}
};
