import firebase from 'firebase';
import config from 'config.json';

export const firebaseApp = firebase.initializeApp(config.env.develop.firebase);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();
