import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD5uI1RCrLKAD5O4pxSfQCFrq6NYcb_hAQ",
  authDomain: "tnf-6b76d.firebaseapp.com",
  projectId: "tnf-6b76d",
  storageBucket: "tnf-6b76d.appspot.com",
  messagingSenderId: "86153412515",
  appId: "1:86153412515:web:973b37f100f9ef7d1ae416"
};

// measurementId: "G-TKZJVN3J4E"
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const storage = getStorage(app)