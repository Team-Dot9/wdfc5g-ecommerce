export const changeActivePaymentOptionAction = (payload) => ({
	type: "CHANGE_ACTIVE_PAYMENT_OPTION",
	payload,
});

export const changeActiveBillingAddressOptionAction = (payload) => ({
	type: "CHANGE_ACTIVE_BILLING_ADDRESS_OPTION",
	payload,
});

export const changeBillingAddressAction = (payload) => ({
	type: "CHANGE_BILLING_ADDRESS",
	payload,
});

export const changePromoCodeAction = (payload) => ({
	type: "CHANGE_PROMOCODE",
	payload,
});

export const clearPaymentOption = () => ({
	type: "CLEAR_PAYMENT_OPTION",
});
