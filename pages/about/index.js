import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import Layout from "../../components/Layout";

const About = () => {
	return (
		<Layout className="page__about">
			<Box component="section" className="e_doc_page">
				<Container maxWidth="lg" className="e_doc_container" component={Card}>
					<CardContent className="e_doc_content">
						<Typography className="e_doc__title" component="h1">
							About Us
						</Typography>

						<Typography className="e_doc_content__body" variant="body1">
							Now shopping is easier, faster and always joyous. We help you make
							the best choice here. kafela.com.bd is the biggest online market
							platform for Jhenaidah City offering completely hassle-free
							shopping experience through secure and trusted gateways. We offer
							you easy and reliable shopping with all your favorite brands,
							local brand in Jhenaidah and more. Kafela provides products from
							all categories such as appliance, clothing, cosmetics,
							electronics, footwear, jewellery, health & beauty, medicine,
							repair service, car rent and still counting! Our collection
							combines the latest in fashion trends as well as the all-time
							favorites. Our products collections are exclusively selected for
							you. We have all that you need under one Platform.
						</Typography>
						<Typography className="e_doc_content__body" variant="body1">
							In consistency with the vision of Digital Bangladesh, Kafela
							provide service/product to the doorway over the Internet. We
							constantly update with lot of new products, services and special
							offers.{" "}
						</Typography>
						<Typography className="e_doc_content__body" variant="body1">
							Kafela gives you the best market experience possible so you can
							save your valuable time and money. You can pay using all types of
							payment gateways. If you want to return a product or service for
							any reason after receiving it, you will get an easy return system.
							So let&apos;s go to the Kafela.com.bd .
						</Typography>
						<Typography className="e_doc_content__body" variant="body1">
							Kafela.com.bd is a one of the largest online shop for Grocery,
							Fashion, Electronics, Health, Beauty & Much More..
						</Typography>
					</CardContent>
				</Container>
			</Box>
		</Layout>
	);
};

export default About;
