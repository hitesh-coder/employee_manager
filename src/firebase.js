import firebase from "firebase/app";
// import { ref, onUnmounted } from "vue";
import 'firebase/firestore';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBugV-7IMEW-RE6ApMyJUB-xCohny8HGKI",
    authDomain: "vue-with-firebase-a2371.firebaseapp.com",
    projectId: "vue-with-firebase-a2371",
    storageBucket: "vue-with-firebase-a2371.appspot.com",
    messagingSenderId: "393977070003",
    appId: "1:393977070003:web:229d784fb8bac9f3e24bc6",
    measurementId: "G-RM0WBV0SE0"
}

const firebaseapp = firebase.initializeApp(config)

export default firebaseapp.firestore()