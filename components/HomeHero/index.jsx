import React from "react";
import Container from "../Container";
import HeroAdSlider from "../HeroAdSlider";
import HeroCategories from "../HeroCategories";

const HomeHero = () => {
	return (
		<>
			<section className="e_homeHero">
				<Container>
					<HeroCategories />
					<HeroAdSlider />
				</Container>
			</section>
		</>
	);
};

export default HomeHero;
