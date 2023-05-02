import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD1XxGdqul6MzaBls1XGlXkuFwsH9XTc4E',
  authDomain: 'topp-clothing-db.firebaseapp.com',
  projectId: 'topp-clothing-db',
  storageBucket: 'topp-clothing-db.appspot.com',
  messagingSenderId: '332094843341',
  appId: '1:332094843341:web:44fcc6172e2b8b0e3f7c84',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
