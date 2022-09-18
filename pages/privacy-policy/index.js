import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import Layout from "../../components/Layout";

const PrivacyPolicy = () => {
	return (
		<Layout className="page__about">
			<Box component="section" className="e_doc_page">
				<Container maxWidth="lg" className="e_doc_container" component={Card}>
					<CardContent className="e_doc_content">
						<Typography className="e_doc__title" component="h1">
							Privacy Policy
						</Typography>

						<Typography className="e_doc_content__body" variant="body1">
							This Privacy Policy clarifies how we gather, utilize and (Under
							specific conditions) uncover your own data. Information security
							involves trust and your protection is essential to us. We should,
							along these lines, just utilize your name and other data which
							identifies with you in the way set out in this Privacy Policy. We
							will just keep your data for whatever length of time that we are
							either required to by law or as is pertinent for the reasons for
							which it was gathered. You can visit the Site and peruse without
							providing individual points of interest. We are committed to
							ensure the security of your information. We maintain suitable
							physical, electronic and managerial procedures to safeguard and
							secure your information by preventing unauthorized access. Read
							here how we use cookies, debit/credit cards, other websites and
							contents.
						</Typography>

						<Typography
							className="e_doc_content__title"
							variant="h6"
							component="h2">
							How we use cookies:
						</Typography>
						<Typography className="e_doc_content__body" variant="body1">
							A cookie is a small file which asks permission to be placed on
							your computer&apos;s hard drive. Cookies allow web applications to
							respond to you as an individual. The web application can tailor
							its operations to your needs, likes and dislikes by gathering and
							remembering information about your preferences. We only use this
							information for statistical analysis purposes and then the data is
							removed from the system. A cookie in no way gives us access to
							your computer or any information about you, other than the data
							you choose to share with us.
						</Typography>

						<Typography
							className="e_doc_content__title"
							variant="h6"
							component="h2">
							Links to other websites:
						</Typography>
						<Typography className="e_doc_content__body" variant="body1">
							Our website may contain links to other websites of interest.
							However, once you have used these links to leave our site, you
							should note that we do not have any control over the other
							websites. Therefore, we cannot be responsible for the protection
							and privacy of any information which you provide whilst visiting
							such sites. We provide security only at our website.
						</Typography>

						<Typography
							className="e_doc_content__title"
							variant="h6"
							component="h2">
							Use of credit/debit cards:
						</Typography>
						<Typography className="e_doc_content__body" variant="body1">
							Shopping at kafela.com.bd is 100% safe. All Credit card and Debit
							card payments on kafela.com.bd are processed through secure and
							trusted payment gateways. When you transact here, you pay at the
							payment page which is incorporated with your respected bank. So,
							your bank deals with your credit/debit card information. You can
							be assured that Kafela offers you the highest standards of
							security currently available on the internet so as to ensure that
							your shopping experience is private, safe and secure.
						</Typography>

						<Typography
							className="e_doc_content__title"
							variant="h6"
							component="h2">
							Content you submit:
						</Typography>
						<Typography className="e_doc_content__body" variant="body1">
							You agree that any information submitted belongs to you or you
							have permission to submit them. Content means but is not
							restricted to text, graphics, photos, logos, audio/video files
							etc. You agree to indemnify us from all responsibility and not
							hold us responsible for displaying any information you submit to
							us.
						</Typography>
					</CardContent>
				</Container>
			</Box>
		</Layout>
	);
};

export default PrivacyPolicy;
