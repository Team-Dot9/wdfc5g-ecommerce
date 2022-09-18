import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { IconContext } from "react-icons";
import { FaHeadset, FaIdCard, FaShieldAlt, FaTruck } from "react-icons/fa";

const Wrapper = () => {
	const data = [
		{
			cover: <FaTruck />,
			title: "Worldwide Delivery",
			decs: "We offer competitive prices on our 100 million plus product any range.",
		},
		{
			cover: <FaIdCard />,
			title: "Safe Payment",
			decs: "We offer competitive prices on our 100 million plus product any range.",
		},
		{
			cover: <FaShieldAlt />,
			title: "Shop With Confidence ",
			decs: "We offer competitive prices on our 100 million plus product any range.",
		},
		{
			cover: <FaHeadset />,
			title: "24/7 Support ",
			decs: "We offer competitive prices on our 100 million plus product any range.",
		},
	];
	return (
		<>
			<Box component="section" className="wrapper background">
				<Container className="">
					<Grid container>
						{data.map((val, index) => (
							<Grid key={index} item lg={3} md={3} sm={6} sx={12}>
								<Box className="product">
									<Box className="img icon-circle">
										<IconContext.Provider
											value={{
												color: "rgb(43, 52, 69)",
												style: { fontSize: "28px" },
											}}>
											<i>{val.cover}</i>
										</IconContext.Provider>
									</Box>
									<h3>{val.title}</h3>
									<p>{val.decs}</p>
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Wrapper;
