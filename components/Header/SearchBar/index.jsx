import Link from "next/link";
import React from "react";
import LOGO from "../../../assets/images/logo.svg";

const SearchBar = ({ cartItem }) => {
	// fixed Header
	window.addEventListener("scroll", function () {
		const search = document.querySelector(".search");
		search.classList.toggle("active", window.scrollY > 100);
	});

	return (
		<>
			<section className="search">
				<div className="container c_flex">
					<div className="logo width ">
						<img src={LOGO} alt="" />
					</div>

					<div className="search-box f_flex">
						<i className="fa fa-search"></i>
						<input type="text" placeholder="Search and hit enter..." />
						<span>All Category</span>
					</div>

					<div className="icon f_flex width">
						<i className="fa fa-user icon-circle"></i>
						<div className="cart">
							<Link href="/cart">
								<a>
									<i className="fa fa-shopping-bag icon-circle"></i>
									<span>{cartItem.length === 0 ? "" : cartItem.length}</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SearchBar;
