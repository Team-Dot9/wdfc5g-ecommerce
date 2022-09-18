import { Badge, Box, Container, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingBag, HiUser } from "react-icons/hi";
import { useSelector } from "react-redux";
import SEARCH from "../../../assets/images/icon/search.svg";
import LOGO from "../../../assets/images/logo.png";

const SearchBar = ({ cartItem, onAvatarClick }) => {
	const cart = useSelector((state) => state.cartProducts);
	const [search, setSearch] = useState("");
	const router = useRouter();
	useEffect(() => {
		// fixed Header
		window.addEventListener("scroll", function () {
			const search = document.querySelector(".e_searchBar");
			search.classList.toggle("active", window.scrollY > 100);
		});
	});

	const searchHandler = (e) => {
		e.preventDefault();

		console.log(e);
		router.push(`/search?q=${search}`, null, { shallow: true });
	};

	return (
		<nav className="e_searchBar">
			<Container className="sb__container" maxWidth="lg">
				<Box className="sb__logo">
					<Link href="/">
						<a className="sb__link">
							<Image src={LOGO} width={150} height={42.72} alt="" priority />
						</a>
					</Link>
				</Box>

				<Box className="sb__searchBox">
					<Box className="sb__searchBox__icon" onClick={searchHandler}>
						<Image src={SEARCH} alt="" />
					</Box>

					<Box
						className="sb__searchBox__search"
						component="form"
						onSubmit={searchHandler}>
						<input
							onChange={(e) => setSearch(e.target.value)}
							className="sb__searchBox__search"
							type="text"
							placeholder="Search and hit enter..."
						/>
					</Box>
					{/* <Box className="sb__searchBox__categories">
						{searchCategory ? searchCategory : "All Category"}
					</Box> */}
				</Box>

				<Box className="sb__icons">
					<IconContext.Provider value={{ style: { fontSize: "20px" } }}>
						{/***
						 * Strategy: If user logged in ? href value will be `/profile` else `/login`.
						 */}
						<IconButton
							size="large"
							aria-label="show cart"
							color="inherit"
							className="sb__searchIcon"
							sx={{
								height: "44px",
								width: "44px",
							}}
							onClick={() => router.push(`/search`, null, { shallow: true })}>
							<AiOutlineSearch />
						</IconButton>

						<IconButton
							size="large"
							aria-label="show cart"
							className="sb__avatarIcon"
							color="inherit"
							sx={{
								height: "44px",
								width: "44px",
							}}
							onClick={onAvatarClick}>
							<HiUser />
						</IconButton>

						<Link href="/cart">
							<a>
								<IconButton
									size="large"
									aria-label="show cart"
									color="inherit"
									sx={{
										height: "44px",
										width: "44px",
									}}>
									<Badge badgeContent={cart.products.length} color="error">
										<HiOutlineShoppingBag />
									</Badge>
								</IconButton>
							</a>
						</Link>
					</IconContext.Provider>
				</Box>
			</Container>
		</nav>
	);
};

export default SearchBar;
