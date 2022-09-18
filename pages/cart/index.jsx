import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import useAuth from "../../hook/useAuth";
import {
	addProductToCartAction,
	decrementProductFromCartAction,
	removeProductFromCartAction,
} from "../../store/actions/cartProducts";

const Cart = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.cartProducts);
	const auth = useAuth();
	console.log("AUTH: ", auth);

	const totalPrice = products.reduce((price, item) => {
		const pPrice = item.price.special ? item.price.special : item.price.regular;
		price + item.qty * pPrice;
	}, 0);

	// prodcut qty total
	return (
		<Layout>
			<Box component="section" className="e_cart">
				<Container>
					<Grid container spacing={3}>
						{/* Cart List Area */}
						<Grid item className="e_cart__list" xs={12} md={8}>
							<Box className="cart__items">
								{products.length === 0 && (
									<Card className="e_card__empty">
										<CardContent className="e_card__empty__content">
											<Typography variant="h5" className="e_card__empty__title">
												No Items are add in Cart
											</Typography>

											<Link href="/shop" passHref>
												<Typography className="e_card__empty__link">
													Go back to shop
												</Typography>
											</Link>
										</CardContent>
									</Card>
								)}
								{/* yasma hami le cart item lai display garaaxa */}
								{products.map((item) => {
									const price = item.price.special
										? item.price.special
										: item.price.regular;

									return (
										<div className="cart__item" key={item._id}>
											<div className="cart__item__img">
												<Image
													src={item.thumbnail}
													height={140}
													width={140}
													alt=""
												/>
											</div>

											<div className="cart__item__details">
												<button
													className="cart__item__remove"
													onClick={() =>
														dispatch(removeProductFromCartAction(item))
													}>
													<IconContext.Provider
														value={{
															style: { fontSize: "15px" },
														}}>
														<FaTimes />
													</IconContext.Provider>
												</button>

												<h3 className="cart__item__title">{item.title}</h3>

												<div className="cart__item__footer">
													<p>
														${price}
														.00 * {item.qty}
														<span>${price * item.qty}.00</span>
													</p>

													<div className="cart__item__counter">
														<IconContext.Provider
															value={{
																color: "#E94560",
																style: { fontSize: "15px" },
															}}>
															<button
																className="desCart"
																onClick={() =>
																	dispatch(decrementProductFromCartAction(item))
																}>
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
																onClick={() =>
																	dispatch(addProductToCartAction(item))
																}>
																<FaPlus />
															</button>
														</IconContext.Provider>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</Box>
						</Grid>

						{/* Cart Sidebar */}
						<Grid item className="e_cart__sidebar" xs={12} md={4}>
							<Card className="e_c__cart__wgt">
								<CardContent className="e_wgt__body">
									<Typography
										className="e_wgt__title"
										gutterBottom
										variant="h5"
										component="div">
										Cart Summary
									</Typography>

									<Stack
										className="e_cart__wgt__item"
										direction="row"
										justifyContent="space-between"
										alignItems="center">
										<Typography
											className="e_wgt__item__key"
											gutterBottom
											variant="div"
											component="div">
											Total Item
										</Typography>

										<Typography
											className="e_wgt__item__value"
											gutterBottom
											variant="div"
											component="div">
											{products.length}
										</Typography>
									</Stack>

									{/* Widget Footer */}
									<Box className="e_wgt__footer" gutterBottom>
										<Stack
											className="e_cart__wgt__item e_cart--total"
											direction="row"
											justifyContent="space-between"
											alignItems="center">
											<Typography
												className="e_wgt__item__key"
												gutterBottom
												variant="div"
												component="div">
												Total Price
											</Typography>

											<Typography
												className="e_wgt__item__value"
												gutterBottom
												variant="div"
												component="div">
												${totalPrice}
											</Typography>
										</Stack>
									</Box>
								</CardContent>
							</Card>

							<Stack className="e_cart__checkout">
								<Button className="e_cart__checkout__button">
									Proceed to checkout
								</Button>
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
};

export default Cart;
