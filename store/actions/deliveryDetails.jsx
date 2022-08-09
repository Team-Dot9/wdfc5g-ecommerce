import axios from "axios";

export const fetchClinic = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "FETCH_DELIVERY_DETAILS",
			});
			const response = await axios.get("");
			dispatch({
				type: "FETCH_DELIVERY_DETAILS_SUCCESS",
				payload: response.data,
			});
		} catch (e) {
			dispatch({
				type: "FETCH_DELIVERY_DETAILS_ERROR",
				payload: "Error fetch data",
			});
		}
	};
};

export const changeActiveDeliveryDetailsOptionAction = (payload) => ({
	type: "CHANGE_ACTIVE_DELIVERY_DETAILS_OPTION",
	payload,
});
export const changeActiveDateAction = (payload) => ({
	type: "CHANAGE_ACTIVE_DATE",
	payload,
});
export const changeActiveTimeAction = (payload) => ({
	type: "CHNAGE_ACTIVE_TIME",
	payload,
});
export const changeShippingAddress = (payload) => ({
	type: "CHANGE_SHIPPING_ADDRESS",
	payload,
});
export const clearDeliveryDetails = () => ({
	type: "CLEAR_DELIVERY_DETAILS",
});
