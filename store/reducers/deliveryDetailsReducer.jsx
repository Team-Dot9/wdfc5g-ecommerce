import { format } from "date-fns";

const initialState = {
	details: [],
	activeDate: format(new Date(), "MM/dd/yyyy"),
	activeTime: null,
	address: {
		streetAddress: "",
		additionalInfo: "",
		postalCode: "",
	},
	loading: false,
	error: null,
	activeDeliveryOption: null,
};

export const deliveryDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_DELIVERY_DETAILS":
			return { ...state, loading: true, error: null, details: [] };
		case "FETCH_DELIVERY_DETAILS_SUCCESS":
			return { ...state, loading: false, error: null, details: action.payload };
		case "FETCH_DELIVERY_DETAILS_ERROR":
			return { ...state, loading: false, error: action.payload, details: [] };
		case "CHANGE_ACTIVE_DELIVERY_DETAILS_OPTION":
			return { ...state, activeDeliveryOption: action.payload || null };
		case "CHNAGE_ACTIVE_DATE":
			return { ...state, activeDate: action.payload };
		case "CHNAGE_ACTIVE_TIME":
			return { ...state, activeTime: action.payload };
		case "CHANGE_SHIPPING_ADDRESS":
			return { ...state, address: action.payload };
		case "CLEAR_DELIVERY_DETAILS":
			return { ...state, activeDeliveryOption: null };
		default:
			return state;
	}
};
