import axios from "axios";

export const fetchProducts = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "FETCH_PRODUCTS",
			});
			const response = await axios.get(
				`${process.env.REACT_APP_API}/product/list`
			);
			dispatch({
				type: "FETCH_PRODUCTS_SUCCESS",
				payload: response.data.data,
			});
		} catch (e) {
			dispatch({
				type: "FETCH_PRODUCTS_ERROR",
				payload: "Error fetch data",
			});
		}
	};
};
