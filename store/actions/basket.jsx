export const BasketAdd = (number) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "FETCH_BASKET",
			});
			const response = number;
			dispatch({
				type: "FETCH_BASKET_SUCCESS",
				payload: response,
			});
		} catch (e) {
			dispatch({
				type: "FETCH_BASKET_ERROR",
				payload: "Error fetch data",
			});
		}
	};
};
