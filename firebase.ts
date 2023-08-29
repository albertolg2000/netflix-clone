// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_aiX_N0ISwc24IF8ZOZ-fxmAdsgEw2HM",
  authDomain: "netflix-clone-yt-ed871.firebaseapp.com",
  projectId: "netflix-clone-yt-ed871",
  storageBucket: "netflix-clone-yt-ed871.appspot.com",
  messagingSenderId: "5129599953",
  appId: "1:5129599953:web:d2d18b0b8b47a9f536bef0"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }