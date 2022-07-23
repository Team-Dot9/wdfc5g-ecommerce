import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import TopBar from "./TopBar";

const Header = ({ cartItem }) => {
	return (
		<>
			<TopBar />
			<SearchBar cartItem={cartItem} />
			<Navbar />
		</>
	);
};

export default Header;
