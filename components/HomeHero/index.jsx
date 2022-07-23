import React from "react";
import HeroAdSlider from "../HeroAdSlider";
import HeroCategories from "../HeroCategories";

const HomeHero = () => {
	return (
		<>
			<section className="home">
				<div className="container d_flex">
					<HeroCategories />
					<HeroAdSlider />
				</div>
			</section>
		</>
	);
};

export default HomeHero;
