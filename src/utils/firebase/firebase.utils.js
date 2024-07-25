import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFh_vlSokuNPkUMswY-DhkoDBh1PF9ok4",
    authDomain: "peoples-cloth.firebaseapp.com",
    projectId: "peoples-cloth",
    storageBucket: "peoples-cloth.appspot.com",
    messagingSenderId: "741543928440",
    appId: "1:741543928440:web:c6ef5be857a7ad2d7c038d",
    measurementId: "G-F21KXYW8RV"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const creatUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }
    return userDocRef;
};