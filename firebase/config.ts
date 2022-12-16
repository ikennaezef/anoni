// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAP4kcJjZ4bvi1728JLYMur2Gul1ujBjCE",
	authDomain: "anoni-2e17a.firebaseapp.com",
	projectId: "anoni-2e17a",
	storageBucket: "anoni-2e17a.appspot.com",
	messagingSenderId: "567332848087",
	appId: "1:567332848087:web:73e47e204bedc747858b92",
	measurementId: "G-MPWQHVY0TG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
