import Link from "next/link";
import React from "react";

const data = [
	{
		img: "./images/category/cat1.png",
		title: "Fashion",
		url: "/fashion",
	},
	{
		img: "./images/category/cat2.png",
		title: "Electronic",
		url: "/electronic",
	},
	{
		img: "./images/category/cat3.png",
		title: "Cars",
		url: "/cars",
	},
	{
		img: "./images/category/cat4.png",
		title: "Home & Garden",
		url: "/home-and-garden",
	},
	{
		img: "./images/category/cat5.png",
		title: "Gifts",
		url: "/gifts",
	},
	{
		img: "./images/category/cat6.png",
		title: "Music",
		url: "/music",
	},
	{
		img: "./images/category/cat7.png",
		title: "Health & Beauty",
		url: "/health-and-beauty",
	},
	{
		img: "./images/category/cat8.png",
		title: "Pets",
		url: "/pets",
	},
	{
		img: "./images/category/cat9.png",
		title: "Baby Toys",
		url: "/baby-toys",
	},
	{
		img: "./images/category/cat10.png",
		title: "Groceries",
		url: "/groceries",
	},
	{
		img: "./images/category/cat11.png",
		title: "Books",
		url: "/books",
	},
];

const HeroCategories = () => {
	return (
		<>
			<div className="e_heroCat">
				{data.map((value, i) => (
					<Link key={i} href={value.url}>
						<a>
							<div className="heroCat__item f_flex">
								<img className="heroCat__img" src={value.img} alt="" />
								<span className="heroCat__title">{value.title}</span>
							</div>
						</a>
					</Link>
				))}
			</div>
		</>
	);
};

export default HeroCategories;
