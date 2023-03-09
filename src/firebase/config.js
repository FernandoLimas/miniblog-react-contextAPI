// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5e7TrrITRuGhKPTTNeOoeBtbYoeu2MdY",
  authDomain: "litleblog.firebaseapp.com",
  projectId: "litleblog",
  storageBucket: "litleblog.appspot.com",
  messagingSenderId: "692855422551",
  appId: "1:692855422551:web:8fafc74ada17bdbfe82d12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// chamando o banco de dados do firebase
const db = getFirestore(app);

export { db };
