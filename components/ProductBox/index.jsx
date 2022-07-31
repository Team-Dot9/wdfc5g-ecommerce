import React from "react";
import Container from "../Container";
import DeliveryOptions from "./DeliveryOptions";
import ProductDetails from "./ProductDetails";
import ProductThumbnail from "./ProductThumbnail";

const ProductBox = () => {
	return (
		<section className="e_ProductBox">
			<Container className="e_pb__container">
				<ProductThumbnail />
				<ProductDetails />
				<DeliveryOptions />
			</Container>
		</section>
	);
};

export default ProductBox;
