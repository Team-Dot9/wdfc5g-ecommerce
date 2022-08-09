export const addProductToCartAction = (payload) => ({
	type: "ADD_PRODUCT_TO_CART",
	payload,
});

export const removeProductFromCartAction = (payload) => ({
	type: "REMOVE_PRODUCT_FROM_CART",
	payload,
});

export const decrementProductFromCartAction = (payload) => ({
	type: "DECREMENT_PRODUCT_FROM_CART",
	payload,
});

export const clearCartProductsAction = () => ({
	type: "CLEAR_CART",
});
