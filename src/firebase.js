import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA44H_74YXwfal8_2MzIuoEbj-AjnPrzlk",
  authDomain: "amcsge-31fed.firebaseapp.com",
  databaseURL: "https://amcsge-31fed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "amcsge-31fed",
  storageBucket: "amcsge-31fed.firebasestorage.app",
  messagingSenderId: "177545403406",
  appId: "1:177545403406:web:295fcd7aafcb3ffe0cb05f",
  measurementId: "G-430PX1W7ZB"
};

const app = initializeApp(firebaseConfig);

// Analytics only if supported
isSupported().then((yes) => {
  if (yes && process.env.NODE_ENV === "production") {
    getAnalytics(app);
  }
});

export default app;
