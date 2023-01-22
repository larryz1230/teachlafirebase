import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyCxB-Y-OivCoPYOgDIxHQYrzIv43xqJlgQ",
  
    authDomain: "ddwdwqdwqdqwd123.firebaseapp.com",
  
    projectId: "ddwdwqdwqdqwd123",
  
    storageBucket: "ddwdwqdwqdqwd123.appspot.com",
  
    messagingSenderId: "67704685627",
  
    appId: "1:67704685627:web:692c64ca8397428778c81e",
  
    measurementId: "G-XLB6C8245R"
  
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);

      refreshPage();

      // console.log(name);
    })
    .catch((error) => {
      console.log(error);
    });
};

function refreshPage() {
  window.location.reload(false);
}