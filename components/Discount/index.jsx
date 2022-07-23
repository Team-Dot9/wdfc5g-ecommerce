import React from "react";
import Slider from "react-slick";
import Ddata from "./Ddata";

const Discount = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<>
			<section className="Discount background NewArrivals">
				<div className="container">
					{/* Header Area Started */}
					<div className="heading d_flex">
						<div className="heading-left row  f_flex">
							<img src="https://img.icons8.com/windows/32/fa314a/gift.png" />
							<h2>Big Discounts</h2>
						</div>
						<div className="heading-right row ">
							<span>View all</span>
							<i className="fa-solid fa-caret-right"></i>
						</div>
					</div>
					{/* Header Area Ended */}

					{/* Body Area Started */}
					<Slider {...settings}>
						{Ddata.map((value, index) => {
							return (
								<>
									<div className="box product" key={index}>
										<div className="img">
											<img src={value.cover} alt="" width="100%" />
										</div>
										<h4>{value.name}</h4>
										<span>{value.price}</span>
									</div>
								</>
							);
						})}
					</Slider>

					{/* Body Area Ended */}
				</div>
			</section>
		</>
	);
};

export default Discount;
