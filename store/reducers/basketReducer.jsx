const initialState = {
	counter: 0,
	products: [],
	loading: false,
	error: null,
};

export const basketReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_BASKET":
			return { ...state, loading: true };
		case "FETCH_BASKET_SUCCESS":
			return { ...state, loading: false, counter: action.payload };
		case "FETCH_BASKET_ERROR":
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
