import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

  let firebaseApp;
  let firebaseAuth;

useEffect(() => {
    let firebaseConfig = {
apiKey: "AIzaSyD1AleOIt_I31NiimKPKStzp5nuH-f1xuI",
authDomain: "star-shop-f7ad3.firebaseapp.com",
projectId: "star-shop-f7ad3",
storageBucket: "star-shop-f7ad3.appspot.com",
messagingSenderId: "853533956147",
appId: "1:853533956147:web:430ee2a191bf0a3fa2ab46",
measurementId: "G-V9SLCLXV8Q"
    };
    firebaseApp = initializeApp(firebaseConfig);
    /*
    firebaseAuth = initializeAuth(firebaseApp, {
      persistence: browserSessionPersistence,
      popupRedirectResolver: browserPopupRedirectResolver,
    });
    */
    firebaseAuth = getAuth();


    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("User is signed in");

      } else {
        // User is signed out
        console.log("User is signed out");
      }
    });

  }, []);