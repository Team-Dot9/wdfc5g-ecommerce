import React from "react";
import { productItems } from "../../store/Data";
import BrandAndShop from "../BrandAndShop";
import ProductCard from "../Card/ProductCard";

const Shop = ({ addToCart, shopItems }) => {
	return (
		<>
			<section className="shop">
				<div className="container d_flex">
					<BrandAndShop />

					<div className="contentWidth">
						<div className="heading d_flex">
							<div className="heading-left row  f_flex">
								<h2>Mobile Phones</h2>
							</div>
							<div className="heading-right row ">
								<span>View all</span>
								<i className="fa-solid fa-caret-right"></i>
							</div>
						</div>

						<div className="product-content  grid1">
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
							{/* <ShopCart addToCart={addToCart} shopItems={shopItems} /> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Shop;
