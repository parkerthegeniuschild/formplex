import firebase from "firebase";
import { FirebaseConfig } from "../config/keys";

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref('users/');
firebase.database.enableLogging(true, true);

export default databaseRef;
