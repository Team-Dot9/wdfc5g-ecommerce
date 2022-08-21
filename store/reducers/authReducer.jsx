const initialState = {
	user: {},
	loading: false,
	error: null,
};

export const basketReducer = (state = initialState, action) => {
	switch (action.type) {
		case "AUTH_SIGN_IN":
			return { ...state, loading: true };
		case "FETCH_BASKET_SUCCESS":
			return { ...state, loading: false, counter: action.payload };
		case "FETCH_BASKET_ERROR":
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
