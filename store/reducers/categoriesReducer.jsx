const initialState = {
	categories: [],
	loading: true,
	error: null,
};

export const categoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_CATEGORIES":
			return { loading: true, error: null, categories: [] };
		case "FETCH_CATEGORIES_SUCCESS":
			return { loading: false, error: null, categories: action.payload };
		case "FETCH_CATEGORIES_ERROR":
			return { loading: false, error: action.payload, categories: [] };
		default:
			return state;
	}
};
