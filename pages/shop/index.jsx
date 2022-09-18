import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import ShopScene from "../../components/ShopScene";
import Wrapper from "../../components/Wrapper";
import { addProductToCartAction } from "../../store/actions/cartProducts";
import { shopItems } from "../../store/Data";

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

const Shop = () => {
	const { products: cartItem } = useSelector((state) => state.cartProducts);
	const dispatch = useDispatch();
	console.log("Cart Products: ", cartItem);

	const addToCart = (product) => {
		dispatch(addProductToCartAction(product));
	};

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout className="e_shop">
				<ShopScene
					className=""
					title=""
					menu={PRODUCT_MENU}
					shopItems={shopItems}
					addToCart={addToCart}
				/>
				<Wrapper />
			</Layout>
		</>
	);
};

export default Shop;
