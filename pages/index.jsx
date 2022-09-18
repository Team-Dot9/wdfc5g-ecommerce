import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Announcement from "../components/Announcement";
import Discount from "../components/Discount";
import FlashDeals from "../components/FlashDeals";
import HomeHero from "../components/HomeHero";
import Layout from "../components/Layout";
import NewArrivals from "../components/NewArrivals";
import ShopScene from "../components/ShopScene";
import TopCategory from "../components/TopCategory";
import Wrapper from "../components/Wrapper";
import { addProductToCartAction } from "../store/actions/cartProducts";
import { shopItems } from "../store/Data";

const PRODUCT_MENU = [
	{
		img: "./images/category/cat-1.png",
		slug: "/",
		title: "Apple",
	},
	{
		img: "./images/category/cat-2.png",
		slug: "/",
		title: "Samsung",
	},
	{
		img: "./images/category/cat-1.png",
		slug: "/",
		title: "Oppo",
	},
	{
		img: "./images/category/cat-2.png",
		slug: "/",
		title: "Vivo",
	},
	{
		img: "./images/category/cat-1.png",
		slug: "/",
		title: "Redimi",
	},
	{
		img: "./images/category/cat-2.png",
		slug: "/",
		title: "Sony",
	},
];

const Home = () => {
	const { products: cartItem } = useSelector((state) => state.cartProducts);
	const dispatch = useDispatch();
	console.log("Cart Products: ", cartItem);

	const addToCart = (product) => {
		dispatch(addProductToCartAction(product));
	};

	return (
		<>
			<Head>
				<title>5G Shop BD</title>
				<meta name="description" content="An commerce platform in Bangladesh" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout cart={cartItem}>
				<HomeHero />
				<FlashDeals addToCart={addToCart} />
				<TopCategory />
				<NewArrivals />
				<Discount />
				<ShopScene
					title="Mobile Phone"
					url={`/shop?category=phone`}
					menu={PRODUCT_MENU}
					shopItems={shopItems}
					addToCart={addToCart}
				/>
				<ShopScene
					title="Laptop"
					menu={PRODUCT_MENU}
					url={`/shop?category=laptop`}
					shopItems={shopItems}
					addToCart={addToCart}
				/>
				<ShopScene
					title="Other"
					menu={PRODUCT_MENU}
					url={`/shop`}
					shopItems={shopItems}
					addToCart={addToCart}
				/>
				<Announcement />
				<Wrapper />
			</Layout>
		</>
	);
};

export default Home;
