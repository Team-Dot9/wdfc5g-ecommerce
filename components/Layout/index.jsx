import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import React from "react";
import Footer from "../footer";
import Header from "../Header";

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

const Layout = ({ children, className }) => {
	return (
		<>
			<Header />

			<main className={className}>{children}</main>

			<Footer />

			{/* Live Chat Widget */}
			<TawkMessengerReact
				propertyId={process.env.NEXT_PUBLIC_PROPERTY_ID}
				widgetId={process.env.NEXT_PUBLIC_WIDGET_ID}
			/>
		</>
	);
};

export default Layout;
