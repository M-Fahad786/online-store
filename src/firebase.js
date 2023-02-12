import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCHTq6pT73xxfN3DsInznSV0VFX7zKN-jo",
    authDomain: "online-store-shop-app.firebaseapp.com",
    projectId: "online-store-shop-app",
    storageBucket: "online-store-shop-app.appspot.com",
    messagingSenderId: "900190019766",
    appId: "1:900190019766:web:40b1346c575bd2d80e0617"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {app ,auth}