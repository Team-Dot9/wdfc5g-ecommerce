import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

const ProductCardMini = ({
	id,
	className,
	title,
	slug,
	thumbnail,
	price,
	...rest
}) => {
	return (
		<Box
			className={`e_c_pcm card-${id} ${className}`}
			id={`pcm${id}`}
			sx={{ padding: "10px" }}
			{...rest}>
			<Box className="pcm__thumbnail">
				<Image
					className="pcm__img"
					width={198}
					height={198}
					src={thumbnail}
					alt={title}
				/>
			</Box>

			<Typography className="pcm__title">
				<Link href={`/shop/${slug}`}>
					<a>{title}</a>
				</Link>
			</Typography>

			<Box className="pcm__price">
				{price?.special && <p className="price__special">${price?.special}</p>}

				<Typography
					className={`price__regular ${price.special ? "price--del" : ""}`}>
					${price?.regular}
				</Typography>
			</Box>
		</Box>
	);
};

export default memo(ProductCardMini);
