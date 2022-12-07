
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCF3ulY8j32VViEnyXDsaCI1iMWUdLx8ng",
  authDomain: "crud-807-g.firebaseapp.com",
  projectId: "crud-807-g",
  storageBucket: "crud-807-g.appspot.com",
  messagingSenderId: "90751818140",
  appId: "1:90751818140:web:452d90d2e3554374dd1059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)