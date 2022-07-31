import React from "react";
import Layout from "../../../components/Layout";
import ProductBox from "../../../components/ProductBox";

const SingleProduct = () => {
	// prodcut qty total
	return (
		<>
			<Layout>
				{/**
				 * Thumbnail
				 * Product Details
				 *  	Title
				 * 		Price
				 * 		EMI Options
				 * 		Quantity
				 * 		Add to Cart, Buy Now
				 * 		Categories
				 * Delivery Options
				 *
				 * Details
				 *
				 */}
				<ProductBox />
			</Layout>
		</>
	);
};

export default SingleProduct;
