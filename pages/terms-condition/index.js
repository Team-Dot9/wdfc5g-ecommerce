import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import Layout from "../../components/Layout";

const TermsCondition = () => {
	return (
		<Layout className="page__about">
			<Box component="section" className="e_doc_page">
				<Container maxWidth="lg" className="e_doc_container" component={Card}>
					<CardContent className="e_doc_content">
						<Typography className="e_doc__title" component="h1">
							Terms & Conditions
						</Typography>

						<Typography className="e_doc_content__body" variant="body1">
							Welcome to kafela.com.bd also hereby known as &quot;we&quot;,
							&quot;us&quot; or &quot;Kafela&quot;. We are an online marketplace
							and these are the terms and conditions governing your access and
							use of kafela along with its related sub-domains, sites, services
							and tools (the &quot;Site&quot;). By using the Site, you hereby
							accept these terms and conditions (including the linked
							information herein) and represent that you agree to comply with
							these terms and conditions (the &quot;User Agreement&quot;). This
							User Agreement is deemed effective upon your use of the Site which
							signifies your acceptance of these terms. If you do not agree to
							be bound by this User Agreement please do not access, register
							with or use this Site. This Site is owned and operated by
							www.kafela.com.bd.
						</Typography>
						<Typography className="e_doc_content__body" variant="body1">
							When you use moom.com.bd, we collect and store your personal
							information which is provided by you from time to time. Our
							primary goal in doing so is to provide you a safe, efficient, and
							customized experience. This allows us to provide services and
							features that most likely meet your needs. If you choose to buy on
							the website, we collect information about your buying behavior.
						</Typography>
						<Typography className="e_doc_content__body" variant="body1">
							If you choose to mail us or leave feedback, we will collect that
							information you provide to us. We retain this information as
							necessary to resolve disputes, provide customer support and
							troubleshoot problems as permitted by law. In our efforts to
							continually improve our product and service offerings, we collect
							and analyze demographic and profile data about our users’ activity
							on our website. Our website may link to other websites too. These
							links are provided for your convenience to provide further
							information. Kafela is not responsible for the practices, term of
							use or the content of those linked websites.
						</Typography>
						<Typography className="e_doc_content__body" variant="body1">
							This website contains materials which are owned by us. These
							materials include, but are not limited to, the design, look,
							appearance, data, and graphics. Reproduction is prohibited other
							than in accordance with the copyright law. Unauthorized use of
							this site may give rise to a claim for damages. Products at this
							e-commerce portal are sold by respective sellers. All materials on
							this site are protected by copyrights, trademarks, and other
							intellectual property rights. Material on website is solely for
							personal and non-commercial use of users. Without the prior
							written consent of the owner, modification or use of the materials
							on any other website is violation of the law, and is prohibited.
						</Typography>
						<Typography className="e_doc_content__body" variant="body1">
							The Site reserves the right to change, modify, add, or remove
							portions of these Terms and Conditions at any time without any
							prior notification. Changes will be effective when posted on the
							Site with no other notice provided. Please check these Terms and
							conditions regularly for updates. Your continued use of the Site
							following the posting of changes to Terms and Conditions of use
							constitutes your acceptance of those changes.
						</Typography>
					</CardContent>
				</Container>
			</Box>
		</Layout>
	);
};

export default TermsCondition;
