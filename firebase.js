import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDyRF_ySa4nsZopBsxgC-8xiksi9FM0Gvo",
  authDomain: "madlab-76605.firebaseapp.com",
  projectId: "madlab-76605",
  storageBucket: "madlab-76605.appspot.com",
  messagingSenderId: "264377952190",
  appId: "1:264377952190:web:187eae1b94f7904cc03bef"
};
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app();
  }
const auth = firebase.auth();
export { auth, firebase};