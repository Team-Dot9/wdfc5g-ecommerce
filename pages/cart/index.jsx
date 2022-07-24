import Image from "next/image";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import Layout from "../../components/Layout";

const Cart = () => {
	const [cartItem, setCartItem] = useState([
		{
			id: 1,
			discount: 50,
			cover: "/images/flash/flash-1.png",
			name: "Shoes",
			price: 100,
			qty: 5,
		},
		{
			id: 2,
			discount: 40,
			cover: "/images/flash/flash-2.png",
			name: "Watch",
			price: 20,
			qty: 6,
		},
		{
			id: 3,
			discount: 40,
			cover: "/images/flash/flash-3.png",
			name: "Smart Mobile Black",
			price: 200,
			qty: 5,
		},
		{
			id: 4,
			discount: 40,
			cover: "/images/flash/flash-4.png",
			name: "Smart Watch Black",
			price: 50,
			qty: 1,
		},
	]);

	const addToCart = (product) => {
		// Checking product existence in the cart.
		const productExit = cartItem.find((item) => item.id === product.id);

		// If product already exist in cart then we will increase the product qty in the cart.
		// ani increase  exits product QTY by 1
		// if item and product doesn't match then will add new items
		if (productExit) {
			setCartItem(
				cartItem.map((item) =>
					item.id === product.id
						? { ...productExit, qty: productExit.qty + 1 }
						: item
				)
			);
		} else {
			// but if the product doesnt exit in the cart that mean if card is empty
			// then new product is added in cart  and its qty is initalize to 1
			setCartItem([...cartItem, { ...product, qty: 1 }]);
		}
	};

	const decreaseQty = (product) => {
		// if hamro product alredy cart xa bhane  find garna help garxa
		const productExit = cartItem.find((item) => item.id === product.id);

		// if product is exit and its qty is 1 then we will run a fun  setCartItem
		// inside  setCartItem we will run filter to check if item.id is match to product.id
		// if the item.id is doesnt match to product.id then that items are display in cart
		// else
		if (productExit.qty === 1) {
			setCartItem(cartItem.filter((item) => item.id !== product.id));
		} else {
			// if product is exit and qty  of that produt is not equal to 1
			// then will run function call setCartItem
			// inside setCartItem we will run map method
			// this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
			setCartItem(
				cartItem.map((item) =>
					item.id === product.id
						? { ...productExit, qty: productExit.qty - 1 }
						: item
				)
			);
		}
	};
	// Stpe: 7   calucate total of items
	const totalPrice = cartItem.reduce(
		(price, item) => price + item.qty * item.price,
		0
	);

	// prodcut qty total
	return (
		<>
			<Layout>
				<section className="e_cart">
					<div className="container d_flex">
						{/* if hamro cart ma kunai pani item xaina bhane no diplay */}

						<div className="cart__items">
							{cartItem.length === 0 && (
								<h1 className="no-items product">No Items are add in Cart</h1>
							)}

							{/* yasma hami le cart item lai display garaaxa */}
							{cartItem.map((item) => {
								const productQty = item.price * item.qty;

								return (
									<div className="cart__item" key={item.id}>
										<div className="cart__item__img">
											<Image src={item.cover} height={140} width={140} alt="" />
										</div>

										<div className="cart__item__details">
											<button className="cart__item__remove">
												<IconContext.Provider
													value={{
														style: { fontSize: "15px" },
													}}>
													<FaTimes />
												</IconContext.Provider>
											</button>

											<h3 className="cart__item__title">{item.name}</h3>

											<div className="cart__item__footer">
												<p>
													${item.price}.00 * {item.qty}
													<span>${productQty}.00</span>
												</p>

												<div className="cart__item__counter">
													<IconContext.Provider
														value={{
															color: "#E94560",
															style: { fontSize: "15px" },
														}}>
														<button
															className="desCart"
															onClick={() => decreaseQty(item)}>
															<FaMinus />
														</button>

														<input
															type="number"
															name="quantity"
															id=""
															value={item.qty}
														/>

														<button
															className="incCart"
															onClick={() => addToCart(item)}>
															<FaPlus />
														</button>
													</IconContext.Provider>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>

						<div className="cart__total product">
							<h2>Cart Summary</h2>
							<div className=" d_flex">
								<h4>Total Price :</h4>
								<h3>${totalPrice}.00</h3>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default Cart;
