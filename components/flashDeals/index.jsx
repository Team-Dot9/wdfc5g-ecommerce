import React from "react";
import Slider from "react-slick";
import { productItems } from "../../store/Data.js";

const SampleNextArrow = (props) => {
	const { onClick } = props;
	return (
		<div className="control-btn" onClick={onClick}>
			<button className="next">
				<i className="fa fa-long-arrow-alt-right"></i>
			</button>
		</div>
	);
};

const SamplePrevArrow = (props) => {
	const { onClick } = props;
	return (
		<div className="control-btn" onClick={onClick}>
			<button className="prev">
				<i className="fa fa-long-arrow-alt-left"></i>
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
			<section className="flash">
				<div className="container">
					{/* Header Start */}
					<div className="heading f_flex">
						<i className="fa fa-bolt"></i>
						<h1>Flash Delas</h1>
					</div>
					{/* Header End */}

					{/* Body Start */}
					<Slider {...settings}>
						{productItems.map((productItems, i) => {
							return (
								<div key={i} className="box">
									<div className="product mtop">
										<div className="img">
											<span className="discount">
												{productItems.discount}% Off
											</span>
											<img src={productItems.cover} alt="" />
											<div className="product-like">
												<label>{count}</label> <br />
												<i
													className="fa-regular fa-heart"
													onClick={increment}></i>
											</div>
										</div>
										<div className="product-details">
											<h3>{productItems.name}</h3>
											<div className="rate">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
											<div className="price">
												<h4>${productItems.price}.00 </h4>
												{/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
												<button onClick={() => addToCart(productItems)}>
													<i className="fa fa-plus"></i>
												</button>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</Slider>
					{/* Body End */}
				</div>
			</section>
		</>
	);
};

export default FlashDeals;