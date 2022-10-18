// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDT7korTvjW42sgut_Qi8a9cbhMyyrjeVM",
  authDomain: "nanochat-faa14.firebaseapp.com",
  projectId: "nanochat-faa14",
  storageBucket: "nanochat-faa14.appspot.com",
  messagingSenderId: "281422530276",
  appId: "1:281422530276:web:6764dc661e214c427fcef1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
