import React, { createContext, useState, useEffect } from 'react';

// Create the context with default values
export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

// AuthProvider component to wrap your app and provide auth state
export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Optional: persist login status with localStorage
  useEffect(() => {
    const savedStatus = localStorage.getItem('isLoggedIn');
    if (savedStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // login function
  function login() {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  }

  // logout function
  function logout() {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
