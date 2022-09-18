import { Box } from "@mui/material";
import React, { memo } from "react";
import { IconContext } from "react-icons";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import Slider from "react-slick";
import { productItems } from "../../store/Data.js";
import ProductCard from "../Card/ProductCard/index.jsx";
import WidgetSection from "../WidgetSection/index.jsx";

const SampleNextArrow = (props) => {
	const { onClick } = props;
	return (
		<Box className="control-btn" onClick={onClick}>
			<button className="next">
				<IconContext.Provider
					value={{
						style: { width: "25px", height: "25px", fontSize: "25px" },
					}}>
					<HiArrowSmRight />
				</IconContext.Provider>
			</button>
		</Box>
	);
};

const SamplePrevArrow = (props) => {
	const { onClick } = props;
	return (
		<Box className="control-btn" onClick={onClick}>
			<button className="prev">
				<IconContext.Provider
					value={{
						style: { width: "25px", height: "25px", fontSize: "25px" },
					}}>
					<HiArrowSmLeft />
				</IconContext.Provider>
			</button>
		</Box>
	);
};

const FlashDeals = ({ addToCart }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
			<WidgetSection
				className="e_flashDeal"
				title="Flash Deals"
				// icon="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
				url="/shop?tag=flash-deals">
				<Slider {...settings}>
					{productItems.map((productItem, i) => (
						<ProductCard
							key={productItem.id}
							id={productItem.id}
							className="box"
							title={productItem.name}
							discount={productItem.discount}
							thumbnail={productItem.cover}
							price={productItem.price}
							slug={productItem.name.split(" ").join("-").toLocaleLowerCase()}
							addToCart={addToCart}
							addToWishList={console.log}
						/>
					))}
				</Slider>
			</WidgetSection>
		</>
	);
};

export default memo(FlashDeals);
