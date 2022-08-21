export const Auth = (number) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "AUTH_SIGN_IN",
			});
			const response = number;
			dispatch({
				type: "AUTH_SIGN_IN_SUCCESS",
				payload: response,
			});
		} catch (e) {
			dispatch({
				type: "AUTH_SIGN_IN_ERROR",
				payload: "Unable to sign in",
			});
		}
	};
};
