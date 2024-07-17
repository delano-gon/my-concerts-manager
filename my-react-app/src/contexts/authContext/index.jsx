import { useContext, useState, createContext, useEffect } from 'react';
import { auth, db } from '../../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function UserAuth() {
  return useContext(AuthContext);
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return () => {
      unsubscribe();
    };
  }, []);
    
  async function initializeUser(user) {
    if (user) {
      console.log(user);
      const showRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(showRef);
      console.log(docSnap.data());
      setUserInfo({userName: docSnap.data().username, 
        email: docSnap.data().email, 
        firstName: docSnap.data().firstName, 
        lastName: docSnap.data().lastName
      });
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }
  
  const value = {
    currentUser,
    userLoggedIn,
    userInfo,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  ) 
}