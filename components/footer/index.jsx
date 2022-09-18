import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
const Footer = () => {
	return (
		<Box className="e_footer" component="footer">
			<Container maxWidth="lg" className="footer__container">
				<Grid className="footer__grid" container spacing={5}>
					<Grid
						className="footer__grid__item"
						item
						lg={4}
						md={4}
						sm={12}
						xs={12}>
						<Box className="footer__wgt wgt--0">
							<Typography className="footer__brand" variant="h1" component="h2">
								5G Shop
							</Typography>
							<Typography className="footer__desc" variant="body2">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
								libero id et, in gravida. Sit diam duis mauris nulla cursus.
								Erat et lectus vel ut sollicitudin elit at amet.
							</Typography>
						</Box>
					</Grid>

					<Grid className="footer__grid__item" item lg={2} md={2} sm={6} xs={6}>
						<Box className="footer__wgt wgt--1">
							<Typography className="wgt__title" component="h2">
								Info
							</Typography>
							<ul>
								<Link href="/return-policy" passHref>
									<Typography variant="body2" component="li">
										Return Policy
									</Typography>
								</Link>
								<Link href="/support-policy" passHref>
									<Typography variant="body2" component="li">
										Support & Policy
									</Typography>
								</Link>
								<Link href="/terms-condition" passHref>
									<Typography variant="body2" component="li">
										Terms & Condition
									</Typography>
								</Link>
								<Link href="/privacy-policy" passHref>
									<Typography variant="body2" component="li">
										Privacy Policy
									</Typography>
								</Link>
								<Link href="/about" passHref>
									<Typography variant="body2" component="li">
										About Us
									</Typography>
								</Link>
							</ul>
						</Box>
					</Grid>

					<Grid className="footer__grid__item" item lg={2} md={2} sm={6} xs={6}>
						<Box className="footer__wgt wgt--2">
							<Typography className="wgt__title" component="h2">
								Menu
							</Typography>
							<ul>
								<Link href="/account" passHref>
									<Typography variant="body2" component="li">
										Account
									</Typography>
								</Link>
								<Link href="/cart" passHref>
									<Typography variant="body2" component="li">
										Cart
									</Typography>
								</Link>
								<Link href="/order-track" passHref>
									<Typography variant="body2" component="li">
										Order Track
									</Typography>
								</Link>
							</ul>
						</Box>
					</Grid>

					<Grid
						className="footer__grid__item"
						item
						lg={4}
						md={4}
						sm={12}
						xs={12}>
						<Box className="footer__wgt wgt--3">
							<Typography className="wgt__title" component="h2">
								Contact Us
							</Typography>
							<ul>
								<Typography variant="body2" component="li">
									70 Washington Square South, New York, NY 10012, United States{" "}
								</Typography>
								<Typography variant="body2" component="li">
									Email: uilib.help@gmail.com
								</Typography>
								<Typography variant="body2" component="li">
									Phone: +1 1123 456 780
								</Typography>
							</ul>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
