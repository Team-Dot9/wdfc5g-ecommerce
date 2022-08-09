export const changeStepAction = (payload) => ({
	type: "CHANGE_STEP",
	payload,
});

export const setServiceLocationAction = (payload) => ({
	type: "SET_SERVICE_LOCATION",
	payload,
});

export const setChangeOrderIDAction = (payload) => ({
	type: "CHANGE_ORDER_ID",
	payload,
});

export const clearStepAction = () => ({
	type: "CLEAR_STEP",
});

export const clearServiceLocationAction = () => ({
	type: "CLEAR_SERVICE_LOCATION",
});
