const initialState = {
	search: [],
	text: "",
	loading: false,
	error: null,
};

export const searchResultsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_SEARCH_PRODUCTS":
			return { loading: true, error: null, text: "", search: [] };
		case "FETCH_SEARCH_PRODUCTS_SUCCESS":
			return {
				loading: false,
				error: null,
				text: action.text,
				search: action.payload,
			};
		case "FETCH_SEARCH_PRODUCTS_ERROR":
			return { loading: false, error: action.payload, text: "", search: [] };
		default:
			return state;
	}
};
