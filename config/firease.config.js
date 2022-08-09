// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDug9skLT96sUFU-1O_8KxQ2CLF-bdhAfs",
	authDomain: "miah-vai-001.firebaseapp.com",
	projectId: "miah-vai-001",
	storageBucket: "miah-vai-001.appspot.com",
	messagingSenderId: "333777540987",
	appId: "1:333777540987:web:b39340eccb92cfe2560fde",
	measurementId: "G-58NVZ3WHGY",
};

// Initialize Firebase
export const initFirebase = () => initializeApp(firebaseConfig);
export const initAnalytics = () => getAnalytics(app);
