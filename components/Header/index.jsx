import { useRouter } from "next/router";
import React, { useState } from "react";
import useAuth from "../../hook/useAuth";
import AuthModel from "../Auth";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import TopBar from "./TopBar";

const Header = ({}) => {
	const auth = useAuth();
	console.log(auth);
	const router = useRouter();
	const [isVisible, setIsVisible] = useState(false);

	const modelOnClose = () => setIsVisible(false);
	const modelOnOpen = () =>
		auth.loggedIn
			? router.push(`/account#dashboard`, null, { shallow: true })
			: setIsVisible(true);

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
