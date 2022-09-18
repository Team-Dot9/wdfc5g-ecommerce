import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import { IconContext } from "react-icons";
import { AiFillCaretRight } from "react-icons/ai";

const WidgetSection = ({ children, className, icon, title, url, ...rest }) => {
	return (
		<Box component="section" className={`e_c_ws ${className}`} {...rest}>
			<Container maxWidth="lg">
				{/* Header Started */}
				<Box className="ws__head">
					<Box className="head__left">
						{icon && (
							<Image
								className="head__img"
								src={icon}
								width={40}
								height={30}
								alt={title}
							/>
						)}

						<Typography className="head__title">{title}</Typography>
					</Box>

					<Box className="head__right">
						<Link href={url}>
							<a>
								<span>View all</span>

								<IconContext.Provider value={{ style: { fontSize: "12px" } }}>
									<AiFillCaretRight />
								</IconContext.Provider>
							</a>
						</Link>
					</Box>
				</Box>
				{/* Header Ended */}

				{/* Body Started */}
				<Box className="ws__body">{children}</Box>
				{/* Body Ended */}
			</Container>
		</Box>
	);
};

export default memo(WidgetSection);
