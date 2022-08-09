import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AccountWeight = ({ className, title, children, ...rest }) => {
	return (
		<Box className={`account__body__wgt ${className ? className : ""}`}>
			<Grid container spacing={2}>
				{title && (
					<Grid item xs={12}>
						<Box className="acb_wgt__header">
							<h1>{title}</h1>
						</Box>
					</Grid>
				)}

				<Grid item xs={12}>
					<Box className="acb_wgt__body">{children}</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default AccountWeight;
