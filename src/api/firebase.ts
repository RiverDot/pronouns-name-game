// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANjF_gucmvi7uM8ILD2YeF-hKpU4gb7oY",
    authDomain: "the-name-game-9981f.firebaseapp.com",
    projectId: "the-name-game-9981f",
    storageBucket: "the-name-game-9981f.appspot.com",
    messagingSenderId: "48036889664",
    appId: "1:48036889664:web:ffc24a4c621dca39a5cba5",
    measurementId: "G-H37G8KLBD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export function logAna(logTarget: string) {
    logEvent(analytics, logTarget);
}