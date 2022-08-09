const initialState = {
	address: null,
	shippingOptions: [
		{
			id: 1,
			value: "DURING_APPOINTMENT",
			text: "I want all items to be delivered during the blood collection appointment",
		},
		{
			id: 2,
			value: "SEPARATELY_APPOINTMENT",
			text: "I want all items to be delivered separately from the blood collection appointment",
		},
	],
	deliveryOptions: [
		{
			id: 1,
			value: "EXPRESS_DELIVERY",
			text: "Express Delivery (within 4 hours) – Free",
		},
	],
	activeDeliveryOption: null,
	activeShippingOption: null,
	loading: false,
	error: null,
};

export const shippingReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_SHIPPING":
			return { ...state, loading: true, error: null };
		case "FETCH_SHIPPING_SUCCESS":
			return { ...state, loading: false, error: null };
		case "FETCH_SHIPPING_ERROR":
			return { ...state, loading: false, error: action.payload };
		case "CHANGE_ACTIVE_DELIVERY_OPTION":
			return {
				...state,
				activeDeliveryOption:
					state.deliveryOptions.find(
						(option) => option.value === action.payload
					) || null,
			};
		case "CHANGE_ACTIVE_SHIPPING_OPTION":
			return {
				...state,
				activeShippingOption:
					state.shippingOptions.find(
						(option) => option.value === action.payload
					) || null,
			};
		case "CHANGE_ADDRESS_SHIPPING_OPTION":
			return { ...state, address: action.payload };
		case "CLEAR_SHIPPING_DATA":
			return { ...state };
		default:
			return state;
	}
};
