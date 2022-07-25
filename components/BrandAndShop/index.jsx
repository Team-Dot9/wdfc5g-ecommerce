import React from "react";

const data = [
	{
		cateImg: "./images/category/cat-1.png",
		cateName: "Apple",
	},
	{
		cateImg: "./images/category/cat-2.png",
		cateName: "Samasung",
	},
	{
		cateImg: "./images/category/cat-1.png",
		cateName: "Oppo",
	},
	{
		cateImg: "./images/category/cat-2.png",
		cateName: "Vivo",
	},
	{
		cateImg: "./images/category/cat-1.png",
		cateName: "Redimi",
	},
	{
		cateImg: "./images/category/cat-2.png",
		cateName: "Sony",
	},
];

const BrandAndShop = () => {
	return (
		<>
			<div className="e_bas">
				<div className="bas__wrapper">
					<div className="bas__head d_flex">
						<h1>Brands </h1>
						<h1>Shops </h1>
					</div>

					<div className="bas__body">
						{data.map((value, index) => (
							<div className="bas__item f_flex" key={index}>
								<img src={value.cateImg} alt="" />
								<span>{value.cateName}</span>
							</div>
						))}
					</div>
					<div className="bas__footer">
						<button className="bas__item">View All Brands</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default BrandAndShop;
