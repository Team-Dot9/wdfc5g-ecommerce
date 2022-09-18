import { Box, Stack } from "@mui/material";
import Link from "next/link";
import React, { memo } from "react";

const SideMenu = ({ className = "", url, title, menu, ...rest }) => {
	return (
		<Box className={`e_bas ${className}`} {...rest}>
			<Box className="bas__wrapper">
				<Box className="bas__head d_flex">
					<h1>{title}</h1>
				</Box>

				<Box className="bas__body">
					{menu.map((value, index) => (
						<Box className="bas__item" key={index}>
							<Link href={`/shop?brand=${value.slug}`} passHref>
								<Stack
									direction="row"
									justifyContent="flex-start"
									alignItems="center"
									spacing="20px"
									component="a">
									<img src={value.img} alt="" />
									<span>{value.title}</span>
								</Stack>
							</Link>
						</Box>
					))}
				</Box>

				<Box className="bas__footer">
					<Link href={url} passHref>
						<a className="bas__item">View All</a>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default memo(SideMenu);
