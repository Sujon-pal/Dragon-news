import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase.confige.init";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
console.log(user)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password)=>{
    return signInWithEmailAndPassword(auth, email , password)
  }

  const logOut = ()=>{
    return signOut(auth)
  }

  useEffect(() => {
    const newUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      newUser();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    userLogin,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
