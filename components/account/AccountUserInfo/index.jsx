import {
	Box,
	Chip,
	Container,
	Drawer,
	Grid,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Toolbar,
	Typography,
} from "@mui/material";
import React from "react";
import { IoMdEye } from "react-icons/io";
import { MdOutlineArrowBack } from "react-icons/md";
import AccountWeightMini from "../AccountWeightMini";

const ORDERS = [
	{
		id: "ORD001",
		date: "Jun 3, 2022",
		invoice: "INV001",
		payment: "Bkask",
		total: "455",
		status: "cancelled",
	},
	{
		id: "ORD002",
		date: "Jun 3, 2022",
		invoice: "INV002",
		payment: "Bkask",
		total: "455",
		status: "completed",
	},
	{
		id: "ORD003",
		date: "Jun 3, 2022",
		invoice: "INV003",
		payment: "Bkask",
		total: "455",
		status: "completed",
	},
	{
		id: "ORD004",
		date: "Jun 3, 2022",
		invoice: "INV004",
		payment: "Bkask",
		total: "455",
		status: "completed",
	},
	{
		id: "ORD005",
		date: "Jun 3, 2022",
		invoice: "INV005",
		payment: "Bkask",
		total: "455",
		status: "completed",
	},
	{
		id: "ORD006",
		date: "Jun 3, 2022",
		invoice: "INV006",
		payment: "Bkask",
		total: "455",
		status: "completed",
	},
	{
		id: "ORD007",
		date: "Jun 3, 2022",
		invoice: "INV007",
		payment: "Bkask",
		total: "455",
		status: "completed",
	},
];

export default function AccountUserInfo({
	className,
	user,
	setUser,
	userDrawer,
	setUserDrawer,
	...rest
}) {
	const onCloseHandler = () => {
		setUser({});
		setUserDrawer(false);
	};

	return (
		<Drawer
			variant="persistent"
			className={`e_user__info__drawer ${className}`}
			anchor="right"
			open={userDrawer}
			onClose={onCloseHandler}
			{...rest}>
			<Box className="e_user__info">
				<Container className="e_user__info__container">
					<Toolbar className="e_user__info__toolbar" disableGutters>
						<IconButton
							// size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={onCloseHandler}
							sx={{ mr: 1 }}>
							<MdOutlineArrowBack />
						</IconButton>
						<Typography
							className="e_user__info__title"
							variant="h3"
							component="h3">
							User Information
						</Typography>
					</Toolbar>

					<Grid container spacing={3}>
						{/* Personal */}
						<Grid item xs={12} md={12} lg={12}>
							<AccountWeightMini
								className="e_user__info_personal"
								title="Personal Info">
								<Table>
									<TableBody>
										<TableRow>
											<TableCell>ID</TableCell>
											<TableCell>{user?.id?.toUpperCase()}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Created AT</TableCell>
											<TableCell>June 23, 2022 11:54:55 PM</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Name</TableCell>
											<TableCell>Abu Taher Muhammad</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Email</TableCell>
											<TableCell>example@mail.com</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Phone</TableCell>
											<TableCell>+880 1627085640</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Country</TableCell>
											<TableCell>Bangladesh</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>City</TableCell>
											<TableCell>Sylhet</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Street</TableCell>
											<TableCell>Road: 43, Block: C, Uposhahar</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>ZIP Code</TableCell>
											<TableCell>3100</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</AccountWeightMini>
						</Grid>

						{/* Orders */}
						<Grid item xs={12} md={12} lg={12}>
							<AccountWeightMini
								className="e_user__info_personal"
								title="Orders">
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>SL</TableCell>
											<TableCell>Invoice</TableCell>
											<TableCell>Date</TableCell>
											<TableCell>Payment</TableCell>
											<TableCell>Total</TableCell>
											<TableCell>Status</TableCell>
											<TableCell>Action</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{ORDERS.map((order, i) => {
											// id: "ORD001",
											// date: "Jun 3, 2022",
											// invoice: "INV001",
											// payment: "Bkask",
											// total: "455",
											// status: "completed",
											return (
												<TableRow key={i} id={`e_order-${order?.invoice}`}>
													<TableCell>{i}</TableCell>
													<TableCell align="left">{order?.invoice}</TableCell>
													<TableCell>{order?.invoice?.toUpperCase()}</TableCell>
													<TableCell>{order?.payment}</TableCell>
													<TableCell>{order?.total}</TableCell>
													<TableCell align="left">
														<Chip
															label={order.status}
															variant="outlined"
															size="small"
															color={
																order.status === "completed"
																	? "primary"
																	: "error"
															}
														/>
													</TableCell>
													<TableCell padding="none" align="center">
														<IconButton
															onClick={() => showInfoHandler(user)}
															area-label="view user"
															variant="outline">
															<IoMdEye />
														</IconButton>
													</TableCell>
												</TableRow>
											);
										})}
									</TableBody>
								</Table>
							</AccountWeightMini>
						</Grid>

						<Grid item xs={12} md={6} lg={6}>
							<AccountWeightMini
								className="e_user__info_activity"
								title="Activity">
								<Table>
									<TableBody>
										<TableRow>
											<TableCell>Last visited</TableCell>
											<TableCell>June 23, 2022 11:54:55 PM</TableCell>
										</TableRow>

										<TableRow>
											<TableCell>Device</TableCell>
											<TableCell>Windows 10</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</AccountWeightMini>
						</Grid>

						<Grid item xs={12} md={6} lg={6}>
							<AccountWeightMini
								className="e_user__info_activity"
								title="Devices">
								<Table>
									<TableBody>
										<TableRow>
											<TableCell>Last visited</TableCell>
											<TableCell>June 23, 2022 11:54:55 PM</TableCell>
										</TableRow>

										<TableRow>
											<TableCell>Device</TableCell>
											<TableCell>Windows 10</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</AccountWeightMini>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Drawer>
	);
}
