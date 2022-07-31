import Head from "next/head";
import { useState } from "react";
import Announcement from "../components/Announcement";
import Discount from "../components/Discount";
import FlashDeals from "../components/FlashDeals";
import HomeHero from "../components/HomeHero";
import Layout from "../components/Layout";
import NewArrivals from "../components/NewArrivals";
import ShopScene from "../components/ShopScene";
import TopCategory from "../components/TopCategory";
import Wrapper from "../components/Wrapper";
import { shopItems } from "../store/Data";

const Home = () => {
	const [cartItem, setCartItem] = useState([]);

	const addToCart = (product) => {
		// Checking product existence in the cart.
		const productExit = CartItem.find((item) => item.id === product.id);

		// If product already exist in cart then we will increase the product quantity in the cart.
		// ani increase  exits product QTY by 1
		// if item and product doesn't match then will add new items
		if (productExit) {
			setCartItem(
				CartItem.map((item) =>
					item.id === product.id
						? { ...productExit, qty: productExit.qty + 1 }
						: item
				)
			);
		} else {
			// but if the product doesnt exit in the cart that mean if card is empty
			// then new product is added in cart  and its qty is initalize to 1
			setCartItem([...CartItem, { ...product, qty: 1 }]);
		}
	};

	const decreaseQty = (product) => {
		// if hamro product alredy cart xa bhane  find garna help garxa
		const productExit = CartItem.find((item) => item.id === product.id);

		// if product is exit and its qty is 1 then we will run a fun  setCartItem
		// inside  setCartItem we will run filter to check if item.id is match to product.id
		// if the item.id is doesnt match to product.id then that items are display in cart
		// else
		if (productExit.qty === 1) {
			setCartItem(CartItem.filter((item) => item.id !== product.id));
		} else {
			// if product is exit and qty  of that produt is not equal to 1
			// then will run function call setCartItem
			// inside setCartItem we will run map method
			// this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
			setCartItem(
				CartItem.map((item) =>
					item.id === product.id
						? { ...productExit, qty: productExit.qty - 1 }
						: item
				)
			);
		}
	};

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout cart={cartItem}>
				<HomeHero />
				<FlashDeals addToCart={addToCart} />
				<TopCategory />
				<NewArrivals />
				<Discount />
				<ShopScene shopItems={shopItems} addToCart={addToCart} />
				<ShopScene shopItems={shopItems} addToCart={addToCart} />
				<Announcement />
				<Wrapper />
			</Layout>
		</>
	);
};

export default Home;
