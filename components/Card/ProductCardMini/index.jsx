import Image from "next/image";
import Link from "next/link";
import React from "react";

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
		<>
			<div
				className={`e_c_pcm card-${id} ${className}`}
				id={`pcm${id}`}
				{...rest}>
				<div className="pcm__thumbnail">
					<Image
						className="pcm__img"
						width={198}
						height={198}
						src={thumbnail}
						alt={title}
					/>
				</div>

				<h3 className="pcm__title">
					<Link href={`/shop/${slug}`}>
						<a>{title}</a>
					</Link>
				</h3>

				<div className="pcm__price">
					{price?.special && (
						<p className="price__special">${price?.special}</p>
					)}

					<p className={`price__regular ${price.special ? "price--del" : ""}`}>
						${price?.regular}
					</p>
				</div>
			</div>
		</>
	);
};

export default ProductCardMini;
