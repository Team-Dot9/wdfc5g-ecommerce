import Image from "next/image";
import React from "react";
import THUMBNAIL from "../../../assets/images/products/headphone.png";

const ProductThumbnail = () => {
	return (
		<div className="e_productThumbnail">
			<Image src={THUMBNAIL} alt="" />
		</div>
	);
};

export default ProductThumbnail;
