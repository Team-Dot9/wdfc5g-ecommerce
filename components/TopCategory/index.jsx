import React, { memo } from "react";
import Slider from "react-slick";
import Tdata from "./Tdata";

const TopCategory = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
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
			<section className="e_topCate">
				<div className="container">
					<div className="heading d_flex">
						<div className="heading-left row  f_flex">
							<i className="fa-solid fa-border-all"></i>
							<h2>Top Categories</h2>
						</div>
						<div className="heading-right row ">
							<span>View all</span>
							<i className="fa-solid fa-caret-right"></i>
						</div>
					</div>

					{/* Body Area Started */}
					<Slider {...settings}>
						{Tdata.map((value, index) => {
							return (
								<div className="box product" key={index}>
									<div className="nametop d_flex">
										<span className="tleft">{value.para}</span>
										<span className="tright">{value.desc}</span>
									</div>
									<div className="img">
										<img src={value.cover} alt="" />
									</div>
								</div>
							);
						})}
					</Slider>
					{/* Body Area Ended */}
				</div>
			</section>
		</>
	);
};

export default memo(TopCategory);
