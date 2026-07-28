import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAncjXhimbziRxGBSQ0KxH9POw7dnA8iDA",
  authDomain: "shadow-strikers-united.firebaseapp.com",
  projectId: "shadow-strikers-united",
  storageBucket: "shadow-strikers-united.firebasestorage.app",
  messagingSenderId: "267187154965",
  appId: "1:267187154965:web:3ece3bb9811d25efe0de1c",

  databaseURL:
    "https://shadow-strikers-united-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app =
  getApps().length > 0
    ? getApp()
    : initializeApp(firebaseConfig);

export const db = getDatabase(app);