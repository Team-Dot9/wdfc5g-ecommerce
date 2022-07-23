import React from "react";
import Ndata from "./Ndata";

const NewArrivals = () => {
	return (
		<>
			<section className="NewArrivals background">
				<div className="container">
					{/* Header Started */}
					<div className="heading d_flex">
						<div className="heading-left row  f_flex">
							<img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
							<h2>New Arrivals </h2>
						</div>
						<div className="heading-right row ">
							<span>View all</span>
							<i className="fa-solid fa-caret-right"></i>
						</div>
					</div>
					{/* Header Ended */}

					{/* Body Started */}
					<div className="content grid product">
						{Ndata.map((val, index) => {
							return (
								<div className="box" key={index}>
									<div className="img">
										<img src={val.cover} alt="" />
									</div>
									<h4>{val.name}</h4>
									<span>${val.price}</span>
								</div>
							);
						})}
					</div>
					{/* Body Ended */}
				</div>
			</section>
		</>
	);
};

export default NewArrivals;
