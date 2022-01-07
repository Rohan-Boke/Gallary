// import { initializeApp } from "firebase/app";
import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9ZmqcuIylUu-HW1dzflwtQxe-EXtji1w",
  authDomain: "my-gallary-c7d1d.firebaseapp.com",
  projectId: "my-gallary-c7d1d",
  storageBucket: "my-gallary-c7d1d.appspot.com",
  messagingSenderId: "1067160353638",
  appId: "1:1067160353638:web:a0d77777d2d9cab450a6a7"
};


const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

