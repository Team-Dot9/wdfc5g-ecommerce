import axios from "axios";

export const fetchProductsCategory = (id) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "FETCH_PRODUCTS_CATEGORY",
			});
			const response = await axios.get(
				`${process.env.REACT_APP_API}/product/list?category_id=${id}`
			);
			dispatch({
				type: "FETCH_PRODUCTS_CATEGORY_SUCCESS",
				payload: response.data.data,
			});
		} catch (e) {
			dispatch({
				type: "FETCH_PRODUCTS_CATEGORY_ERROR",
				payload: "Error fetch data",
			});
		}
	};
};
