import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthFunctions = () => {
	const [user, setUser] = useState({});
	const [loggedIn, setLoggedIn] = useState(false);

	const logIn = (phone, password) => {
		console.log({
			phone,
			password,
		});
		setUser({
			phone,
			password,
		});
		setLoggedIn(true);
	};

	const logOut = () => setLoggedIn(false);

	return { loggedIn, logIn, logOut, user };
};

export const AuthProvider = ({ children }) => {
	return (
		<AuthContext.Provider value={AuthFunctions()}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const auth = useContext(AuthContext);

	return { ...auth };
};
export default useAuth;
