const initialState = {
	faqList: [],
	loading: false,
	error: null,
};

export const productFaqReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_PRODUCT_FAQ":
			return { loading: true, error: null, faqList: [] };
		case "FETCH_PRODUCT_FAQ_SUCCESS":
			return { loading: false, error: null, faqList: action.payload };
		case "FETCH_PRODUCT_FAQ_ERROR":
			return { loading: false, error: action.payload, faqList: [] };
		default:
			return state;
	}
};
