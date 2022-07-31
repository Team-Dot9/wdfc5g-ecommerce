import React from "react";
import { IconContext } from "react-icons";
import { FaHeadset, FaIdCard, FaShieldAlt, FaTruck } from "react-icons/fa";

const Wrapper = () => {
	const data = [
		{
			cover: <FaTruck />,
			title: "Worldwide Delivery",
			decs: "We offer competitive prices on our 100 million plus product any range.",
		},
		{
			cover: <FaIdCard />,
			title: "Safe Payment",
			decs: "We offer competitive prices on our 100 million plus product any range.",
		},
		{
			cover: <FaShieldAlt />,
			title: "Shop With Confidence ",
			decs: "We offer competitive prices on our 100 million plus product any range.",
		},
		{
			cover: <FaHeadset />,
			title: "24/7 Support ",
			decs: "We offer competitive prices on our 100 million plus product any range.",
		},
	];
	return (
		<>
			<section className="wrapper background">
				<div className="container grid2">
					{data.map((val, index) => (
						<div className="product" key={index}>
							<div className="img icon-circle">
								<IconContext.Provider
									value={{
										color: "rgb(43, 52, 69)",
										style: { fontSize: "28px" },
									}}>
									<i>{val.cover}</i>
								</IconContext.Provider>
							</div>
							<h3>{val.title}</h3>
							<p>{val.decs}</p>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Wrapper;
