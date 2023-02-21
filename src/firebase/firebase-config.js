import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

    const firebaseConfig = {
        apiKey: "AIzaSyBISxFYWQg8Uvk0LfDhRdZkmVxfJ5A7dVM",
        authDomain: "mywebsite-54a8e.firebaseapp.com",
        projectId: "mywebsite-54a8e",
        storageBucket: "mywebsite-54a8e.appspot.com",
        messagingSenderId: "662942591490",
        appId: "1:662942591490:web:4ee97f5c996a29901e151b",
        measurementId: "G-4GZBF8T3S7"
    };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);