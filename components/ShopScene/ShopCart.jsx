import { productItems } from "../../store/Data.js";

import React, { useState } from "react";
import ProductCard from "../Card/ProductCard";

const ShopCart = ({ shopItems, addToCart }) => {
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount(count + 1);
	};

	return (
		<>
			{productItems.map((shopItems, i) => (
				<ProductCard
					key={shopItems.id}
					id={shopItems.id}
					className="box"
					title={shopItems.name}
					discount={shopItems.discount}
					thumbnail={shopItems.cover}
					price={shopItems.price}
					slug={shopItems.name.split(" ").join("-").toLocaleLowerCase()}
					addToCart={addToCart}
					addToWishList={console.log}
				/>
			))}
		</>
	);
};

export default ShopCart;
