import { createSelector } from "reselect";
import {
	calculateCartSubTotal,
	calculateCartTotal,
} from "../../utils/calculateCartTotal";

import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import uniqBy from "lodash/uniqBy";
import { ServiceLocationType } from "../../types/order";
import { getDeliveryActiveOption } from "./deliveryDetails";
import { getServiceLocation } from "./order";

export const getCartProductsState = ({ cartProducts }) => cartProducts;

export const getCartProducts = createSelector(
	getCartProductsState,
	({ products }) => products
);

export const getCartProductsContainTypes = createSelector(
	[getCartProducts, (_, types) => types],
	(products, types) =>
		!!products.filter((product) => types.includes(product.product_type)).length
);

export const getCartProductFees = createSelector(
	[getCartProducts],
	(products) =>
		!isEmpty(products)
			? uniqBy(
					products.flatMap((product) => product.fees),
					"id"
			  )
			: []
);

export const getCartProductConsulation = createSelector(
	[getCartProducts],
	(products) =>
		get(
			products.find((product) => product.consultation),
			"consultation"
		)
);

export const getConsultationAndHomeCollectionFee = createSelector(
	[
		getCartProducts,
		getCartProductFees,
		getServiceLocation,
		getCartProductConsulation,
	],
	(products, fees, serviceLocation, consultation) => {
		const hasConsultationFee = isEmpty(
			products.filter(({ product_type }) => {
				return product_type === "ONLINE_CONSULTATION";
			})
		);

		const homeCollectionFee =
			serviceLocation === ServiceLocationType.HOME
				? fees.find((fee) => fee.type === "HOME_COLLECTION_FEE")
				: null;

		return {
			homeCollectionFee: homeCollectionFee || null,
			consultationFee: hasConsultationFee ? consultation : null,
		};
	}
);

export const getCartSubTotal = createSelector([getCartProducts], (products) =>
	calculateCartSubTotal(products)
);

export const getCartTotal = createSelector(
	[
		getCartSubTotal,
		getConsultationAndHomeCollectionFee,
		getDeliveryActiveOption,
	],
	(subtotal, { consultationFee, homeCollectionFee }, deliveryFee) => {
		const consultationPrice = consultationFee ? consultationFee.price : 0;
		const homeCollectionPrice = homeCollectionFee ? homeCollectionFee.price : 0;
		const deliveryPrice = deliveryFee ? deliveryFee.price : 0;

		return calculateCartTotal(
			subtotal,
			consultationPrice,
			homeCollectionPrice,
			deliveryPrice
		);
	}
);
