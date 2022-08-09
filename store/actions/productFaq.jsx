import axios from "axios";

export const fetchProductFaq = (id) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "FETCH_PRODUCT_FAQ",
			});
			const response = await axios.get(
				`${process.env.REACT_APP_API}/faq/list?product_id=${id}`
			);
			dispatch({
				type: "FETCH_PRODUCT_FAQ_SUCCESS",
				payload: response.data.data[0].questions,
			});
		} catch (e) {
			dispatch({
				type: "FETCH_PRODUCT_FAQ_ERROR",
				payload: "Error fetch data",
			});
		}
	};
};
