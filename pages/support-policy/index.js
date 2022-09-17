import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import Layout from "../../components/Layout";

const SupportPolicy = () => {
	return (
		<Layout className="page__about">
			<Box component="section" className="e_doc_page">
				<Container maxWidth="lg" className="e_doc_container" component={Card}>
					<CardContent className="e_doc_content">
						<Typography className="e_doc__title" component="h1">
							Support Policy
						</Typography>

						<Typography className="e_doc_content__body" variant="body1">
							Now shopping is easier, faster and always joyous. We help you make
							the best choice here. <strong>kafela.com.bd</strong> is the
							biggest online market platform for Jhenaidah City offering
							completely hassle-free shopping experience through secure and
							trusted gateways. We offer you easy and reliable shopping with all
							your favorite brands, local brand in Jhenaidah and more.{" "}
							<string>Kafela</string> provides products from all categories such
							as appliance, clothing, cosmetics, electronics, footwear,
							jewellery, health & beauty, medicine, repair service, car rent and
							still counting! Our collection combines the latest in fashion
							trends as well as the all-time favorites. Our products collections
							are exclusively selected for you. We have all that you need under
							one Platform.
						</Typography>
						<Typography className="e_doc_content__body" variant="body1">
							In consistency with the vision of Digital Bangladesh, Kafela
							provide service/product to the doorway over the Internet. We
							constantly update with lot of new products, services and special
							offers.
						</Typography>
						<Typography className="e_doc_content__body" variant="body1">
							We provide our customers with memorable online shopping
							experience. We provide on-time delivery of products and quick
							resolution of any concerns. You can choose whatever you like. We
							deliver it right at your address across Jhenaidah City. Our
							services are at your doorsteps all the time. Select the best
							products for you or your family with the best online marketing
							experience every time. You will fell love online marketing with{" "}
							<strong>kafela.com.bd</strong>
						</Typography>
					</CardContent>
				</Container>
			</Box>
		</Layout>
	);
};

export default SupportPolicy;
