import React, { useState } from "react";
import AuthModel from "../Auth";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import TopBar from "./TopBar";

const Header = ({}) => {
	const [isVisible, setIsVisible] = useState(false);

	const modelOnClose = () => setIsVisible(false);
	const modelOnOpen = () => setIsVisible(true);

	return (
		<>
			<TopBar />
			<SearchBar onAvatarClick={modelOnOpen} />
			<Navbar />

			<AuthModel isVisible={isVisible} onClick={modelOnClose} />
		</>
	);
};

export default Header;
