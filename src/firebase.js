import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM5I7AFa4EdWUhU25zCJQlWHY2jXsNxwc",
  authDomain: "ecommerce-a9629.firebaseapp.com",
  projectId: "ecommerce-a9629",
  storageBucket: "ecommerce-a9629.appspot.com",
  messagingSenderId: "352419150248",
  appId: "1:352419150248:web:08f75c9069637a03f7c59d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
