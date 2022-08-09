import axios from "axios";

export const fetchProduct = (id) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "FETCH_PRODUCT",
			});
			const response = await axios.get(
				`${process.env.REACT_APP_API}/product/${id}`
			);
			dispatch({
				type: "FETCH_PRODUCT_SUCCESS",
				payload: response.data.data,
			});
		} catch (e) {
			dispatch({
				type: "FETCH_PRODUCT_ERROR",
				payload: "Error fetch data",
			});
		}
	};
};

export const clearProduct = () => ({ type: "CLEAR_PRODUCT" });
