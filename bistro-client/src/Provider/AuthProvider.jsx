import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.confi";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUesr] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();
  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signIn with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Update profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUesr(currentUser);
      if (currentUser) {
        // get and set token
        const userInfo = {
          email: currentUser?.email,
        };
        axiosPublic.post("/jwt", userInfo).then((data) => {
          if (data.data.token) {
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          }
        });
      } else {
        // TODO: remove token (if logged out and if token stored in the client side : localStorage, caching, in memory )
        // if use token stored in the cookie : remove it from the server side
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    updateUserProfile,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
