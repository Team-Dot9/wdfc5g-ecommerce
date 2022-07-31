import React from "react";

const ProductDetails = () => {
	return (
		<>
			<div className="e_spd">
				<h1 className="spd__title">Samsung Galaxy A03s 4GB/64GB</h1>
				<div className="spd__brand ">
					<span className="spd__key">Brand: </span>
					<span className="spd__value">Samsung</span>
				</div>
				<div className="spd__sku ">
					<span className="spd__key">Product SKU: </span>
					<span className="spd__value">HGJH64</span>
				</div>
				<div className="spd__description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus
					leo a nunc pretium volutpat. Suspendisse purus lorem, egestas id
					lectus a, tincidunt volutpat orci.
				</div>
				<div className="spd__price">৳ 13,499</div>
				<div className="spd__quantity">3</div>
				<div className="spd__actions">
					<div className="spd__cart">Add to cart</div>
					<div className="spd__wishlist">Add to widthlish</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;
