export const initialState = {
	darkMode: Cookies.get("darkMode") === "ON" ? true : false,
	cart: {
		cartItems: Cookies.get("cartItems")
			? JSON.parse(Cookies.get("cartItems"))
			: [],
		shippingAddress: Cookies.get("shippingAddress")
			? JSON.parse(Cookies.get("shippingAddress"))
			: {},
		paymentMethod: Cookies.get("paymentMethod")
			? Cookies.get("paymentMethod")
			: "",
	},
	userInfo: Cookies.get("userInfo")
		? JSON.parse(Cookies.get("userInfo"))
		: null,
};
