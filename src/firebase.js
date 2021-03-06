import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyB6jyJlEGgwCghLTNkqYSufgLfGxoG2c2g",
  authDomain: "ecommerce-31120.firebaseapp.com",
  projectId: "ecommerce-31120",
  storageBucket: "ecommerce-31120.appspot.com",
  messagingSenderId: "577106752358",
  appId: "1:577106752358:web:e59235f95c5706c3624ea7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db