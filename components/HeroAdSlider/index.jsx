import React from "react";
import Slider from "react-slick";

const S_DATA = [
	{
		id: 1,
		title: "50% Off For Your First Shopping",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
		cover: "./images/SlideCard/slide-1.png",
	},
	{
		id: 2,
		title: "50% Off For Your First Shopping",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
		cover: "./images/SlideCard/slide-2.png",
	},
	{
		id: 3,
		title: "50% Off For Your First Shopping",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
		cover: "./images/SlideCard/slide-3.png",
	},
	{
		id: 4,
		title: "50% Off For Your First Shopping",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
		cover: "./images/SlideCard/slide-4.png",
	},
];

const HeroAdSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		appendDots: (dots) => {
			return <ul style={{ margin: "0px" }}>{dots}</ul>;
		},
	};

	return (
		<>
			<section className="e_heroSlider contentWidth">
				<div className="container">
					<Slider {...settings}>
						{S_DATA.map((value, index) => {
							return (
								<>
									<div className="box d_flex top" key={index}>
										<div className="left">
											<h1>{value.title}</h1>
											<p>{value.desc}</p>
											<button className="btn-primary">Visit Collections</button>
										</div>
										<div className="right">
											<img src={value.cover} alt="" />
										</div>
									</div>
								</>
							);
						})}
					</Slider>
				</div>
			</section>
		</>
	);
};

export default HeroAdSlider;
