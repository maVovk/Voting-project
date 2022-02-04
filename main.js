// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2uAgoqny2W6kAdWcb7zgV6LS7FOeCjnk",
  authDomain: "voting-project-1c40e.firebaseapp.com",
  projectId: "voting-project-1c40e",
  storageBucket: "voting-project-1c40e.appspot.com",
  messagingSenderId: "180244893487",
  appId: "1:180244893487:web:5a07449068e2609e5edbda",
  measurementId: "G-CQDZGG0MJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage1 = getStorage(app);
const storage2 = getStorage(customApp, "gs://my-custom-bucket");