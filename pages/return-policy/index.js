import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import Layout from "../../components/Layout";

const ReturnPolicy = () => {
	return (
		<Layout className="page__about">
			<Box component="section" className="e_doc_page">
				<Container maxWidth="lg" className="e_doc_container" component={Card}>
					<CardContent className="e_doc_content">
						<Typography className="e_doc__title" component="h1">
							Delivery Policy:
						</Typography>

						<Typography className="e_doc_content__body" variant="body1">
							<strong>Kafela</strong> opens the doorway shop over the Internet.
							We (Kafela) provide any amount of parched product order at your
							doorsteps with low delivery charge. We process all deliveries
							through Kafela delivery service or reputed courier services. We
							deliver products all over the area as well as the Jhenaidah City.
							If there is any modification in delivery charge for a particular
							item, it is mentioned in product details. Order confirmation and
							delivery completion are subject to product availability. Delivery
							time may differ from one item to another. It can differ from
							standard delivery to beyond that.
						</Typography>

						<Typography
							className="e_doc_content__title"
							variant="h6"
							component="h2">
							Standard Delivery:
						</Typography>

						<Typography className="e_doc_content__body" variant="body1">
							If your delivery address is within Jhenaidah City, products will
							be delivered by within 1 working day. If it is outside Jhenaidah,
							it will take 2-5 business days. If you order after 6 PM, it will
							be considered as an order of next business day. Our Business Day:
							Saturday to Thursday except public holidays.
						</Typography>

						<Typography
							className="e_doc_content__title"
							variant="h6"
							component="h2">
							Delivery from out side of Jhenaidah:
						</Typography>

						<Typography className="e_doc_content__body" variant="body1">
							There are some exceptional product that we provide from outside
							Jhenaidah (Vendors from Dhaka or Other area). These Product can
							take 3 or more days to reach you. However, you will receive your
							order within the time specified.
							<br />
							You can make your purchases on Kafela.com.bd and get delivery from
							anywhere in the Jhenaidah City. Delivery charge varies according
							to customer&apos;s place. In case of paid order, Kafela cannot be
							held liable if customer does not receive it within 4 weeks.
						</Typography>

						<Typography
							className="e_doc_content__title"
							variant="h6"
							component="h2">
							Replacement Policy:
						</Typography>

						<Typography className="e_doc_content__body" variant="body1">
							We provide great customer experience each time you shop with your
							Kafela. If you are not satisfied with your purchase, we ensure
							‘Replacement’. Change of mind is not applicable for replacement of
							product and Our refunds and replacements do not apply to Flash
							Sale Product. We will replace your purchased product if the
							product has any defect by its supplier or if the product is not
							the same one you ordered. Please check your products in front of
							delivery man or courier service agents.
						</Typography>
						<Typography>
							All you need to do is give us a call or drop an email at
							info@kafela.com.bd within a period of 6 hours from the time of
							delivery. However, please return the product with the tags intact
							and in their original packaging, in an unwashed and undamaged
							condition. Replacement for products is subject to inspection and
							checking by moom team. Replacement cannot be possible if the
							product is burnt, damaged by short circuit, or broken by customer.
							We give the option of taking back the product from your doorstep
							at Mymensingh providing our delivery man where you need to pay
							charge for it. Other wise, you need to send it by courier/yourself
							to our office address (Baparipara, Infront of Govt. K.C College,
							745 Beparypara Rd). Damages due to neglect, improper usage or
							application will not be covered under our &apos;Replacement&apos;.
						</Typography>

						<Typography className="e_doc_content__body" variant="body1">
							In case of product&apos;s sold out at merchant&apos;s end,
							customer can choose any other product from our website or can keep
							the amount refund to his/her wallet account.
						</Typography>

						<Typography className="e_doc_content__body" variant="body1">
							Note: Product Change or warranty of product is depend on policy of
							Seller/Manufacturer.
						</Typography>
					</CardContent>
				</Container>
			</Box>
		</Layout>
	);
};

export default ReturnPolicy;
