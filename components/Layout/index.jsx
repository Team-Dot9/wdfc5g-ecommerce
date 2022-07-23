import React from "react";
import { Header } from "../Header";

const cartItem = [
	{
		id: 1,
		discount: 50,
		cover: "./images/flash/flash-1.png",
		name: "Shoes",
		price: 100,
		quantity: 1,
	},
];

const Layout = ({ children }) => {
	return (
		<>
			<Header cartItem={cartItem} />

			<main>{children}</main>
		</>
	);
};

export default Layout;
