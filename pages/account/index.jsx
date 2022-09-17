import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import React, { memo, useEffect, useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import AccountBody from "../../components/account/AccountBody";
import AccountCart from "../../components/account/AccountCart";
import AccountDashboard from "../../components/account/AccountDashboard";
import AccountOrders from "../../components/account/AccountOrders";
import AccountProducts from "../../components/account/AccountProducts";
import AccountSettings from "../../components/account/AccountSettings";
import AccountUsers from "../../components/account/AccountUsers";
import AccountWishlist from "../../components/account/AccountWishlist";
import AccountSidebar from "../../components/account/Sidebar";
import Container from "../../components/Container";
import Layout from "../../components/Layout";

const Account = () => {
	const [page, setPage] = useState("dashboard");
	const router = useRouter();
	const PAGE_INFO = {
		title: "Account",
		icon: <HiUser />,
	};

	useEffect(() => {
		setPage(router.asPath.split("#")[1]);
	}, [router.asPath]);

	return (
		<Layout className="e_page page__account">
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12} md={3} xl={2}>
						<AccountSidebar />
					</Grid>

					<Grid item xs={12} md={9} xl={10}>
						{page === "dashboard" && (
							<AccountBody title="Dashboard" icon={<AiOutlineDashboard />}>
								<AccountDashboard />
							</AccountBody>
						)}

						{page === "products" && (
							<AccountBody title="Products" icon={PAGE_INFO.icon}>
								<AccountProducts />
							</AccountBody>
						)}

						{page === "users" && (
							<AccountBody title="Users" icon={<BsFillPeopleFill />}>
								<AccountUsers />
							</AccountBody>
						)}

						{page === "orders" && (
							<AccountBody title="Orders" icon={PAGE_INFO.icon}>
								<AccountOrders />
							</AccountBody>
						)}

						{page === "wishlist" && (
							<AccountBody title="Wishlist" icon={PAGE_INFO.icon}>
								<AccountWishlist />
							</AccountBody>
						)}

						{page === "cart" && (
							<AccountBody title="Cart" icon={PAGE_INFO.icon}>
								<AccountCart />
							</AccountBody>
						)}

						{page === "settings" && (
							<AccountBody title="Settings" icon={PAGE_INFO.icon}>
								<AccountSettings />
							</AccountBody>
						)}
					</Grid>
				</Grid>
			</Container>
		</Layout>
	);
};

export default memo(Account);
