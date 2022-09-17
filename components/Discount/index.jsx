import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import ProductCardMini from "../Card/ProductCardMini";
import WidgetSection from "../WidgetSection";
import Ddata from "./Ddata";

const Discount = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

	return (
		<WidgetSection
			className="e_discount"
			title="Big Discounts"
			icon="https://img.icons8.com/windows/32/fa314a/gift.png"
			url="/shop">
			<Slider {...settings}>
				{Ddata.map((value, index) => (
					<Box className="e_discount__card" key={index}>
						<ProductCardMini
							id={index}
							className="discount__card"
							title={value.name}
							slug={value.name}
							thumbnail={value.cover}
							price={value.price}
						/>
					</Box>
				))}
			</Slider>
		</WidgetSection>
	);
};

export default Discount;
