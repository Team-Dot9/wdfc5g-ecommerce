const initialState = {
	list: [],
	loading: false,
	error: null,
};

export const productsCategoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_PRODUCTS_CATEGORY":
			return { loading: true, error: null, list: [] };
		case "FETCH_PRODUCTS_CATEGORY_SUCCESS":
			return { loading: false, error: null, list: action.payload };
		case "FETCH_PRODUCTS_CATEGORY_ERROR":
			return { loading: false, error: action.payload, list: [] };
		default:
			return state;
	}
};
