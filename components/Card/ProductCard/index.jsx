import Image from "next/image";
import Link from "next/link";
import React from "react";
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
		<>
			<div className={`e_c_productCard ${className}`}>
				<div className="productCard__thumbnail">
					<span className="productCard__discount">{discount}% Off</span>

					<Image src={thumbnail} width={270} height={270} alt={title} />

					<div className="productCard__like">
						<IconContext.Provider
							value={{
								color: "#0f3460",
								style: { fontSize: "20px" },
							}}>
							<HiOutlineHeart onClick={() => addToWishList(id)} />
						</IconContext.Provider>
					</div>
				</div>

				<div className="product-details">
					<h3 className="productCard__title">
						<Link href={`/shop/${slug}`}>
							<a>{title}</a>
						</Link>
					</h3>

					<div className="productCard__footer">
						<div className="productCard__price">
							{price?.special && (
								<p className="price__special">${price?.special}</p>
							)}

							<p
								className={`price__regular ${
									price.special ? "price--del" : ""
								}`}>
								${price?.regular}
							</p>
						</div>

						<button onClick={() => addToCart(productItems)}>
							<IconContext.Provider
								value={{
									color: "#0f3460",
									style: { fontSize: "15px" },
								}}>
								<FaPlus />
							</IconContext.Provider>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
