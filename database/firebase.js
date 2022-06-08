// database/firebaseDb.js

import firebase from '@firebase/app';
require('firebase/auth');

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD1AleOIt_I31NiimKPKStzp5nuH-f1xuI",
    authDomain: "star-shop-f7ad3.firebaseapp.com",
    projectId: "star-shop-f7ad3",
    storageBucket: "star-shop-f7ad3.appspot.com",
    messagingSenderId: "853533956147",
    appId: "1:853533956147:web:430ee2a191bf0a3fa2ab46",
    measurementId: "G-V9SLCLXV8Q"
};

firebase.initializeApp(firebaseConfig);

export default firebase;