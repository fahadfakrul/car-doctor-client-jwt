import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext();
    const auth = getAuth(app);

const Authproviders = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);
 

  const createUser  = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    setLoading(true);
   return signOut(auth);
  };

  useEffect(() => {
           const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            const userEmail = currentUser?.email || user?.email;
            const loggedUser ={ email: userEmail};
            setUser(currentUser);
            setLoading(false);
            if (currentUser){
              axios.post('https://car-doctor-server-roan-psi.vercel.app/jwt', loggedUser, {withCredentials:true})
              .then(() => {
                // console.log('token response',res.data);
              })
            }else{
                 axios.post('https://car-doctor-server-roan-psi.vercel.app/logout', loggedUser, {withCredentials:true})
              .then(() => {
                // console.log('logout response',res.data);
               })
            }
           });
           return () => {
            unsubscribe();
           }
  }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authproviders;