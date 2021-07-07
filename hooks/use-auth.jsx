import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

// Add your Firebase credentials
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    appID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  });
} else {
  firebase.app(); // if already initialized, use that one
}

const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [sendEmailVerification, setSendEmailVerification] = useState(false);

  useEffect(() => {
    if (user && !user.emailVerified && sendEmailVerification) {
      user.sendEmailVerification().then(() => {
        setSendEmailVerification(false);
        signout();
      });
    }
  }, [user, sendEmailVerification]);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const triggerEmailVerification = () => {
    setSendEmailVerification(true);
  };

  const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };
  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };
  const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };
  const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        if (typeof window !== undefined) {
          user.getIdToken().then((token) => {
            window.localStorage.setItem('token', token);
          });
        }
      } else {
        setUser(false);
        if (typeof window !== undefined) {
          window.localStorage.removeItem('token');
        }
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  //Get User Token and Save to Local Storage
  useEffect(() => {
    if (user) {
      if (typeof window !== undefined) {
        user.getIdToken().then((token) => {
          window.localStorage.setItem('token', token);
        });
      }
    } else {
      if (typeof window !== undefined) {
        window.localStorage.removeItem('token');
      }
    }
  }, [user]);
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    triggerEmailVerification,
  };
}
