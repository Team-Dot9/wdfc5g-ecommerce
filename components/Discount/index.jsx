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
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<>
			<WidgetSection
				className="e_discount"
				title="Big Discounts"
				icon="https://img.icons8.com/windows/32/fa314a/gift.png"
				url="/shop">
				<Slider {...settings}>
					{Ddata.map((value, index) => (
						<ProductCardMini
							key={index}
							id={index}
							className="discount__card"
							title={value.name}
							slug={value.name}
							thumbnail={value.cover}
							price={value.price}
						/>
						// <div className="discount__card box product" key={index}>
						// 	<div className="img">
						// 		<img src={value.cover} alt="" width="100%" />
						// 	</div>
						// 	<h4>{value.name}</h4>
						// 	<span>{value.price}</span>
						// </div>
					))}
				</Slider>
			</WidgetSection>
		</>
	);
};

export default Discount;
