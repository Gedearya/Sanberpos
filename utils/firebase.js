// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtZ3z8PfG19NM1n0gErHkUwNNIxxp8qn8",
    authDomain: "pos-sanber.firebaseapp.com",
    projectId: "pos-sanber",
    storageBucket: "pos-sanber.appspot.com",
    messagingSenderId: "30026642896",
    appId: "1:30026642896:web:50bde78d72ea9ebca1b5d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);