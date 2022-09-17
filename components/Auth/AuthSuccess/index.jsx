import { Box, Typography } from "@mui/material";
import React, { memo } from "react";

const AuthSuccess = () => {
	return (
		<>
			<Box className="e_auth__success">
				<Typography className="e_as__body__title" component="h4">
					Authenticated successfully.
				</Typography>

				<Typography className="e_as_body_pra" component="h4">
					Wait for a moment. We are redirecting you to your account.
				</Typography>
			</Box>
		</>
	);
};

export default memo(AuthSuccess);
