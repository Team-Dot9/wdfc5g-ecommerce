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
				// <div key={i} className="box">
				// 	<div className="product mtop">
				// 		<div className="img">
				// 			<span className="discount">{shopItems.discount}% Off</span>
				// 			<img src={shopItems.cover} alt="" />
				// 			<div className="product-like">
				// 				<label>{count}</label> <br />
				// 				<i className="fa-regular fa-heart" onClick={increment}></i>
				// 			</div>
				// 		</div>
				// 		<div className="product-details">
				// 			<h3>{shopItems.name}</h3>
				// 			<div className="price">
				// 				<h4>${shopItems.price}.00 </h4>
				// 				<button onClick={() => addToCart(shopItems)}>
				// 					<IconContext.Provider
				// 						value={{
				// 							color: "#0f3460",
				// 							style: { fontSize: "15px" },
				// 						}}>
				// 						<FaPlus />
				// 					</IconContext.Provider>
				// 				</button>
				// 			</div>
				// 		</div>
				// 	</div>
				// </div>
			))}
		</>
	);
};

export default ShopCart;
