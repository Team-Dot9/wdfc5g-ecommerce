import React from "react";
import AccountBody from "../AccountBody";
import AccountWeight from "../AccountWeight";

const WishlistPage = () => {
	return (
		<AccountBody
			className="wishlist__wgt"
			title="Wishlist"
			// icon={PAGE_INFO.icon}
		>
			<AccountWeight className="wishlist__products">Wishlist</AccountWeight>
		</AccountBody>
	);
};

export default WishlistPage;
