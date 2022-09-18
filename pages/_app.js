import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { AuthProvider } from "../hook/useAuth";
import { store } from "../store";
import "../styles/global.scss";

function App({ Component, pageProps }) {
	return (
		<>
			<AuthProvider>
				<Provider store={store}>
					<NextNProgress
						color="#26E07F"
						height={2}
						options={{ trickle: false, showSpinner: false }}
					/>
					<Component {...pageProps} />
				</Provider>
			</AuthProvider>
		</>
	);
}

export default App;
