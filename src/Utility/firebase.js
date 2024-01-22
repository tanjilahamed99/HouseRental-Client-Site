// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZBdE-3q5OkgMN6T1WnG0dg-wU4jYX1Vk",
    authDomain: "houserental-5d09c.firebaseapp.com",
    projectId: "houserental-5d09c",
    storageBucket: "houserental-5d09c.appspot.com",
    messagingSenderId: "787847221693",
    appId: "1:787847221693:web:a0fd5cf26517889a2f02d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth

