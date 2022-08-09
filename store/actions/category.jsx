import axios from "axios";

export const fetchCategory = (id) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "FETCH_CATEGORY",
			});

			const response = await axios.get(
				`${process.env.REACT_APP_API}/category/${id}`
			);

			dispatch({
				type: "FETCH_CATEGORY_SUCCESS",
				payload: response.data.data,
			});
		} catch (e) {
			dispatch({
				type: "FETCH_CATEGORY_ERROR",
				payload: "Error fetch data",
			});
		}
	};
};
