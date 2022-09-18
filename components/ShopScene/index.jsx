import { Box, Container, Grid, Stack } from "@mui/material";
import Link from "next/link";
import React, { memo } from "react";
import { IconContext } from "react-icons";
import { AiFillCaretRight } from "react-icons/ai";
import { productItems } from "../../store/Data";
import ProductCard from "../Card/ProductCard";
import SideMenu from "./SideMenu";

const ShopScene = ({
	className = "",
	title,
	url,
	addToCart,
	shopItems,
	menu,
	...rest
}) => {
	return (
		<Box component="section" className={`e_shop className`} {...rest}>
			<Container className="shop__container" maxWidth="lg">
				<Grid className="" container spacing="20px">
					{/* Sidebar Menu */}
					<Grid item md={3} sm={0}>
						<SideMenu
							className="shop__menu"
							title="Brands"
							url={`/shop?category=phone`}
							menu={menu}
						/>
					</Grid>

					{/* Content Area */}
					<Grid item md={9} sm={12}>
						<Stack
							className="shop__header"
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							spacing={2}>
							<Box className="shop__header__left">
								<h2>{title}</h2>
							</Box>
							<Box className="shop__header__right">
								<Link href={url}>
									<a className="shop__header__link">
										<span className="link__text">View all</span>
										<IconContext.Provider
											value={{
												className: "link__icon",
												style: {
													fontSize: "16px",
												},
											}}>
											<AiFillCaretRight />
										</IconContext.Provider>
									</a>
								</Link>
							</Box>
						</Stack>

						<Box className="product-content">
							<Grid container>
								{productItems.map((shopItems, i) => (
									<Grid item key={i} lg={3} md={4} sm={6} xs={6}>
										<ProductCard
											key={shopItems.id}
											id={shopItems.id}
											className="box"
											title={shopItems.name}
											discount={shopItems.discount}
											thumbnail={shopItems.cover}
											price={shopItems.price}
											slug={shopItems.name
												.split(" ")
												.join("-")
												.toLocaleLowerCase()}
											addToCart={addToCart}
											addToWishList={console.log}
										/>
									</Grid>
								))}
							</Grid>

							{/* <ShopCart addToCart={addToCart} shopItems={shopItems} /> */}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default memo(ShopScene);
