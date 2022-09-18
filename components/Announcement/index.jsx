import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import AD1 from "../../assets/images/ad/ad1.jpg";
import AD2 from "../../assets/images/ad/ad2.jpg";
import AD3 from "../../assets/images/ad/ad3.jpg";

const ADS = [
	{
		_id: "AD001",
		title: "Advertisement 1",
		url: "/ad1",
		img: AD1,
	},
	{
		_id: "AD002",
		title: "Advertisement 2",
		url: "/ad2",
		img: AD2,
	},
	{
		_id: "AD003",
		title: "Advertisement 3",
		url: "/ad3",
		img: AD3,
	},
];

const mystyle = {
	width: "30%",
	height: "340px",
};
const mystyle1 = {
	width: "68%",
	height: "340px",
};
const Announcement = () => {
	return (
		<>
			{/* New Box */}
			<Box className="e_announcement" component="section">
				<Container className="am__container">
					<Grid container className="am__grid" spacing="20px">
						{ADS.map((ad, i) => (
							<Grid className="am__grid__item" item md={4} sm={12} key={i}>
								<Box className={`am__ad am__ad__${i}`}>
									<Image
										className="am__img"
										src={ad.img}
										width={428}
										height={228}
										alt={ad.title}
									/>
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<style jsx>{`
				.e_announcement {
				}
				.e_announcement .am__container {
					padding-top: 60px;
					padding-bottom: 60px;
				}
				.e_announcement .am__grid {
				}
				.e_announcement .am__grid__item {
				}
				.e_announcement .am__ad {
				}
				.e_announcement .am__img {
				}
			`}</style>
		</>
	);
};

export default Announcement;
