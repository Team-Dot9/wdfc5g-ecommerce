import axios from "axios";

export const fetchSearchProducts = (searchInput) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "FETCH_SEARCH_PRODUCTS",
			});
			const response = await axios.get(
				`${process.env.REACT_APP_API}/product/search?search_line=${searchInput}`
			);
			dispatch({
				type: "FETCH_SEARCH_PRODUCTS_SUCCESS",
				payload: response.data.data,
				text: searchInput,
			});
		} catch (e) {
			dispatch({
				type: "FETCH_SEARCH_PRODUCTS_ERROR",
				payload: "Error fetch data",
			});
		}
	};
};
