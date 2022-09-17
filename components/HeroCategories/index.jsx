import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const HeroCategories = () => {
	const categories = useSelector((state) => state.categories);

	return (
		<>
			<Box className="e_heroCat">
				{categories.error && <p>Something wrong! Can not load categories.</p>}
				{categories.categories.map((value, i) => (
					<Link key={i} href={value.url}>
						<a>
							<Box className="heroCat__item f_flex">
								<img className="heroCat__img" src={value.img} alt="" />
								<span className="heroCat__title">{value.title}</span>
							</Box>
						</a>
					</Link>
				))}
			</Box>
		</>
	);
};

export default HeroCategories;
