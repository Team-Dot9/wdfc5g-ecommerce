import React, { memo } from "react";
import Slider from "react-slick";
import ProductCardMini from "../Card/ProductCardMini";
import WidgetSection from "../WidgetSection";
import Ndata from "./Ndata";

const NewArrivals = () => {
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
