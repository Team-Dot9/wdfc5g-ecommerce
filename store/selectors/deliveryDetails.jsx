import { createSelector } from "reselect";

export const getDeliveryDetailsState = ({ deliveryDetails }) => deliveryDetails;

export const getDeliveryActiveOption = createSelector(
	[getDeliveryDetailsState],
	({ activeDeliveryOption }) => activeDeliveryOption
);
