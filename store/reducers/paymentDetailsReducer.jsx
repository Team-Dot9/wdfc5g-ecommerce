import IconCreditCard from "../../assets/images/icons/creditCard";
import IconPayAtome from "../../assets/images/icons/payAtome";
import IconPayPal from "../../assets/images/icons/payPall";

const initialState = {
	paymentDetails: {},
	paymentOptions: [
		{
			id: 1,
			value: "PAYPAL",
			icon: IconPayPal,
			disabled: false,
		},
		{
			id: 2,
			value: "CREDIT_CARD",
			text: "Credit/Debit Card",
			icon: IconCreditCard,
			disabled: false,
		},
		{
			id: 3,
			value: "ATOME",
			icon: IconPayAtome,
			disabled: false,
		},
		// {
		//   id: 3,
		//   value: PaymentDetailsOptionValues.PAYNOW,
		//   icon: IconPayNow,
		//   disabled: true,
		// },
		// {
		//   id: 4,
		//   value: PaymentDetailsOptionValues.GRABPAY,
		//   icon: IconGrabPay,
		//   disabled: true,
		// }
	],
	// activePaymentOption: PaymentDetailsOptionValues.PAYPAL,
	activePaymentOption: "NONE",
	billingAddressOptions: [
		{
			id: 1,
			value: "SAME_AS_SHIPPING_ADDRESS",
			text: "Same as shipping address",
		},
		{
			id: 2,
			value: "USE_A_DIFFERENT_BILLING_ADDRESS",
			text: "Use a different billing address",
		},
	],
	activeBillingAddressOption: {
		id: 1,
		value: "SAME_AS_SHIPPING_ADDRESS",
		text: "Same as shipping address",
	},
	billingAddress: {
		firstName: "",
		lastName: "",
		streetAddress: "",
		additionalInfo: "",
		postalCode: "",
		country: "",
	},
	promoCode: "",
	loading: false,
	error: null,
};

export const paymentDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_ACTIVE_PAYMENT_OPTION":
			return { ...state, activePaymentOption: action.payload };
		case "CHANGE_ACTIVE_BILLING_ADDRESS_OPTION":
			return { ...state, activeBillingAddressOption: action.payload };
		case "CHANGE_BILLING_ADDRESS":
			return { ...state, billingAddress: action.payload };
		case "CHANGE_PROMOCODE":
			return { ...state, promoCode: action.payload };
		case "CLEAR_PAYMENT_OPTION":
			return { ...state, activePaymentOption: "NONE" };
		default:
			return state;
	}
};
