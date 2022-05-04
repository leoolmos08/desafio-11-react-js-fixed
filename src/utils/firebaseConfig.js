import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl5affPIiJgnFhvvwbm91INtKeLG3z9qo",
  authDomain: "proyecto-final-react-js-61c11.firebaseapp.com",
  projectId: "proyecto-final-react-js-61c11",
  storageBucket: "proyecto-final-react-js-61c11.appspot.com",
  messagingSenderId: "1079947768205",
  appId: "1:1079947768205:web:74588a95d0495ea9848dc4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;