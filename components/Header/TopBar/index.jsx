import React from "react";

const TopBar = () => {
	return (
		<>
			<section className="e_topbar">
				<div className="container d_flex">
					<div className="left row">
						<i className="fa fa-phone"></i>
						<label> +88012 3456 7894</label>
						<i className="fa fa-envelope"></i>
						<label> support@ui-lib.com</label>
					</div>

					<div className="right row RText">
						{/* <label>Theme FAQ's</label> */}
						<label>Need Help?</label>
					</div>
				</div>
			</section>
		</>
	);
};

export default TopBar;
