const initialState = {
	step: null,
	serviceLocation: null,
	products: [],
	orderID: null,
};

export const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_STEP":
			return { ...state, step: action.payload };
		case "CHANGE_ORDER_ID":
			return { ...state, orderID: action.payload };
		case "CLEAR_STEP":
			return { ...state, step: null };
		case "SET_SERVICE_LOCATION":
			return { ...state, serviceLocation: action.payload };
		case "CLEAR_SERVICE_LOCATION":
			return { ...state, serviceLocation: null };
		default:
			return state;
	}
};
