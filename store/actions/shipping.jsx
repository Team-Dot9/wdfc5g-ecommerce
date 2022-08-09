import axios from "axios";

export const fetchShippingDisableDates = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "FETCH_SHIPPING",
			});
			const response = await axios.get("");
			dispatch({
				type: "FETCH_SHIPPING_SUCCESS",
				payload: response.data,
			});
		} catch (e) {
			dispatch({
				type: "FETCH_SHIPPING_ERROR",
				payload: "Error fetch data",
			});
		}
	};
};

export const clearShippingDataAction = () => ({
	type: "CLEAR_SHIPPING_DATA",
});
export const changeActiveDeliveryOptionAction = (payload) => ({
	type: "CHANGE_ACTIVE_DELIVERY_OPTION",
	payload,
});
export const changeActiveShippingOptionAction = (payload) => ({
	type: "CHANGE_ACTIVE_SHIPPING_OPTION",
	payload,
});
export const changeActiveShippingAddressAction = (payload) => ({
	type: "CHANGE_ADDRESS_SHIPPING_OPTION",
	payload,
});
