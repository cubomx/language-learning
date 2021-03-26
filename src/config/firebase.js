import firebase from 'firebase';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

import { firebaseConfig } from './settings'

firebase.initializeApp(firebaseConfig);

const Firestore = firebase.firestore();
const Auth = firebase.auth();

export { Firestore, Auth};