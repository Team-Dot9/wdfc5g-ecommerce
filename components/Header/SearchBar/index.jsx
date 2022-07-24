import { Badge, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { IconContext } from "react-icons";
import { HiOutlineShoppingBag, HiUser } from "react-icons/hi";
import SEARCH from "../../../assets/images/icon/search.svg";
import LOGO from "../../../assets/images/logo.png";
// import LOGO from "../../../assets/images/logo.svg";

const SearchBar = ({ cartItem }) => {
	useEffect(() => {
		// fixed Header
		window.addEventListener("scroll", function () {
			const search = document.querySelector(".e_searchbar");
			search.classList.toggle("active", window.scrollY > 100);
		});
	});

	return (
		<>
			<nav className="e_searchbar">
				<div className="container">
					<div className="searchbar__logo width ">
						<Image src={LOGO} width={150} height={42.72} alt="" />
					</div>

					<div className="searchbar__searchBox">
						<div className="searchbar__searchBox__icon">
							<Image src={SEARCH} alt="" />
						</div>
						<div className="searchbar__searchBox__search">
							<input
								className="searchbar__searchBox__search"
								type="text"
								placeholder="Search and hit enter..."
							/>
						</div>
						<div className="searchbar__searchBox__categories">All Category</div>
					</div>

					<div className="searchbar__icons">
						<IconContext.Provider value={{ style: { fontSize: "20px" } }}>
							<IconButton
								size="large"
								aria-label="show cart"
								color="inherit"
								sx={{
									height: "44px",
									width: "44px",
								}}>
								<HiUser />
							</IconButton>
							<IconButton
								size="large"
								aria-label="show cart"
								color="inherit"
								sx={{
									height: "44px",
									width: "44px",
								}}>
								<Badge badgeContent={4} color="error">
									<HiOutlineShoppingBag />
								</Badge>
							</IconButton>
						</IconContext.Provider>
					</div>
				</div>
			</nav>
		</>
	);
};

export default SearchBar;
