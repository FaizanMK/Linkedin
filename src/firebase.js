import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjtDjlK4Iq05JJ35PpgVupJ2TOQuWGdNA",
  authDomain: "linkedin-clone-c6669.firebaseapp.com",
  projectId: "linkedin-clone-c6669",
  storageBucket: "linkedin-clone-c6669.appspot.com",
  messagingSenderId: "538645682315",
  appId: "1:538645682315:web:0e1080ea21f7acf788dc8e",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth(app);

export { app, db, auth };
export default db;
