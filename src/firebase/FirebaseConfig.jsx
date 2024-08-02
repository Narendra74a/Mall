import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3B8_72xK9QeYEa-nTeT3M8zsrPU0Q7kc",
  authDomain: "myproject-supermall.firebaseapp.com",
  projectId: "myproject-supermall",
  storageBucket: "myproject-supermall.appspot.com",
  messagingSenderId: "267854114503",
  appId: "1:267854114503:web:1c5a6ad8efadc2e2d9d8e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth};