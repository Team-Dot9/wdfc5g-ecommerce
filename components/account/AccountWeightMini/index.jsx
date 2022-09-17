import { Card, CardContent, CardHeader } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AccountWeightMini = ({ className, title, children, ...rest }) => {
	return (
		<Box
			className={`e_c__dash__wgtm ${className ? className : ""}`}
			component={Card}>
			{title && (
				<CardHeader
					className="e_c__dash__wgtm__header"
					titleTypographyProps={{ className: "e_wgtm__header__title" }}
					title={title}
					sx={{ fontSize: "18px" }}
				/>
			)}

			<CardContent className="e_c__dash__wgtm__body">{children}</CardContent>
		</Box>
	);
};

export default AccountWeightMini;
