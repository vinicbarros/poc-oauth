import { useContext, createContext } from "react";
import {
  GithubAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();

    return signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider value={{ gitHubSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
