import { Grid } from "@mui/material";
import React, { useState } from "react";
import { HiUser } from "react-icons/hi";
import AccountBody from "../../components/account/AccountBody";
import AccountWeight from "../../components/account/AccountWeight";
import AccountWishlist from "../../components/account/AccountWishlist";
import AccountSidebar from "../../components/account/Sidebar";
import Container from "../../components/Container";
import Layout from "../../components/Layout";

const Account = () => {
	const [page, setPage] = useState("wishlist");
	const PAGE_INFO = {
		title: "Account",
		icon: <HiUser />,
	};

	return (
		<Layout className="e_page page__account">
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={3}>
						<AccountSidebar />
					</Grid>

					<Grid item xs={9}>
						<AccountBody title={PAGE_INFO?.title} icon={PAGE_INFO.icon}>
							{page === "wishlist" && (
								<AccountWeight>
									<AccountWishlist />
								</AccountWeight>
							)}
						</AccountBody>
					</Grid>
				</Grid>
			</Container>
		</Layout>
	);
};

export default Account;
