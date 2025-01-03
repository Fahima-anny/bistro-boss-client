/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase.config";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null) ;
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null) ;
    const [loading, setLoading] = useState(true) ;

const createUser = (email, pass) => {
    setLoading(true) ;
    return createUserWithEmailAndPassword(auth, email, pass) ;
}

const loginUser = (email, pass) =>{
    setLoading(true) ;
    return signInWithEmailAndPassword(auth, email, pass) ;
}

const logout = () => {
    setLoading(true) ;
    return signOut(auth) ;
}

const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      }) ;
}

useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser) ;
        console.log("current user = ", currentUser);
        setLoading(false) ;
    })

    return () => unSubscribe() ;
} , [])

const authInfo = {
user,
loading,
createUser,
loginUser,
logout,
updateUserProfile
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;