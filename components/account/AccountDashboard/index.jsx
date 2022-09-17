import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const widget = [
	{
		title: "Total Orders",
		counter: "1",
	},
	{
		title: "Pending Orders",
		counter: "1",
	},
	{
		title: "Processing Orders",
		counter: "5",
	},
	{
		title: "Cancel Orders",
		counter: "0",
	},
	{
		title: "Delivered Orders",
		counter: "0",
	},
	{
		title: "Total Products",
		counter: "9",
	},
	{
		title: "Pending Products",
		counter: "12",
	},
	{
		title: "Total Customers",
		counter: "12",
	},
	{
		title: "Total Employee",
		counter: "5",
	},
];

const StatsCard = ({ className, title, counter }) => {
	return (
		<Card className={`e_stats__card ${className}`}>
			<CardContent className="e_stats__card__content">
				<Typography className="e_stats__card__title" gutterBottom>
					{title}
				</Typography>
				<Typography
					className="e_stats__card__counter"
					variant="h5"
					component="div">
					{counter}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default function AccountDashboard() {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [permission, setPermission] = useState("general");
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	return (
		<Box className="e_dashboard__stats">
			<Grid container spacing={2}>
				{widget.map((item, index) => (
					<Grid item xs={6} sm={6} md={3} key={index}>
						<StatsCard title={item.title} counter={item.counter} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
