import { Box, Container } from "@mui/material";
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
			<Box component="section" className="e_topCate">
				<Container maxWidth="lg" className="container">
					<Box className="heading d_flex">
						<Box className="heading-left row  f_flex">
							<i className="fa-solid fa-border-all"></i>
							<h2>Top Categories</h2>
						</Box>
						<Box className="heading-right row ">
							<span>View all</span>
							<i className="fa-solid fa-caret-right"></i>
						</Box>
					</Box>

					{/* Body Area Started */}
					<Slider {...settings}>
						{Tdata.map((value, index) => {
							return (
								<Box className="box product" key={index}>
									<Box className="nametop d_flex">
										<span className="tleft">{value.para}</span>
										<span className="tright">{value.desc}</span>
									</Box>
									<Box className="img">
										<img src={value.cover} alt="" />
									</Box>
								</Box>
							);
						})}
					</Slider>
					{/* Body Area Ended */}
				</Container>
			</Box>
		</>
	);
};

export default memo(TopCategory);
