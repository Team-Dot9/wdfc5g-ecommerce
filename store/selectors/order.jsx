import { createSelector } from "reselect";

export const getOrderState = ({ order }) => order;

export const getServiceLocation = createSelector(
	[getOrderState],
	({ serviceLocation }) => serviceLocation
);
