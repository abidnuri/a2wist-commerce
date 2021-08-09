import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqpNZG8y14Cc2o8EwJtFa-zNwBrgdgXng",
  authDomain: "eswap-commerce.firebaseapp.com",
  projectId: "eswap-commerce",
  storageBucket: "eswap-commerce.appspot.com",
  messagingSenderId: "511490013839",
  appId: "1:511490013839:web:b06ceaf5c44a2d141acefa"
};

// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();