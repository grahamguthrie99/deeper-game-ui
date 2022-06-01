import React, { useEffect, createContext, useContext, useReducer } from "react";
import { FirebaseContext } from "../firebase/FirebaseContext";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { ManageAuthReducer, initialState } from "./ManageAuthReducer";
import { startLogin, setUser, loginFailure } from "./ManageAuthReducer";

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const firebase = useContext(FirebaseContext);
  const [authState, dispatch] = useReducer(ManageAuthReducer, initialState);

  const actions = {
    async login() {
      dispatch(startLogin());
      try {
        const result = await signInWithPopup(firebase.auth, firebase.provider)
        dispatch(setUser(result.user));
      } catch (e) {
        dispatch(loginFailure());
        throw new Error(e.message);
      }
    },

    logout() {
        signOut(firebase.auth);
        localStorage.clear();
    }
    
  };

  useEffect(() => {
    const unlisten = onAuthStateChanged(firebase.auth, (user) => {
      if (user) {
        dispatch(setUser(user));
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        dispatch(setUser(null));
        localStorage.removeItem("user");
      }
    });
    return () => {
      unlisten();
    };
  }, [firebase.auth]);

  return (
    <AuthContext.Provider
      value={{
        actions,
        authState,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
