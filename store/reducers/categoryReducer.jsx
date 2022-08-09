const initialState = {
	data: [],
	loading: false,
	error: null,
};

export const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_CATEGORY":
			return { loading: true, error: null, data: [] };
		case "FETCH_CATEGORY_SUCCESS":
			return { loading: false, error: null, data: action.payload };
		case "FETCH_CATEGORY_ERROR":
			return { loading: false, error: action.payload, data: [] };
		default:
			return state;
	}
};
