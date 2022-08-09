import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";
import { IconContext } from "react-icons";

const AccountBody = ({ className, icon, title, children, ...rest }) => {
	return (
		<>
			<Box className={`account__body ${className}`} {...rest}>
				<Stack spacing="1.5rem">
					<Box className="acb__header">
						<Stack spacing={2} direction="horizontal" alignItems="center">
							<IconContext.Provider value={{ style: { fontSize: "20px" } }}>
								{icon}
							</IconContext.Provider>

							<Typography className="acb__title" variant="h1" gutterBottom>
								{title}
							</Typography>
						</Stack>
					</Box>

					<Box className="acb__body">{children}</Box>
				</Stack>
			</Box>
		</>
	);
};

AccountBody.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
};

export default AccountBody;
