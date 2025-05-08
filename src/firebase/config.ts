import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// APPLICATION
const app = initializeApp(firebaseConfig);

// ANALYTICS
const analytics = getAnalytics(app);

// DATABASE
const db = getFirestore(app)

// AUTHENTICATION
const auth = getAuth(app)
auth.useDeviceLanguage()

// GOOGLE AUTH
const googleProvider = new GoogleAuthProvider()
googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email")
googleProvider.addScope("https://www.googleapis.com/auth/userinfo.profile")

// GITHUB AUTH
const githubProvider = new GithubAuthProvider()
githubProvider.setCustomParameters({
    'allow_signup': 'true'
});
githubProvider.addScope("read:user")
githubProvider.addScope("user:email")

export {
    app,
    analytics,
    db,
    auth,
    googleProvider,
    githubProvider
}