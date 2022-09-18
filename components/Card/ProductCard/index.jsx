import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import { IconContext } from "react-icons";
import { FaPlus } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";

const ProductCard = ({
	id,
	className,
	discount,
	title,
	price,
	thumbnail,
	slug,
	addToCart,
	addToWishList,
}) => {
	return (
		<Box className={`e_c_productCard ${className}`}>
			<Box className="productCard__thumbnail">
				<span className="productCard__discount">{discount}% Off</span>

				<Image src={thumbnail} width={270} height={270} alt={title} />

				<Box className="productCard__like">
					<IconContext.Provider
						value={{
							color: "#0f3460",
							style: { fontSize: "20px" },
						}}>
						<HiOutlineHeart onClick={() => addToWishList(id)} />
					</IconContext.Provider>
				</Box>
			</Box>

			<Box className="product-details">
				<h3 className="productCard__title">
					<Link href={`/shop/${slug}`}>
						<a>{title}</a>
					</Link>
				</h3>

				<Box className="productCard__footer">
					<Box className="productCard__price">
						{price?.special && (
							<p className="price__special">${price?.special}</p>
						)}

						<p
							className={`price__regular ${price.special ? "price--del" : ""}`}>
							${price?.regular}
						</p>
					</Box>

					<button
						onClick={() =>
							addToCart({
								_id: id,
								title,
								price,
								thumbnail,
								slug,
							})
						}>
						<IconContext.Provider
							value={{
								color: "#0f3460",
								style: { fontSize: "15px" },
							}}>
							<FaPlus />
						</IconContext.Provider>
					</button>
				</Box>
			</Box>
		</Box>
	);
};

export default memo(ProductCard);
