export const formatePrice = (value) =>
	Number.isInteger(value) ? `${value}.00` : value.toFixed(2);
