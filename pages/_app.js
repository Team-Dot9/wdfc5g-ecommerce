import NextNProgress from "nextjs-progressbar";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/global.scss";

function App({ Component, pageProps }) {
	return (
		<>
			<NextNProgress
				color="#26E07F"
				height={2}
				options={{ trickle: false, showSpinner: false }}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default App;
