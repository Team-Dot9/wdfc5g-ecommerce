import React, { useState } from "react";
import { IconContext } from "react-icons";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import Slider from "react-slick";
import { productItems } from "../../store/Data.js";
import ProductCard from "../Card/ProductCard/index.jsx";

const SampleNextArrow = (props) => {
	const { onClick } = props;
	return (
		<div className="control-btn" onClick={onClick}>
			<button className="next">
				<IconContext.Provider
					value={{
						style: { width: "25px", height: "25px", fontSize: "25px" },
					}}>
					<HiArrowSmRight />
				</IconContext.Provider>
			</button>
		</div>
	);
};

const SamplePrevArrow = (props) => {
	const { onClick } = props;
	return (
		<div className="control-btn" onClick={onClick}>
			<button className="prev">
				<IconContext.Provider
					value={{
						style: { width: "25px", height: "25px", fontSize: "25px" },
					}}>
					<HiArrowSmLeft />
				</IconContext.Provider>
			</button>
		</div>
	);
};

const FlashDeals = ({ addToCart }) => {
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount(count + 1);
	};
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<>
			<section className="e_flashDeal">
				<div className="container">
					{/* Header Start */}
					<div className="heading f_flex">
						<i className="fa fa-bolt"></i>
						<h1>Flash Delas</h1>
					</div>
					{/* Header End */}

					{/* Body Start */}
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
					{/* Body End */}
				</div>
			</section>
		</>
	);
};

export default FlashDeals;
