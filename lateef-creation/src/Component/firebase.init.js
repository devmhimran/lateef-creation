
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.VITE_authDomain,
  projectId: import.meta.VITE_projectId,
  storageBucket: import.meta.VITE_storageBucket,
  messagingSenderId: import.meta.VITE_messagingSenderId,
  appId: import.meta.VITE_appId


//   apiKey:"AIzaSyAgMncWuu50TxHw0IWz7LzvNPBU6w6IEss" ,
//   authDomain:process.env.REACT_APP_authDomain ,
//   projectId:process.env.REACT_APP_projectId ,
//   storageBucket:process.env.REACT_APP_storageBucket ,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId ,
//   appId:process.env.REACT_APP_appId ,
};
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);

export default auth;