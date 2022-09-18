import { Box } from "@mui/material";
import React, { memo } from "react";
import { IconContext } from "react-icons";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import Slider from "react-slick";
import ProductCardMini from "../Card/ProductCardMini";
import WidgetSection from "../WidgetSection";
import Ndata from "./Ndata";

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

const NewArrivals = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 6,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

	return (
		<WidgetSection
			className="e_newArrivals"
			title="New Arrivals"
			icon="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
			url="/shop">
			<Slider {...settings}>
				{Ndata.map((item, index) => (
					<ProductCardMini
						key={index}
						className=""
						id={index}
						title={item.name}
						thumbnail={item.cover}
						price={item.price}
					/>
				))}
			</Slider>
		</WidgetSection>
	);
};

export default memo(NewArrivals);
