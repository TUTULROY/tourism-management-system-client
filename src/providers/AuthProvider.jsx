import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";







export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn =(email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    const githubLogIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);

    }
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false);
             setUser(currentUser);
             
         });
         return () =>{
             unSubscribe();
         }
 
     }, [loading])

    const authInfo = {
        user,
        createUser,
        signIn,
        googleLogIn,
        githubLogIn,
        loading,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;