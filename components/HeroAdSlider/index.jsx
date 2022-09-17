import { Box, Container, Grid, Typography } from "@mui/material";
import React, { memo } from "react";
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
			<Box component="section" className="e_heroSlider">
				<Container className="hs__container">
					<Slider {...settings}>
						{S_DATA.map((value, index) => (
							<Box key={index}>
								<Grid container spacing={2} className="hs__slide">
									<Grid item className="hs__left" md={8} sm={8} xs={8}>
										<Typography className="hs__title">{value.title}</Typography>
										<Typography className="hs_desc">{value.desc}</Typography>
										<button className="btn-primary hs__button">
											Visit Collections
										</button>
									</Grid>
									<Grid item className="hs__right" md={4} sm={4} xs={4}>
										<img className="hs__img" src={value.cover} alt="" />
									</Grid>
								</Grid>
							</Box>
						))}
					</Slider>
				</Container>
			</Box>
		</>
	);
};

export default memo(HeroAdSlider);
