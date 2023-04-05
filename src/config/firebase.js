import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';





const firebaseConfig = {
  apiKey: "AIzaSyDwHlPP8-imLTaYDdeI_AMNkKJFT7is49k",
  authDomain: "swipe-7a2ab.firebaseapp.com",
  projectId: "swipe-7a2ab",
  storageBucket: "swipe-7a2ab.appspot.com",
  messagingSenderId: "498624660170",
  appId: "1:498624660170:web:dd7042c2ff61d80ae2ea33"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;