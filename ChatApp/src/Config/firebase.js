// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, serverTimestamp, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc0KnfS6-cbqpHSg3PrUErG5cOWM-L9vc",
  authDomain: "chat-app-dd-ea3e4.firebaseapp.com",
  projectId: "chat-app-dd-ea3e4",
  storageBucket: "chat-app-dd-ea3e4.appspot.com",
  messagingSenderId: "526258435790",
  appId: "1:526258435790:web:d6d4aa0ced660f793e429f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;
const db = getFirestore(app) ;

const signup = async (username,email,password) =>{
  try {
      const res = await createUserWithEmailAndPassword(auth,email,password);
      const user = res.user;
      await setDoc(doc(db,"users",user.uid),{
        id:user.uid,
        username:username.toLowerCase(),
        email,
        name:"",
        avatar:"",
        bio:"Hey, There i am using chat app",
        lastSeen:serverTimestamp()   //Date.now() 
      });
      await setDoc(doc(db,"chats",user.uid),{
        chatData:[]
      });
  } catch (error) {
      console.error(error);
      toast.error(error.code.split('/')[1].split('-').join(" ")); //message
  }
}

const login = async(email,password)=>{
  try {
      await signInWithEmailAndPassword(auth,email,password);
  } catch (error) {
      console.error(error);
      toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = async ()=>{
  try {
      await signOut(auth);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

export {signup,login,logout,auth,db}