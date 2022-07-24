import Link from "next/link";
import React, { useState } from "react";

const DATA = [
	{
		_id: "",
		title: "Home",
		url: "/",
	},
	{
		_id: "",
		title: "Shop",
		url: "/shop",
	},
	{
		_id: "",
		title: "Wishlist",
		url: "/profile/wishlist",
	},
	{
		_id: "",
		title: "Order Track",
		url: "/profile/order-track",
	},
	{
		_id: "",
		title: "About Us",
		url: "/about-us",
	},
];

const Navbar = () => {
	// Toggle Menu
	const [MobileMenu, setMobileMenu] = useState(false);

	return (
		<>
			<nav className="e_navbar">
				<div className="container">
					<ul className="navbar__menu" onClick={() => setMobileMenu(false)}>
						{DATA.map((item) => (
							<li key={item._id}>
								<Link href={item.url}>
									<a>{item.title}</a>
								</Link>
							</li>
						))}
					</ul>

					<button
						className="navbar__toggle"
						onClick={() => setMobileMenu(!MobileMenu)}>
						{MobileMenu ? (
							<i className="fas fa-times close home-btn"></i>
						) : (
							<i className="fas fa-bars open"></i>
						)}
					</button>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
