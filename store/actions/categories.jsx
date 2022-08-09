import axios from "axios";

export const fetchCategories = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "FETCH_CATEGORIES",
			});
			const response = await axios.get(
				`${process.env.REACT_APP_API}/category/list`
			);
			dispatch({
				type: "FETCH_CATEGORIES_SUCCESS",
				payload: response.data.data,
			});
		} catch (e) {
			dispatch({
				type: "FETCH_CATEGORIES_ERROR",
				payload: "Error fetch data",
			});
		}
	};
};
