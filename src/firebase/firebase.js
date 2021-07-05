import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyDLqi10Rv-GH2KE8EGT-kTNXoHTjyf6u3U",
  authDomain: "invoices-react-54b74.firebaseapp.com",
  projectId: "invoices-react-54b74",
  storageBucket: "invoices-react-54b74.appspot.com",
  messagingSenderId: "130492784611",
  appId: "1:130492784611:web:94f7c5173770e1631f0ad6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const db = firebase.firestore();
export const auth = firebase.auth();

export const USERS_DB = db.collection("users");

// export async function sendMessage(room, nameMessages, message) {
//   await db.collection("chats").doc(room).collection(nameMessages).add({
//     text: message,
//   });
// }

export default firebase;
