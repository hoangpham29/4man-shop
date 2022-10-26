//Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDmRgahwbq4Z8niY9DaRxS9HESV68Is-xA",
    authDomain: "man-shop-7b7f3.firebaseapp.com",
    projectId: "man-shop-7b7f3",
    storageBucket: "man-shop-7b7f3.appspot.com",
    messagingSenderId: "190600680521",
    appId: "1:190600680521:web:a03c17568fa3842d9f9b98",
    measurementId: "G-ZE49FVMFN1",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
