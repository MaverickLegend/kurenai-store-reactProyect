import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvd2a5bWXfjJw6wKSh7YrzQnA5IAr70OQ",
    authDomain: "kurenaistore-reactproyect.firebaseapp.com",
    projectId: "kurenaistore-reactproyect",
    storageBucket: "kurenaistore-reactproyect.appspot.com",
    messagingSenderId: "927590931989",
    appId: "1:927590931989:web:cdb9deabadd7aa2cb6f81c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)