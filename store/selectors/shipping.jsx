import { createSelector } from "reselect";

export const getShippingState = ({ shipping }) => shipping;

export const getServiceLocation = createSelector(
	[getShippingState],
	({ activeShippingOption }) => activeShippingOption
);
