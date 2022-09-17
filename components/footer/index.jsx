import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
const Footer = () => {
	return (
		<>
			<Box component="footer">
				<Container maxWidth="lg" className="grid2">
					<Grid container spacing={3}>
						<Grid item></Grid>
					</Grid>
					
					<div className="box">
						<h1>5G Shop</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
							libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
							et lectus vel ut sollicitudin elit at amet.
						</p>
						<div className="icon d_flex">
							<div className="img d_flex">
								<i className="fa-brands fa-google-play"></i>
								<span>Google Play</span>
							</div>
							<div className="img d_flex">
								<i className="fa-brands fa-app-store-ios"></i>
								<span>App Store</span>
							</div>
						</div>
					</div>

					<div className="box">
						<h2>Info</h2>
						<ul>
							<Link href="/return-policy" passHref>
								<li>Return Policy</li>
							</Link>
							<Link href="/support-policy" passHref>
								<li>Support & Policy</li>
							</Link>
							<Link href="/terms-condition" passHref>
								<li>Terms & Condition</li>
							</Link>
							<Link href="/privacy-policy" passHref>
								<li>Privacy Policy</li>
							</Link>
							<Link href="/about" passHref>
								<li>About Us</li>
							</Link>
						</ul>
					</div>
					<div className="box">
						<h2>Menu</h2>
						<ul>
							<Link href="/account" passHref>
								<li>Account</li>
							</Link>
							<Link href="/cart" passHref>
								<li>Cart</li>
							</Link>
							<Link href="/order-track" passHref>
								<li>Order Track</li>
							</Link>
						</ul>
					</div>
					<div className="box">
						<h2>Contact Us</h2>
						<ul>
							<li>
								70 Washington Square South, New York, NY 10012, United States{" "}
							</li>
							<li>Email: uilib.help@gmail.com</li>
							<li>Phone: +1 1123 456 780</li>
						</ul>
					</div>
				</Container>
			</Box>
		</>
	);
};

export default Footer;
